import * as Blockly from 'blockly';

Blockly.Blocks['controls_wait_for_seconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1), "SECONDS")
            .appendField("초 기다리기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(38);
        this.setTooltip("지정된 시간(초)만큼 기다리기");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_wait_whileuntil'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("Boolean");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["일 동안", "WHILE"], ["이(가) 될 때까지", "UNTIL"]]), "CONDITION")
            .appendField("기다리기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(38);
        this.setTooltip("지정된 조건이 참일 동안, 또는 참이 될 때까지 기다립니다");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['controls_whileUntil'] = {
//     init: function () {
//         this.jsonInit(
//             {
//                 "type": "controls_whileUntil",
//                 "message0": "%{BKY_CONTROLS_WHILEUNTIL_TITLE}",
//                 "args0": [
//                     {
//                         "type": "field_dropdown",
//                         "name": "MODE",
//                         "options": [
//                             ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
//                             ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]
//                         ]
//                     },
//                     {
//                         "type": "input_value",
//                         "name": "BOOL",
//                         "check": "Boolean"
//                     }
//                 ],
//                 "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
//                 "args1": [{
//                     "type": "input_statement",
//                     "name": "DO"
//                 }],
//                 "previousStatement": null,
//                 "nextStatement": null,
//                 "style": "loop_blocks",
//                 "helpUrl": "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
//                 "extensions": ["controls_whileUntil_tooltip"]
//             }
//         );
//     }
// };

// /*
// Blockly.Blocks['logic_ternary'] = {
//     init: function () {
//         this.jsonInit(
//             {
//                 "type": "logic_ternary",
//                 "message0": "%{BKY_LOGIC_TERNARY_CONDITION}",
//                 "args0": [
//                     {
//                         "type": "input_value",
//                         "name": "IF",
//                         "check": "Boolean"
//                     }
//                 ],
//                 "message1": "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
//                 "args1": [
//                     {
//                         "type": "input_value",
//                         "name": "THEN"
//                     }
//                 ],
//                 "message2": "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
//                 "args2": [
//                     {
//                         "type": "input_value",
//                         "name": "ELSE"
//                     }
//                 ],
//                 "output": null,
//                 "style": "logic_blocks",
//                 "tooltip": "%{BKY_LOGIC_TERNARY_TOOLTIP}",
//                 "helpUrl": "%{BKY_LOGIC_TERNARY_HELPURL}",
//                 "extensions": ["logic_ternary"]
//             }
//         );
//     }
// }; */