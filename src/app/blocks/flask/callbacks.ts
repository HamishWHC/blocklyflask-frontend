declare var Blockly: any;

const alwaysAvailable = "    <block type=\"blueprint\">\n" +
  "      <field name=\"url_prefix\">/new/</field>\n" +
  "      <field name=\"name\" variabletype=\"Blueprint\">new_bp</field>\n" +
  "    </block>\n" +
  "    <block type=\"blueprint_ref\">\n" +
  "      <field name=\"blueprint\" variabletype=\"Blueprint\">default</field>\n" +
  "    </block>\n" +
  "    <block type=\"blueprint_ref\">\n" +
  "      <field name=\"blueprint\" variabletype=\"Blueprint\">new_bp</field>\n" +
  "    </block>"

export const getBlueprintsCategory = workspace => {
  if (Blockly.Blocks["blueprint_ref"]) {
    let output = alwaysAvailable;

  }
};
