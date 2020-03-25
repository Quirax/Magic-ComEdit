import * as Blockly from 'blockly';

Blockly.Blocks['text_contains'] = {
    init: function () {
        this.appendValueInput("ORIGINAL")
            .setCheck("String")
            .appendField("문자열");
        this.appendValueInput("QUERY")
            .setCheck("String")
            .appendField("에");
        this.appendDummyInput()
            .appendField("가(이) 포함되었는가?");
        this.setOutput(true, "Boolean");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};