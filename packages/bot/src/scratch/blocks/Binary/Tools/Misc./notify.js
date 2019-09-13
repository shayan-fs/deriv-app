import config        from '../../../../../constants';
import { translate } from '../../../../../utils/lang/i18n';

Blockly.Blocks.notify = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('Notify %1 with sound: %2 %3'),
            args0   : [
                {
                    type   : 'field_dropdown',
                    name   : 'NOTIFICATION_TYPE',
                    options: config.lists.NOTIFICATION_TYPE,
                },
                {
                    type   : 'field_dropdown',
                    name   : 'NOTIFICATION_SOUND',
                    options: config.lists.NOTIFICATION_SOUND,
                },
                {
                    type : 'input_value',
                    name : 'MESSAGE',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Binary.colour,
            colourSecondary  : Blockly.Colours.Binary.colourSecondary,
            colourTertiary   : Blockly.Colours.Binary.colourTertiary,
            previousStatement: null,
            nextStatement    : null,
            tooltip          : translate('Creates a notification'),
            cateogry         : Blockly.Categories.Miscellaneous,
        };
    },
    meta(){
        return {
            'display_name': translate('Pop out notify'),
            'description' : translate('Pop out notify description'),
        };
    },
};

Blockly.JavaScript.notify = block => {
    const notificationType = block.getFieldValue('NOTIFICATION_TYPE');
    const sound = block.getFieldValue('NOTIFICATION_SOUND');
    const message = Blockly.JavaScript.valueToCode(block, 'MESSAGE') || `"${translate('<empty message>')}"`;

    const code = `Bot.notify({ className: '${notificationType}', message: ${message}, sound: '${sound}'});\n`;
    return code;
};
