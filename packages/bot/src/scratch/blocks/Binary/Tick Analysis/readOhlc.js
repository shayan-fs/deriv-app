import config        from '../../../../constants';
import { translate } from '../../../../utils/lang/i18n';

Blockly.Blocks.read_ohlc = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('In candles list read %1 from end %2'),
            message1: translate('with interval: %1'),
            args0   : [
                {
                    type   : 'field_dropdown',
                    name   : 'OHLCFIELD_LIST',
                    options: config.ohlcFields,
                },
                {
                    type : 'input_value',
                    name : 'CANDLEINDEX',
                    check: 'Number',
                },
            ],
            args1: [
                {
                    type   : 'field_dropdown',
                    name   : 'CANDLEINTERVAL_LIST',
                    options: config.candleIntervals,
                },
            ],
            output         : 'Number',
            outputShape    : Blockly.OUTPUT_SHAPE_ROUND,
            colour         : Blockly.Colours.Binary.colour,
            colourSecondary: Blockly.Colours.Binary.colourSecondary,
            colourTertiary : Blockly.Colours.Binary.colourTertiary,
            tooltip        : translate('Read the selected candle value in the nth recent candle'),
            category       : Blockly.Categories.Tick_Analysis,
        };
    },
    meta(){
        return {
            'display_name': translate('Read selected candle'),
            'description' : translate('Read selected candle description'),
        };
    },
};

Blockly.JavaScript.read_ohlc = block => {
    const selectedGranularity = block.getFieldValue('CANDLEINTERVAL_LIST');
    const granularity = selectedGranularity === 'default' ? 'undefined' : selectedGranularity;
    const ohlcField = block.getFieldValue('OHLCFIELD_LIST');
    const index = Blockly.JavaScript.valueToCode(block, 'CANDLEINDEX', Blockly.JavaScript.ORDER_ATOMIC) || '1';

    const code = `Bot.getOhlcFromEnd({ field: '${ohlcField}', index: ${index}, granularity: ${granularity} })`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
