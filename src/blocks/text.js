import * as Blockly from 'blockly';

// Blockly.Blocks['text_contains'] = {
//     init: function () {
//         this.appendValueInput("ORIGINAL")
//             .setCheck("String")
//             .appendField("텍스트");
//         this.appendValueInput("QUERY")
//             .setCheck("String")
//             .appendField("에");
//         this.appendDummyInput()
//             .appendField("가(이) 포함됨");
//         this.setOutput(true, "Boolean");
//         this.setColour(65);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['text_charAt'] = {
//     init: function () {
//         this.jsonInit(
//             {
//                 "type": "text_charAt",
//                 "message0": "%{BKY_TEXT_CHARAT_TITLE}", // "in text %1 %2"
//                 "args0": [
//                     {
//                         "type": "input_value",
//                         "name": "VALUE",
//                         "check": "String"
//                     },
//                     {
//                         "type": "field_dropdown",
//                         "name": "WHERE",
//                         "options": [
//                             ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
//                             ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
//                             ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
//                             ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
//                             ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
//                         ]
//                     },
//                     {
//                         "type": "input_value",
//                         "name": "AT",
//                         "check": "Number"
//                     },
//                     {
//                         "type": "input_dummy"
//                     }
//                 ],
//                 "output": "String",
//                 "style": "text_blocks",
//                 "helpUrl": "%{BKY_TEXT_CHARAT_HELPURL}",
//                 "inputsInline": true,
//                 "mutator": "text_charAt_custom_mutator"
//             }
//         );
//     }
// }

// Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN = {
//     /**
//      * Create XML to represent whether there is an 'AT' input.
//      * @return {!Element} XML storage element.
//      * @this {Blockly.Block}
//      */
//     mutationToDom: function () {
//         var container = Blockly.utils.xml.createElement('mutation');
//         container.setAttribute('at', !!this.isAt_);
//         return container;
//     },
//     /**
//      * Parse XML to restore the 'AT' input.
//      * @param {!Element} xmlElement XML storage element.
//      * @this {Blockly.Block}
//      */
//     domToMutation: function (xmlElement) {
//         // Note: Until January 2013 this block did not have mutations,
//         // so 'at' defaults to true.
//         var isAt = (xmlElement.getAttribute('at') != 'false');
//         this.updateAt_(isAt);
//     },
//     /**
//      * Create or delete an input for the numeric index.
//      * @param {boolean} isAt True if the input should exist.
//      * @private
//      * @this {Blockly.Block}
//      */
//     updateAt_: function (isAt) {
//         this.getInput('AT').setVisible(isAt);
//         this.isAt_ = isAt;
//     }
// };

// Blockly.Extensions.registerMutator('text_charAt_custom_mutator',
//     Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN,
//     Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);

// Blockly.Blocks['text_getSubstring'] = {
//     /**
//      * Block for getting substring.
//      * @this {Blockly.Block}
//      */
//     init: function () {
//         this.isAt1 = this.isAt2 = true;

