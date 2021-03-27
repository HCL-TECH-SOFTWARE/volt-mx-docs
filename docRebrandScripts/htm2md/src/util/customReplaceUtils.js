function replaceCustom(str, regex, replacement, type) {
    if (type === "literal") {
        var temp = str;
        const regex_to_match_string_literal = /"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`/gm;
        var res = temp.match(regex_to_match_string_literal);
        res.forEach(_myFunction_);

        function _myFunction_(value, index, theArray) {
            theArray[index] = theArray[index].replace(regex, replacement);
            temp = temp.replace(value, theArray[index]);
        }

        return temp;
    } else {
        return str.replace(regex, replacement);
    }
}

module.exports = {
    replaceCustom:replaceCustom
}