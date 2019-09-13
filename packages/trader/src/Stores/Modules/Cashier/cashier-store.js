import {
    action,
    observable,
    toJS }                  from 'mobx';
import { isCryptocurrency } from '_common/base/currency_base';
import BinarySocket         from '_common/base/socket_base';
import { isEmptyObject }    from '_common/utility';
import { localize }         from 'App/i18n';
import { WS }               from 'Services';
import BaseStore            from '../../base-store';

const bank_default_option = [{ text: localize('Any'), value: '' }];

class Config {
    container          = '';
    is_session_timeout = true;
    onIframeLoaded     = '';
    timeout_session    = '';

    @observable iframe_height = 0;
    @observable iframe_url    = '';

    constructor({ container }) {
        this.container = container;
    }
}

class ConfigError {
    @observable message       = '';
    @observable button_text   = '';
    @observable link          = '';
    @observable onClickButton = null;
}

class ConfigPaymentAgent {
    @observable agents                 = [];
    @observable container              = 'payment_agent';
    @observable error                  = new ConfigError();
    @observable filtered_list          = [];
    @observable list                   = [];
    @observable is_name_selected       = true;
    @observable is_withdraw            = false;
    @observable is_withdraw_successful = false;
    @observable receipt                = {};
    @observable selected_agent         = {};
    @observable selected_bank          = bank_default_option[0].value;
    @observable supported_banks        = bank_default_option;
    @observable verification           = new ConfigVerification();
}

class ConfigVerification {
    is_button_clicked = false;
    timeout_button    = '';

    @observable is_email_sent     = false;
    @observable is_resend_clicked = false;
    @observable resend_timeout    = 60;
}

export default class CashierStore extends BaseStore {
    @observable is_loading = false;

    @observable config = {
        deposit: {
            ...(toJS(new Config({ container: 'deposit' }))),
            error: new ConfigError(),
        },
        payment_agent: new ConfigPaymentAgent(),
        withdraw     : {
            ...(toJS(new Config({ container: 'withdraw' }))),
            error       : new ConfigError(),
            verification: new ConfigVerification(),
        },
    };

    active_container = this.config.deposit.container;

    containers = [
        this.config.deposit.container,
        this.config.withdraw.container,
    ];

    error_fields = {
        address_city    : localize('Town/City'),
        address_line_1  : localize('First line of home address'),
        address_postcode: localize('Postal Code/ZIP'),
        address_state   : localize('State/Province'),
        email           : localize('Email address'),
        phone           : localize('Telephone'),
        residence       : localize('Country of Residence'),
    };

    constructor({ root_store }) {
        super({ root_store });

        this.onSwitchAccount(this.accountSwitcherListener);
    }

    @action.bound
    async onMount(verification_code) {
        await BinarySocket.wait('authorize');
        if (this.containers.indexOf(this.active_container) === -1) {
            throw new Error('Cashier Store onMount requires a valid container name.');
        }
        this.setErrorMessage('');
        this.setContainerHeight(0);
        this.setLoading(true);

        if (!this.config[this.active_container].is_session_timeout) {
            this.checkIframeLoaded();
            return;
        }

        // if session has timed out reset everything
        this.setIframeUrl('');

        if (this.active_container === this.config.withdraw.container && !verification_code) {
            // if no verification code, we should request again
            return;
        }

        // we need to see if client's country has PA
        // if yes, we can show the PA tab in cashier
        if (!this.config.payment_agent.list.length) {
            const payment_agent_list = await this.getPaymentAgentList();
            this.setPaymentAgentList(payment_agent_list);
        }

        const response_cashier = await WS.cashier(this.active_container, verification_code);

        if (response_cashier.error) {
            this.setLoading(false);
            this.setErrorMessage(response_cashier.error);
            this.setSessionTimeout(true);
            this.clearTimeoutCashierUrl();
            if (verification_code) {
                // clear verification code on error
                this.clearVerification();
            }
        } else if (isCryptocurrency(this.root_store.client.currency)) {
            this.setLoading(false);
            this.setContainerHeight('700');
            this.setIframeUrl(response_cashier.cashier);
            // crypto cashier can only be accessed once and the session expires
            // so no need to set timeouts to keep the session alive
        } else {
            await this.checkIframeLoaded();
            this.setIframeUrl(response_cashier.cashier);
            this.setSessionTimeout(false);
            this.setTimeoutCashierUrl();
        }
    }

    @action.bound
    async checkIframeLoaded() {
        this.removeOnIframeLoaded();
        this.config[this.active_container].onIframeLoaded = (function (e) {
            if (/cashier|doughflow/.test(e.origin)) {
                this.setLoading(false);
                // set the height of the container after content loads so that the
                // loading bar stays vertically centered until the end
                this.setContainerHeight(+e.data || '1200');
                // do not remove the listener
                // on every iframe screen change we need to update the height to more/less to match the new content
            }
        }).bind(this);
        window.addEventListener('message', this.config[this.active_container].onIframeLoaded, false);
    }

