import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes                      from 'prop-types';
import React                          from 'react';
import { Scrollbars }                 from 'tt-react-custom-scrollbars';
import {
    Accordion,
    Button,
    Dropdown }                        from 'deriv-components';
import Localize                       from 'App/Components/Elements/localize.jsx';
import { localize }                   from 'App/i18n';
import { connect }                    from 'Stores/connect';
import { website_name }               from 'App/Constants/app-config';
import PaymentAgentDetails            from './payment-agent-details.jsx';
import EmailSent                      from '../email-sent.jsx';
import Loading                        from '../../../../templates/_common/components/loading.jsx';

class PaymentAgentList extends React.Component {
    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div className='cashier__wrapper'>
                {this.props.is_email_sent ?
                    <EmailSent
                        is_email_sent={this.props.is_email_sent}
                        is_resend_clicked={this.props.is_resend_clicked}
                        resend_timeout={this.props.resend_timeout}
                    />
                    :
                    <div className='payment-agent__wrapper'>
                        <Scrollbars
                            style={{ width: '100%', height: '100%' }}
                            autoHide
                        >
                            <p><Localize i18n_default_text='A payment agent is authorised to process deposits and withdrawals for you if your local payment methods or currencies are not supported on {{website_name}}.' values={{ website_name }} /></p>
                            <div className='payment-agent__instructions'>
                                <div className='payment-agent__instructions-section'>
                                    <h2 className='payment-agent__header'><Localize i18n_default_text='Deposit' /></h2>
                                    <p><Localize i18n_default_text='Choose a payment agent and contact them for instructions.' /></p>
                                </div>
                                <div className='payment-agent__instructions-section'>
                                    <h2 className='payment-agent__header'><Localize i18n_default_text='Withdrawal' /></h2>
                                    <Button
                                        className='btn--primary btn--primary--orange payment-agent__button'
                                        has_effect
                                        text={localize('Request withdrawal form')}
                                        onClick={this.props.sendVerificationEmail}
                                    />
                                </div>
                            </div>
                            <h2 className='payment-agent__header payment-agent__available-header'><Localize i18n_default_text='Available Payment Agents' /></h2>
                            {this.props.is_loading ?
                                <Loading className='payment-agent__loader' />
                                :
                                <React.Fragment>
                                    <div className='payment-agent__available-selector'>
                                        <Localize i18n_default_text='Deposit/withdrawal method' />
                                        <Dropdown
                                            id='payment_methods'
                                            className='payment-agent__drop-down'
                                            classNameDisplay='payment-agent__drop-down-display'
                                            classNameDisplaySpan='payment-agent__drop-down-display-span'
                                            classNameItems='payment-agent__drop-down-items'
                                            list={this.props.supported_banks}
                                            name='payment_methods'
                                            value={this.props.selected_bank}
                                            onChange={this.props.onChangePaymentMethod}
                                        />
                                    </div>
                                    <Accordion
                                        className='payment-agent__accordion'
                                        list={this.props.payment_agent_list.map((payment_agent) => ({
                                            header : payment_agent.name,
                                            content: (
                                                <PaymentAgentDetails
                                                    payment_agent_email={payment_agent.email}
                                                    payment_agent_phone={payment_agent.phone}
                                                    payment_agent_url={payment_agent.url}
                                                />
                                            ),
                                        }))}
                                    />
                                </React.Fragment>
                            }
                            <div className='payment-agent__disclaimer'>
                                <span className='payment-agent__text--bold'><Localize i18n_default_text='DISCLAIMER' /></span>:&nbsp;
                                <Localize i18n_default_text='{{website_name}} is not affiliated with any Payment Agent. Customers deal with Payment Agents at their sole risk. Customers are advised to check the credentials of Payment Agents, and check the accuracy of any information about Payments Agents (on Deriv or elsewhere) before transferring funds.' values={{ website_name }} />
                            </div>
                        </Scrollbars>
                    </div>
                }
            </div>
        );
    }
}

PaymentAgentList.propTypes = {
    is_email_sent        : PropTypes.bool,
    is_loading           : PropTypes.bool,
    is_resend_clicked    : PropTypes.bool,
    onChangePaymentMethod: PropTypes.func,
    onMount              : PropTypes.func,
    payment_agent_list   : PropTypes.array,
    resend_timeout       : PropTypes.number,
    selected_bank        : PropTypes.string,
    sendVerificationEmail: PropTypes.func,
    supported_banks      : MobxPropTypes.arrayOrObservableArray,
};

export default connect(
    ({ modules }) => ({
        is_email_sent        : modules.cashier.config.payment_agent.verification.is_email_sent,
        is_resend_clicked    : modules.cashier.config.payment_agent.verification.is_resend_clicked,
        is_loading           : modules.cashier.is_loading,
        onChangePaymentMethod: modules.cashier.onChangePaymentMethod,
        onMount              : modules.cashier.onMountPaymentAgentList,
        payment_agent_list   : modules.cashier.config.payment_agent.filtered_list,
        resend_timeout       : modules.cashier.config.payment_agent.verification.resend_timeout,
        selected_bank        : modules.cashier.config.payment_agent.selected_bank,
        sendVerificationEmail: modules.cashier.sendVerificationEmail,
        supported_banks      : modules.cashier.config.payment_agent.supported_banks,
    })
)(PaymentAgentList);
