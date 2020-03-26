import * as Blockly from 'blockly';

// Blockly.Blocks['math_functions'] = {
//     init: function () {
//         this.appendValueInput("OPERAND")
//             .setCheck("Number")
//             .appendField(new Blockly.FieldDropdown([["제곱근", "SQRT"], ["절댓값", "ABS"], ["-", "NEG"], ["sin", "SIN"], ["cos", "COS"], ["tan", "TAN"], ["asin", "ASIN"], ["acos", "ACOS"], ["atan", "ATAN"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "EXP10"]]), "FUNCTIONS");
//         this.setOutput(true, "Number");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['math_round'] = {
//     init: function () {
//         this.jsonInit(
//             {
//                  "type": "math_round",
//     "message0": "%{BKY_MATH_ROUND_OPERATOR_TITLE}",
//     "args0": [
//       {
//         "type": "field_dropdown",
//         "name": "OP",
//         "options": [
//           ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
//           ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
//           ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
//         ]
//       },
//       {
//         "type": "input_value",
//         "name": "NUM",
//         "check": "Number"
//       }
//     ],
//     "output": "Number",
//     "style": "math_blocks",
//     "helpUrl": "%{BKY_MATH_ROUND_HELPURL}",
//     "tooltip": "%{BKY_MATH_ROUND_TOOLTIP}"
//   }
//         );
//     }
// };

// Blockly.Blocks['math_on_list'] = {
//     init: function () {
//         this.jsonInit(
//             {
//     "type": "math_on_list",
//     "message0": "리스트 %2의 %1",
//     "args0": [
//       {
//         "type": "field_dropdown",
//         "name": "OP",
//         "options": [
//           ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
//           ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]
//         ]
//       },
//       {
//         "type": "input_value",
//         "name": "LIST",
//         "check": "Array"
//       }
//     ],
//     "output": "Number",
//     "style": "math_blocks",
//     "helpUrl": "%{BKY_MATH_ONLIST_HELPURL}",
//     "mutator": "math_modes_of_list_mutator",
//     "extensions": ["math_op_tooltip"]
//   }
//         );
// }
// }