    removeOnIframeLoaded(container = this.active_container) {
        if (this.config[container].onIframeLoaded) {
            window.removeEventListener('message', this.config[container].onIframeLoaded, false);
            this.config[container].onIframeLoaded = '';
        }
    }

    @action.bound
    setIframeUrl(url, container = this.active_container) {
        this.config[container].iframe_url = url;
        if (url) {
            // after we set iframe url we can clear verification code
            this.root_store.client.setVerificationCode('');
        }
    }

    @action.bound
    setContainerHeight(height) {
        this.config[this.active_container].iframe_height = height;
    }

    @action.bound
    setErrorMessage(error, onClickButton) {
        const obj_error = this.getError(error) || {};
        this.config[this.active_container].error = {
            onClickButton,
            message    : obj_error.error_message,
            button_text: obj_error.error_button_text,
            link       : obj_error.error_link,
        };
    }

    getError = (error) => {
        if (!error || isEmptyObject(error)) {
            return null;
        }

        let error_message,
            error_button_text,
            error_link;

        switch (error.code) {
            case 'ASK_EMAIL_VERIFY':
            case 'InvalidToken':
                error_message = [
                    localize('Verification code is wrong.'),
                    localize('Please use the link sent to your email.'),
                ];
                error_button_text = localize('Okay');
                break;
            case 'ASK_TNC_APPROVAL':
                error_message = localize('Please accept the updated Terms and Conditions.');
                error_link    = 'user/tnc_approvalws';
                break;
            case 'ASK_FIX_DETAILS':
                error_message = [
                    localize('There was a problem validating your personal details.'),
                    (error.details.fields ?
                        localize('Please update your {{details}}.', { details: error.details.fields.map(field => (this.error_fields[field] || field)).join(', ') })
                        :
                        localize('Please update your details.')
                    ),
                ];
                break;
            // TODO: handle ukgc after enabling different brokers on deriv
            // case 'ASK_UK_FUNDS_PROTECTION':
            //     error_message = [
            //         localize(
            //             'We are required by our license to inform you about what happens to funds which we hold on account for you, and the extent to which funds are protected in the event of insolvency {{gambling_link}}.',
            //             { gambling_link: '<a href=\'%\' target=\'_blank\' rel=\'noopener noreferrer\'>%</a>'.replace(/%/g, 'http://www.gamblingcommission.gov.uk/for-the-public/Your-rights/Protection-of-customer-funds.aspx') }
            //         ),
            //         localize('The company holds customer funds in separate bank accounts to the operational accounts which would not, in the event of insolvency, form part of the Company\'s assets. This meets the Gambling Commission\'s requirements for the segregation of customer funds at the level: <strong>medium protection</strong>.'),
            //     ];
            //     error_button_text = localize('Proceed');
            //     break;
            case 'ASK_AUTHENTICATE':
                error_message = localize('Please [_1]authenticate[_2] your account.');
                error_link    = 'user/authenticate';
                break;
            case 'ASK_FINANCIAL_RISK_APPROVAL':
                error_message = [
                    localize('Financial Risk approval is required.'),
                    localize('Please contact customer support for more information.'),
                ];
                error_link = 'contact';
                break;
            case 'ASK_AGE_VERIFICATION':
                error_message = [
                    localize('Account needs age verification.'),
                    localize('Please contact customer support for more information.'),
                ];
                error_link = 'contact';
                break;
            case 'ASK_SELF_EXCLUSION_MAX_TURNOVER_SET':
                error_message = localize('Please set your 30-day turnover limit to access the cashier.');
                error_link    = 'user/security/self_exclusionws';
                break;
            default:
                error_message = error.message;
        }

        return { error_message, error_link, error_button_text };
    };

    @action.bound
    setLoading(is_loading) {
        this.is_loading = is_loading;
    }

    @action.bound
    setSessionTimeout(is_session_time_out, container = this.active_container) {
        this.config[container].is_session_timeout = is_session_time_out;
        if (is_session_time_out) {
            this.removeOnIframeLoaded(container);
        }
    }

    @action.bound
    setVerificationButtonClicked(is_button_clicked, container = this.active_container) {
        this.config[container].verification.is_button_clicked = is_button_clicked;
    }

    @action.bound
    setVerificationEmailSent(is_email_sent, container = this.active_container) {
        this.config[container].verification.is_email_sent = is_email_sent;
    }

    @action.bound
    setVerificationResendClicked(is_resend_clicked, container = this.active_container) {
        this.config[container].verification.is_resend_clicked = is_resend_clicked;
    }

    @action.bound
    setVerificationResendTimeout(resend_timeout, container = this.active_container) {
        this.config[container].verification.resend_timeout = resend_timeout;
    }

