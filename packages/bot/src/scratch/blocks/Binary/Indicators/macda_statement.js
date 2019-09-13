import { expectValue } from '../../../shared';
import config          from '../../../../constants';
import { translate }   from '../../../../utils/lang/i18n';

Blockly.Blocks.macda_statement = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('set %1 to MACD Array %2 %3'),
            message1: '%1',
            args0   : [
                {
                    type    : 'field_variable',
                    name    : 'VARIABLE',
                    variable: 'macda',
                },
                {
                    type   : 'field_dropdown',
                    name   : 'MACDFIELDS_LIST',
                    options: config.macdFields,
                },
                {
                    type: 'input_dummy',
                },
            ],
            args1: [
                {
                    type : 'input_statement',
                    name : 'STATEMENT',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Binary.colour,
            colourSecondary  : Blockly.Colours.Binary.colourSecondary,
            colourTertiary   : Blockly.Colours.Binary.colourTertiary,
            tooltip          : translate('Calculates Moving Average Convergence Divergence (MACD) list from a list'),
            previousStatement: null,
            nextStatement    : null,
            category         : Blockly.Categories.Indicators,
        };
    },
    meta(){
        return {
            'display_name': translate('Moving Average Convergence Divergence'),
            'decription'  : translate('Moving Average Convergence Divergence Description'),
        };
    },
    onchange           : Blockly.Blocks.bb_statement.onchange,
    requiredParamBlocks: ['input_list', 'fast_ema_period', 'slow_ema_period', 'signal_ema_period'],
};

Blockly.JavaScript.macda_statement = block => {
    // eslint-disable-next-line no-underscore-dangle
    const varName = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VARIABLE'),
        Blockly.Variables.NAME_TYPE
    );
    const macdField = block.getFieldValue('MACDFIELDS_LIST');
    const input = expectValue(block.getChildByType('input_list'), 'INPUT_LIST');
    const fastEmaPeriod = block.childValueToCode('fast_ema_period', 'FAST_EMA_PERIOD') || '12';
    const slowEmaPeriod = block.childValueToCode('slow_ema_period', 'SLOW_EMA_PERIOD') || '26';
    const signalEmaPeriod = block.childValueToCode('signal_ema_period', 'SIGNAL_EMA_PERIOD') || '9';

    const code = `${varName} = Bot.macda(${input}, { 
        fastEmaPeriod: ${fastEmaPeriod},
        slowEmaPeriod: ${slowEmaPeriod},
        signalEmaPeriod: ${signalEmaPeriod},
    }, ${macdField});\n`;
    return code;
};
