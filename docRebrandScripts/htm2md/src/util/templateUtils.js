var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
const fs = require("fs");

function generateRules(temlateFileName, rulesJSON, rulesFileName){
    tmpl.load = function (id) {
        var filename = path.resolve('src', 'templates', id+'.js');
        return fs.readFileSync(filename,'utf8');
    };
    tmpl.arg = 'map';
    tmpl.encReg = /[\x00]/g;
    result = tmpl(temlateFileName, rulesJSON);
    let rulesFilePath = path.resolve('output','rules',rulesFileName+'.js');
    fs.writeFileSync(rulesFilePath, result.replace(/^\s*[\r\n]/gm, ""));
    return rulesFilePath;
}

module.exports = {
    generateRules:generateRules
}