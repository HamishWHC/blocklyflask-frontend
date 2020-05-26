Blockly.Blocks['bp_route'] = {
  init: function () {
    this.jsonInit({
      "message0": "blueprint %1 url rules %2 decorators %3 endpoint function %4",
      "args0": [
        {
          "type": "input_value",
          "name": "blueprint",
          "check": "Blueprint"
        },
        {
          "type": "input_statement",
          "name": "url_rules",
          "check": "url_rule"
        },
        {
          "type": "input_statement",
          "name": "decorators",
          "check": "decorator"
        },
        {
          "type": "input_statement",
          "name": "func"
        }
      ],
      "inputsInline": true,
      "colour": 75,
      "tooltip": "Creates a Blueprint Route",
      "helpUrl": "",
      "hat": "cap"
    });
  }
};

Blockly.Blocks['blueprint'] = {
  init: function () {
    this.jsonInit({
      "message0": "name %1 %2 url prefix %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "name",
          "variable": "default",
          "variableTypes": ["Blueprint"],
          "defaultType": "Blueprint"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "url_prefix",
          "text": "/"
        }
      ],
      "previousStatement": [
        "flask_application",
        "blueprint"
      ],
      "nextStatement": "blueprint",
      "colour": 90,
      "tooltip": "Creates a category of endpoints/views (e.g. an API version or the admin section).",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['flask_application'] = {
  init: function () {
    this.jsonInit({
      "message0": "flask application %1 extensions %2 blueprints %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "extensions",
          "check": "flask_extension"
        },
        {
          "type": "input_statement",
          "name": "blueprints",
          "check": "blueprint"
        }
      ],
      "colour": 0,
      "tooltip": "Defines the flask application.",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['return_response'] = {
  init: function () {
    this.jsonInit({
      "message0": "return response %1 with status %2",
      "args0": [
        {
          "type": "input_value",
          "name": "data",
          "check": [
            "Dictionary",
            "String",
            "Array"
          ]
        },
        {
          "type": "input_value",
          "name": "status",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "colour": 230,
      "tooltip": "Returns a response with given status code.",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['flask_extension'] = {
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "extension",
          "options": [
            [
              "SQLAlchemy",
              "sqlalchemy"
            ],
            [
              "Marshmallow",
              "marshmallow"
            ],
            [
              "JWT Extended",
              "jwt_extended"
            ],
            [
              "CORS",
              "cors"
            ]
          ]
        }
      ],
      "previousStatement": [
        "flask_application",
        "flask_extension"
      ],
      "nextStatement": "flask_extension",
      "colour": 230,
      "tooltip": "Adds a Flask extension to the application.",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['url_rule'] = {
  init: function () {
    this.jsonInit({
      "message0": "url rule %1 %2 methods %3 endpoint name %4",
      "args0": [
        {
          "type": "field_input",
          "name": "rule",
          "text": "/"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "methods",
          "check": "method"
        },
        {
          "type": "field_input",
          "name": "endpoint",
          "text": ""
        }
      ],
      "previousStatement": [
        "bp_route",
        "url_rule"
      ],
      "nextStatement": "url_rule",
      "colour": 60,
      "tooltip": "Add to a route to create a URL rule.",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['method'] = {
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "method",
          "options": [
            [
              "GET",
              "GET"
            ],
            [
              "POST",
              "POST"
            ],
            [
              "PUT",
              "PUT"
            ],
            [
              "DELETE",
              "DELETE"
            ],
            [
              "HEAD",
              "HEAD"
            ],
            [
              "OPTIONS",
              "OPTIONS"
            ]
          ]
        }
      ],
      "previousStatement": [
        "url_rule",
        "method"
      ],
      "nextStatement": "method",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['blueprint_ref'] = {
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_variable",
          "name": "blueprint",
          "variable": "default",
          "variableTypes": ["Blueprint"],
          "defaultType": "Blueprint"
        }
      ],
      "output": "Blueprint",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
};
