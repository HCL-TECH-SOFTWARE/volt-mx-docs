const nools = require('nools');
const fs = require('fs');
const path = require('path');

let Message = require("../../src/definitions/message");
const { map } = require('underscore');

let flow = nools.flow("File Rename", function (flow) {

    {% for (var i=0;i<map.length;i++) { %}

    flow.rule("{%=i%}. change {%=map[i].srcRegex%} to {%=map[i].destRegex%}", [
        {% if (map[i].hasOwnProperty("condition")) { %}
        [Message, "m", "{%=map[i].condition%}"],
        {% } else { %}
        [Message, "m", "m.message =~ /.*/g"],
        {% } %}
    ], function (facts) {
        let regex = new RegExp({%=map[i].srcRegex%} , "g");
        facts.m.message = facts.m.message.replace(regex, "{%=map[i].destRegex%}"); 
    });

    {% } %}

});

module.exports = flow;