const nools = require('nools');
const fs = require('fs');
const path = require('path');
const customReplaceUtils = require('../../src/util/customReplaceUtils')
let Message = require("../../src/definitions/message");
const { map } = require('underscore');

let flow = nools.flow("Content update", function (flow) {

    {% for (var i=0;i<map.length;i++) { %}

    flow.rule("{%=i%}. Change {%=map[i].srcRegex%} to {%=map[i].destRegex%}", [
        {% if (map[i].hasOwnProperty("condition")) { %}
        [Message, "m", "{%=map[i].condition%}"],
        {% } else { %}
        [Message, "m", "/*/"],
        {% } %}
    ], function (facts) {
        let regex = new RegExp({%=map[i].srcRegex%}, "g");
        facts.m.message = customReplaceUtils.replaceCustom(facts.m.message, regex, "{%=map[i].destRegex%}","{%=map[i].type%}"); 
    });

    {% } %}

});

module.exports = flow;