    clearTimeoutCashierUrl(container = this.active_container) {
        if (this.config[container].timeout_session) {
            clearTimeout(this.config[container].timeout_session);
        }
    }

    // cashier session expires after one minute
    // so we should resend the request for container (deposit|withdraw) url on next mount
    @action.bound
    setTimeoutCashierUrl() {
        this.clearTimeoutCashierUrl();
        this.config[this.active_container].timeout_session = setTimeout(() => {
            this.setSessionTimeout(true);
        }, 60000);
    }

    clearTimeoutVerification(container = this.active_container) {
        if (this.config[container].verification.timeout_button) {
            clearTimeout(this.config[container].verification.timeout_button);
        }
    }

    // verification token expires after one hour
    // so we should show the verification request button again after that
    @action.bound
    setTimeoutVerification() {
        this.clearTimeoutVerification();
        this.config[this.active_container].verification.timeout_button = setTimeout(() => {
            this.clearVerification();
        }, 3600000);
    }

    @action.bound
    async sendVerificationEmail() {
        if (this.config[this.active_container].verification.is_button_clicked) {
            return;
        }

        this.setErrorMessage('');
        this.setVerificationButtonClicked(true);
        const withdrawal_type = `payment${this.active_container === this.config.payment_agent.container ? 'agent' : ''}_withdraw`;
        const response_verify_email = await WS.verifyEmail(this.root_store.client.email, withdrawal_type);

        if (response_verify_email.error) {
            this.clearVerification();
            this.setErrorMessage(response_verify_email.error);
        } else {
            this.setVerificationEmailSent(true);
            this.setTimeoutVerification();
        }
    }

    @action.bound
    resendVerificationEmail() {
        // don't allow clicking while ongoing timeout
        if (this.config[this.active_container].verification.resend_timeout < 60) {
            return;
        }
        this.setVerificationButtonClicked(false);
        this.setCountDownResendVerification();
        this.sendVerificationEmail();
    }

    setCountDownResendVerification() {
        this.setVerificationResendTimeout(this.config[this.active_container].verification.resend_timeout - 1);
        const resend_interval = setInterval(() => {
            if (this.config[this.active_container].verification.resend_timeout === 1) {
                this.setVerificationResendTimeout(60);
                clearInterval(resend_interval);
            } else {
                this.setVerificationResendTimeout(this.config[this.active_container].verification.resend_timeout - 1);
            }
        }, 1000);
    }

    clearVerification(container = this.active_container) {
        this.clearTimeoutVerification(container);
        this.setVerificationButtonClicked(false, container);
        this.setVerificationEmailSent(false, container);
        this.setVerificationResendClicked(false, container);
        this.setVerificationResendTimeout(60, container);
        this.root_store.client.setVerificationCode('');
    }

    @action.bound
    setActiveTab(container) {
        this.active_container = container;
        // used to detect if old tabs with withdrawal tab open should be closed after verification token is opened in new tab
        this.root_store.ui.setCashierActiveTab(container);
    }

    @action.bound
    async onMountPaymentAgentList() {
        await BinarySocket.wait('authorize');
        if (!this.config.payment_agent.list.length) {
            this.setLoading(true);
            const payment_agent_list = await BinarySocket.wait('paymentagent_list');
            if (!this.config.payment_agent.list.length) {
                this.setPaymentAgentList(payment_agent_list);
            }
        }

        this.setIsNameSelected(true);
        this.filterPaymentAgentList();
        this.setLoading(false);
    }

    @action.bound
    async getPaymentAgentList() {
        const residence = this.root_store.client.accounts[this.root_store.client.loginid].residence;
        const currency  = this.root_store.client.currency;
        return WS.paymentAgentList(residence, currency);
    }

    @action.bound
    setIsNameSelected(is_name_selected = !this.config.payment_agent.is_name_selected) {
        this.config.payment_agent.is_name_selected = is_name_selected;
    }

    @action.bound
    addSupportedBank(bank) {
        const supported_bank_exists =
            this.config.payment_agent.supported_banks.find(supported_bank =>
                supported_bank.value === bank.toLowerCase()
            );
        if (!supported_bank_exists) {
            this.config.payment_agent.supported_banks.push({ text: bank, value: bank.toLowerCase() });
        }
    }

    @action.bound
    setPaymentAgentList(payment_agent_list) {
        payment_agent_list.paymentagent_list.list.forEach((payment_agent) => {
            this.config.payment_agent.list.push({
                email          : payment_agent.email,
                phone          : payment_agent.telephone,
                name           : payment_agent.name,
                supported_banks: payment_agent.supported_banks,
                url            : payment_agent.url,
            });
            if (payment_agent.supported_banks) {
                payment_agent.supported_banks.split(',').forEach((bank) => {
                    this.addSupportedBank(bank);
                });
            }
        });

        // sort supported banks alphabetically by value, the option 'any' with value '' should be on top
        this.config.payment_agent.supported_banks.replace(
            this.config.payment_agent.supported_banks.slice().sort(function(a, b){
                if (a.value < b.value) { return -1; }
                if (a.value > b.value) { return 1; }
                return 0;
            })
        );
    }

