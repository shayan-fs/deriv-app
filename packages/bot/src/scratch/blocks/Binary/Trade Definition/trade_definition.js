import { defineContract }    from '../../images';
import { setBlockTextColor } from '../../../utils';
import config                from '../../../../constants';
import ApiHelpers            from '../../../../services/api/helpers';
import { translate }         from '../../../../utils/lang/i18n';

Blockly.Blocks.trade_definition = {
    init() {
        this.jsonInit(this.definition());
    },
    definition() {
        return {
            message0: translate('%1 (1) Define your trade contract %2'),
            message1: '%1',
            message2: translate('Run Once at Start: %1'),
            message3: '%1',
            message4: translate('Define Trade Options: %1'),
            message5: '%1',
            args0   : [
                {
                    type  : 'field_image',
                    src   : defineContract,
                    width : 25,
                    height: 25,
                    alt   : 'T',
                },
                {
                    type: 'input_dummy',
                },
            ],
            args1: [
                {
                    type: 'input_statement',
                    name: 'TRADE_OPTIONS',
                },
            ],
            args2: [
                {
                    type: 'input_dummy',
                },
            ],
            args3: [
                {
                    type : 'input_statement',
                    name : 'INITIALIZATION',
                    check: null,
                },
            ],
            args4: [
                {
                    type: 'input_dummy',
                },
            ],
            args5: [
                {
                    type: 'input_statement',
                    name: 'SUBMARKET',
                },
            ],
            colour         : '#2a3052',
            colourSecondary: Blockly.Colours.Binary.colourSecondary,
            colourTertiary : Blockly.Colours.Binary.colourTertiary,
            tooltip        : translate('Trade Definition tooltip'),
            category       : Blockly.Categories.Trade_Definition,
        };
    },
    meta() {
        return {
            'display_name': translate('Trade Definition'),
            'description' : translate('Define market type, stake, trade type and duration in trade'),
        };
    },
    onchange(event) {
        setBlockTextColor(this);
        if (!this.workspace || this.isInFlyout || this.workspace.isDragging()) {
            return;
        }

        if (event.type === Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            // Maintain single instance of this block, dispose of older ones.
            const top_blocks = this.workspace.getTopBlocks(true);

            top_blocks.forEach(top_block => {
                if (top_block.type === this.type && top_block.id !== this.id) {
                    top_block.dispose(false);
                }
            });

            const market_block    = this.getChildByType('trade_definition_market');
            const selected_market = market_block.getFieldValue('MARKET_LIST');
            const change_event    = new Blockly.Events.BlockChange(market_block, 'field', 'MARKET_LIST', '', selected_market);

            // Trigger change event on MARKET_LIST to populate all dropdowns.
            Blockly.Events.fire(change_event);

        } else if (event.type === Blockly.Events.BLOCK_CHANGE || Blockly.Events.END_DRAG) {
            // Enforce only trade_definition_<type> blocks in TRADE_OPTIONS statement.
            const blocks_in_trade_options = this.getBlocksInStatement('TRADE_OPTIONS');

            blocks_in_trade_options.forEach(block => {
                if (!/^trade_definition_.+$/.test(block.type)) {
                    Blockly.Events.disable();
                    block.unplug(true);
                    Blockly.Events.enable();
                }
            });
        }
    },
};

Blockly.JavaScript.trade_definition = block => {
    const { client: client_store } = ApiHelpers.instance.root_store;
    
    if (!client_store.is_logged_in) {
        throw new Error('Please login'); // TEMP.
    }

    const { loginid }               = client_store.loginid;
    const account                   = client_store.getToken(loginid);

    const market_block              = block.getChildByType('trade_definition_market');
    const trade_type_block          = block.getChildByType('trade_definition_tradetype');
    const contract_type_block       = block.getChildByType('trade_definition_contracttype');
    const candle_interval_block     = block.getChildByType('trade_definition_candleinterval');
    const restart_on_error_block    = block.getChildByType('trade_definition_restartonerror');
    const restart_on_buy_sell_block = block.getChildByType('trade_definition_restartbuysell');

    const symbol                    = market_block.getFieldValue('SYMBOL_LIST');
    const trade_type                = trade_type_block.getFieldValue('TRADETTYPE_LIST');
    const contract_type             = contract_type_block.getFieldValue('TYPE_LIST');
    const candle_interval           = candle_interval_block.getFieldValue('CANDLEINTERVAL_LIST');
    const should_restart_on_error   = Blockly.JavaScript.valueToCode(restart_on_error_block, 'RESTARTONERROR', Blockly.JavaScript.ORDER_ATOMIC);
    const should_restart_on_buysell = Blockly.JavaScript.valueToCode(restart_on_buy_sell_block, 'TIME_MACHINE_ENABLED', Blockly.JavaScript.ORDER_ATOMIC);

    const { opposites }             = config;
    const contract_type_list        = contract_type === 'both'
        ? opposites[trade_type.toUpperCase()].map(opposite => Object.keys(opposite)[0])
        : [contract_type];

    const initialization            = Blockly.JavaScript.statementToCode(block, 'INITIALIZATION');
    const trade_options_statement   = Blockly.JavaScript.statementToCode(block, 'SUBMARKET');

    const code = `  
    BinaryBotPrivateInit = function BinaryBotPrivateInit() {
        Bot.init('${account}', {
          symbol              : '${symbol}',
          contractTypes       : ${JSON.stringify(contract_type_list)},
          candleInterval      : '${candle_interval || 'FALSE'}',
          shouldRestartOnError: ${should_restart_on_error || 'FALSE'},
          timeMachineEnabled  : ${should_restart_on_buysell || 'FALSE'},
        });
        ${initialization.trim()}
    };
      BinaryBotPrivateStart = function BinaryBotPrivateStart() {
        ${trade_options_statement.trim()}
      };\n`;
    return code;
};
