import * as Blockly from 'blockly';

Blockly.Blocks['list_contains'] = {
    init: function () {
        this.appendValueInput("ORIGINAL")
            .setCheck("Array")
            .appendField("리스트");
        this.appendValueInput("QUERY")
            .setCheck(null)
            .appendField("에");
        this.appendDummyInput()
            .appendField("가(이) 포함되었는가?");
        this.setOutput(true, "Boolean");
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};