//         this['WHERE_OPTIONS_1'] = [
//             [Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_START'], 'FROM_START'],
//             [Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_END'], 'FROM_END'],
//             [Blockly.Msg['TEXT_GET_SUBSTRING_START_FIRST'], 'FIRST']
//         ];
//         this['WHERE_OPTIONS_2'] = [
//             [Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_START'], 'FROM_START'],
//             [Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_END'], 'FROM_END'],
//             [Blockly.Msg['TEXT_GET_SUBSTRING_END_LAST'], 'LAST']
//         ];
//         this.setHelpUrl(Blockly.Msg['TEXT_GET_SUBSTRING_HELPURL']);
//         this.setStyle('text_blocks');
//         this.appendValueInput('STRING')
//             .setCheck('String')
//             .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_INPUT_IN_TEXT']);
//         this.appendDummyInput('TAIL0')
//             .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_TAIL0']);
//         this.appendValueInput('AT1').setCheck('Number');
//         this.appendDummyInput('TAIL1')
//             .appendField(new Blockly.FieldDropdown(this['WHERE_OPTIONS_1'], function (value) {
//                 var newAt = (value == 'FROM_START') || (value == 'FROM_END');
//                 // The 'isAt' variable is available due to this function being a
//                 // closure.
//                 if (newAt != this.isAt1) {
//                     var block = this.getSourceBlock();
//                     block.updateAt_(1, newAt);
//                 }
//             }), "WHERE1")
//         this.appendValueInput('AT2').setCheck('Number');
//         this.appendDummyInput('TAIL2')
//             .appendField(new Blockly.FieldDropdown(this['WHERE_OPTIONS_2'], function (value) {
//                 var newAt = (value == 'FROM_START') || (value == 'FROM_END');
//                 // The 'isAt' variable is available due to this function being a
//                 // closure.
//                 if (newAt != this.isAt2) {
//                     var block = this.getSourceBlock();
//                     block.updateAt_(2, newAt);
//                 }
//             }), "WHERE2")
//         if (Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']) {
//             this.appendDummyInput('TAIL')
//                 .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']);
//         }
//         this.setInputsInline(true);
//         this.setOutput(true, 'String');
//         this.updateAt_(1, true);
//         this.updateAt_(2, true);
//         this.setTooltip(Blockly.Msg['TEXT_GET_SUBSTRING_TOOLTIP']);
//     },
//     /**
//      * Create XML to represent whether there are 'AT' inputs.
//      * @return {!Element} XML storage element.
//      * @this {Blockly.Block}
//      */
//     mutationToDom: function () {
//         var container = Blockly.utils.xml.createElement('mutation');
//         var isAt1 = this.getInput('AT1').isVisible();
//         container.setAttribute('at1', isAt1);
//         var isAt2 = this.getInput('AT2').isVisible();
//         container.setAttribute('at2', isAt2);
//         return container;
//     },
//     /**
//      * Parse XML to restore the 'AT' inputs.
//      * @param {!Element} xmlElement XML storage element.
//      * @this {Blockly.Block}
//      */
//     domToMutation: function (xmlElement) {
//         var isAt1 = (xmlElement.getAttribute('at1') == 'true');
//         var isAt2 = (xmlElement.getAttribute('at2') == 'true');
//         this.updateAt_(1, isAt1);
//         this.updateAt_(2, isAt2);
//     },
//     /**
//      * Create or delete an input for a numeric index.
//      * This block has two such inputs, independant of each other.
//      * @param {number} n Specify first or second input (1 or 2).
//      * @param {boolean} isAt True if the input should exist.
//      * @private
//      * @this {Blockly.Block}
//      */
//     updateAt_: function (n, isAt) {
//         this.getInput('AT' + n).setVisible(isAt);
//         if (n == 1) this.isAt1 = isAt;
//         else if (n == 2) this.isAt2 = isAt;
//     }
// };

// Blockly.Blocks['text_changeCase'] = {
//     /**
//      * Block for changing capitalization.
//      * @this {Blockly.Block}
//      */
//     init: function () {
//         var OPERATORS = [
//             [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'], 'UPPERCASE'],
//             [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'], 'LOWERCASE'],
//             [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_TITLECASE'], 'TITLECASE']
//         ];
//         this.setHelpUrl(Blockly.Msg['TEXT_CHANGECASE_HELPURL']);
//         this.setStyle('text_blocks');
//         this.appendValueInput('TEXT')
//             .setCheck('String')
//         this.appendDummyInput('TAIL')
//             .appendField(Blockly.Msg['TEXT_CHANGECASE_TAIL'])
//             .appendField(new Blockly.FieldDropdown(OPERATORS), 'CASE');
//         this.setOutput(true, 'String');
//         this.setTooltip(Blockly.Msg['TEXT_CHANGECASE_TOOLTIP']);
//     }
// };

// Blockly.Blocks['text_trim'] = {
//     /**
//      * Block for trimming spaces.
//      * @this {Blockly.Block}
//      */
//     init: function () {
//         var OPERATORS = [
//             [Blockly.Msg['TEXT_TRIM_OPERATOR_BOTH'], 'BOTH'],
//             [Blockly.Msg['TEXT_TRIM_OPERATOR_LEFT'], 'LEFT'],
//             [Blockly.Msg['TEXT_TRIM_OPERATOR_RIGHT'], 'RIGHT']
//         ];
//         this.setHelpUrl(Blockly.Msg['TEXT_TRIM_HELPURL']);
//         this.setStyle('text_blocks');
//         this.appendValueInput('TEXT')
//             .setCheck('String')
//         this.appendDummyInput('TAIL')
//             .appendField(Blockly.Msg['TEXT_TRIM_TAIL'])
//             .appendField(new Blockly.FieldDropdown(OPERATORS), 'CASE');
//         this.setOutput(true, 'String');
//         this.setTooltip(Blockly.Msg['TEXT_TRIM_TOOLTIP']);
//     }
// };