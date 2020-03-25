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