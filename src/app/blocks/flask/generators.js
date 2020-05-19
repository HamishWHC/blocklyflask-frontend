Blockly.Python['bp_route'] = function (block) {
  var value_blueprint = Blockly.Python.valueToCode(block, 'blueprint', Blockly.Python.ORDER_ATOMIC);
  var statements_url_rules = Blockly.Python.statementToCode(block, 'url_rules');
  var statements_decorators = Blockly.Python.statementToCode(block, 'decorators');
  var statements_func = Blockly.Python.statementToCode(block, 'func');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['blueprint'] = function (block) {
  var text_name = block.getFieldValue('name');
  var text_url_prefix = block.getFieldValue('url_prefix');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['flask_application'] = function (block) {
  var statements_extensions = Blockly.Python.statementToCode(block, 'extensions');
  var statements_blueprints = Blockly.Python.statementToCode(block, 'blueprints');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['return_response'] = function (block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_status = Blockly.Python.valueToCode(block, 'status', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['flask_extension'] = function (block) {
  var dropdown_extension = block.getFieldValue('extension');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['url_rule'] = function (block) {
  var text_rule = block.getFieldValue('rule');
  var statements_methods = Blockly.Python.statementToCode(block, 'methods');
  var text_endpoint = block.getFieldValue('endpoint');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['method'] = function (block) {
  var dropdown_method = block.getFieldValue('method');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['blueprint_ref'] = function (block) {
  var variable_blueprint = Blockly.Python.variableDB_.getName(block.getFieldValue('blueprint'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
