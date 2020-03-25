import * as Blockly from 'blockly';

Blockly.Blocks['math_functions'] = {
    init: function () {
        this.appendValueInput("OPERAND")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["제곱근", "SQRT"], ["절댓값", "ABS"], ["-", "NEG"], ["sin", "SIN"], ["cos", "COS"], ["tan", "TAN"], ["asin", "ASIN"], ["acos", "ACOS"], ["atan", "ATAN"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "EXP10"]]), "FUNCTIONS");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};