    @action.bound
    filterPaymentAgentList(bank) {
        if (bank) {
            this.config.payment_agent.filtered_list = [];
            this.config.payment_agent.list.forEach((payment_agent) => {
                if (payment_agent.supported_banks && payment_agent.supported_banks.toLowerCase().split(',').indexOf(bank) !== -1) {
                    this.config.payment_agent.filtered_list.push(payment_agent);
                }
            });
        } else {
            this.config.payment_agent.filtered_list = this.config.payment_agent.list;
        }
    }

    @action.bound
    onChangePaymentMethod({ target }) {
        this.config.payment_agent.selected_bank = target.value;
        this.filterPaymentAgentList(target.value);
    }

    @action.bound
    async onMountPaymentAgentWithdraw() {
        this.setLoading(true);
        this.setIsWithdraw(true);
        this.setIsWithdrawSuccessful(false);
        this.setReceipt({});

        await BinarySocket.wait('authorize');

        if (!this.config.payment_agent.list.length) {
            const payment_agent_list = await this.getPaymentAgentList();
            payment_agent_list.paymentagent_list.list.forEach((payment_agent) => {
                this.addPaymentAgent(payment_agent);
            });
            this.onChangePaymentAgent({ target: { value: this.config.payment_agent.agents[0].value } });
        }

        this.setLoading(false);
    }

    @action.bound
    setIsWithdraw(is_withdraw = !this.config.payment_agent.is_withdraw) {
        this.config.payment_agent.is_withdraw = is_withdraw;
    }

    @action.bound
    setIsWithdrawSuccessful(is_withdraw_successful) {
        this.config.payment_agent.is_withdraw_successful = is_withdraw_successful;
    }

    @action.bound
    setReceipt({
        amount_transferred,
        payment_agent_email,
        payment_agent_id,
        payment_agent_name,
        payment_agent_phone,
        payment_agent_url,
    }) {
        this.config.payment_agent.receipt = {
            amount_transferred,
            payment_agent_email,
            payment_agent_id,
            payment_agent_name,
            payment_agent_phone,
            payment_agent_url,
        };
    }

    @action.bound
    addPaymentAgent(payment_agent) {
        this.config.payment_agent.agents.push({
            text          : payment_agent.name,
            value         : payment_agent.paymentagent_loginid,
            max_withdrawal: payment_agent.max_withdrawal,
            min_withdrawal: payment_agent.min_withdrawal,
            email         : payment_agent.email,
            phone         : payment_agent.telephone,
            url           : payment_agent.url,
        });
    }

    @action.bound
    onChangePaymentAgent({ target }) {
        this.config.payment_agent.selected_agent =
            this.config.payment_agent.agents.find((agent) => agent.value === target.value);
    }

    @action.bound
    async requestPaymentAgentWithdraw({ loginid, currency, amount, verification_code }) {
        const payment_agent_withdraw = await WS.paymentAgentWithdraw({ loginid, currency, amount, verification_code });
        if (+payment_agent_withdraw.paymentagent_withdraw === 1) {
            this.setReceipt({
                amount_transferred : amount,
                payment_agent_email: this.config.payment_agent.selected_agent.email,
                payment_agent_id   : this.config.payment_agent.selected_agent.value,
                payment_agent_name : this.config.payment_agent.selected_agent.text,
                payment_agent_phone: this.config.payment_agent.selected_agent.phone,
                payment_agent_url  : this.config.payment_agent.selected_agent.url,
            });
            this.setIsWithdrawSuccessful(true);
        } else {
            this.setErrorMessage(payment_agent_withdraw.error, this.resetPaymentAgent);
        }
    }

    @action.bound
    resetPaymentAgent = (should_clear_list) => {
        this.setIsWithdraw(false);
        this.clearVerification();
        if (should_clear_list) {
            this.config.payment_agent = new ConfigPaymentAgent();
        }
    };

    onAccountSwitch() {
        [this.config.withdraw.container, this.config.payment_agent.container].forEach((container) => {
            this.clearVerification(container);
        });
        [this.config.deposit.container, this.config.withdraw.container].forEach((container) => {
            this.setIframeUrl('', container);
            this.clearTimeoutCashierUrl(container);
            this.setSessionTimeout(true, container);
        });
        this.resetPaymentAgent(true);
    }

    accountSwitcherListener() {
        return new Promise(async (resolve) => resolve(this.onAccountSwitch()));
    }
}
