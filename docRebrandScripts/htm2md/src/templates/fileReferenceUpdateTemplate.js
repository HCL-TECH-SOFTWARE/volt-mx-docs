const nools = require('nools');
const fs = require('fs');
const path = require('path');

let Message = require("../../src/definitions/message");
const { map } = require('underscore');

let flow = nools.flow("File Reference Update", function (flow) {

    {% for (var i=0;i<map.length;i++) { %}
        {% if(map[i].fileExt == ".js" || map[i].fileExt == "") { %}
        flow.rule("{%=i%}. change {%=map[i].oldPath%} to {%=map[i].newPath%} for js", [
            [Message, "m", "m.message =~ /{%=map[i].oldName%}/"],
        ], function (facts) {
            {% if(map[i].isFile) { %}
                let regex = new RegExp("/{%=map[i].oldName%}" , "g");
                console.log("js file ref update regex:" + regex);
                facts.m.message = facts.m.message.replace(regex, "/{%=map[i].newName%}"); 
            {% } else { %}
                let regex = new RegExp("/{%=map[i].oldName%}/" , "g");
                facts.m.message = facts.m.message.replace(regex, "/{%=map[i].newName%}/");
            {% } %}
        });
        {% } %}
        {% if(map[i].fileExt != "") { %}
        flow.rule("{%=i%}. change {%=map[i].oldPath%} to {%=map[i].newPath%} for htm", [
            [Message, "m", "m.message =~ /{%=map[i].oldName%}/"],
        ], function (facts) {
            {% if(map[i].isFile) { %}
                let regex = new RegExp("{%=map[i].oldName%}{%=map[i].fileExt%}" , "g");
                console.log("htm file ref update regex:" + regex);
                facts.m.message = facts.m.message.replace(regex, "{%=map[i].newName%}{%=map[i].fileExt%}"); 
            {% } %}
        });
        {% } %}

    {% } %}


});

module.exports = flow;