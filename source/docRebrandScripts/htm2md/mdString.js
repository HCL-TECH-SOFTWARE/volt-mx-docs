/*-----------------------------------------------------------
String Helper Functions
----------------------------------------------------------- */
var markdownString = {
    replace_All_Text : function (str, find1, replace1)
    {
        let rx = new RegExp(find1, "g");
        return str.replace(rx, replace1);
    },
    replace_All_Text2 : function (str, find1, replace1, find2, replace2)
    {
        str =  this.replace_All_Text(str,find1, replace1);
        return  this.replace_All_Text(str, find2, replace2);
    },
    replace_All_Text3 : function (str, find1, replace1, find2, replace2, find3, repalce3)
    {
        str =  this.replace_All_Text(str,find1, replace1);
        str =  this.replace_All_Text(str,find2, replace2);
        return  this.replace_All_Text(str, find3, repalce3);
    },

    getTagContent :  function (str, tagName)
    {
        let startTag = '<'+tagName+'>';
		let startPos = str.lastIndexOf(startTag);
		let endPos = str.lastIndexOf('</'+tagName+'>')
        if(startPos==-1 || endPos==-1) 
            return '';

        return str.substring(startPos+startTag.length, endPos);

    },
    replaceTag :  function (str, tagName, startTagString, endTagString, startEndTagString)
    {
        //var startPattern =/<p("[^"]*"|'[^']*'|[^'">])*>/i;   // /\<p*\>/i;
        let start = new RegExp(`<`+tagName+`>`, 'gi');
        let startWithAttribute = new RegExp(`<`+tagName+`("[^"]*"|'[^']*'|[^'">])*>`, 'gi');
        let end = new RegExp(`</`+tagName+`>`, 'gi') ;
        let startEnd = new RegExp(`<`+tagName+`/>`, 'gi'); 
        let startEndWithAttribute = new RegExp(`<`+tagName+`("[^"]*"|'[^']*'|[^'">])*/>`, 'gi'); 

        return str.replace(
                        startEnd,startEndTagString).replace(
                        startEndWithAttribute,startEndTagString).replace(
                        start,startTagString).replace(
                        startWithAttribute,startTagString).replace(
                        end,endTagString);
            
    },
    removeTagIfContains: function(str, tagName, containsText, fromEnd){

		let startTag  = '<'+tagName;
		
        let endTag = '</'+tagName+'>';
        
        let startPos = -1;
        if(fromEnd) 
            startPos = str.lastIndexOf(startTag);
        else
            startPos = str.indexOf(startTag);

        let endPos = -1;
        if(fromEnd)
            endPos =  str.lastIndexOf(endTag);
        else
            endPos =  str.indexOf(endTag);


		if(startPos != -1 && endPos != -1)
		{
			let tagContent = str.substring(startPos, endPos+endTag.length)
		
			//console.log('inside first condition');
			
			if(tagContent.indexOf(containsText) != -1)
			{
				// console.log('Successful')
				if( endPos + endTag.length < str.length )
					str = str.slice(0, startPos) + str.slice(endPos + endTag.length);
				else
					str = str.slice(0, startPos);
			}
		}

		return str;
	}

};

module.exports = markdownString;

