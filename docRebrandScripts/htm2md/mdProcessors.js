/*-----------------------------------------------------------
Processors
----------------------------------------------------------- */

var mdString = require('./mdString');
/*const brTag = 'zzbreakzzz';
const ParaTag_START = 'zxparaStartXz';
const ParaTag_END = 'zxparaEndXz';

const ulTag_START = 'zzULSTARTzzz';
const ulTag_END = 'zzULENDzzz';
const liTag_START = 'zzUISTARTzzz';
const liTag_END = 'zzUIENDzzz';
*/
const NotesTagDummy = 'zzNotesTagzzz';


const brTag = '';
const ParaTag_START = '';
const ParaTag_END = '';

const ulTag_START = '';
const ulTag_END = '';
const liTag_START = '';
const liTag_END = '';



const NotesTag = '> ';

const emptyCELLTEXT = 'zzEmptyCellzz'
const emptyCELLTEXT_Row = 'zzEmptyCellROWzz'


var HTMLParser = require('node-html-parser');


var tableCount = 0;
var pageTitle = '';

var processors = {
    	// Preprocessor which processes HTML input before passing for markdown conversion.
        md_PreProcess: function (sourceFileName, htmlString){
        
        //console.log("Preprocessing:"+sourceFileName)

        pageTitle = mdString.getTagContent(htmlString, "title");

        let rVal = '';
		// Remove Footer - Copy right Info table
    //	rVal = mdString.removeTagIfContains(htmlString, 'table', '<a href="Copyright.htm', true);
        rVal = mdString.removeTagIfContains(htmlString, 'table', 'Copyright', true);

        rVal = mdString.removeTagIfContains(rVal, 'a', 'Open topic with navigation', false);
        rVal = mdString.removeTagIfContains(rVal, 'a', 'Open topic with navigation', true);
        
		//rVal ="Ashvin" + rVal;
        rVal = this.md_processTables(rVal);
        
         //Manage divs with Nots and Important class
        
         let root = HTMLParser.parse(rVal);
         //root = this.manage_notes(root);
         root = this.manage_MergedCells(root);
         rVal = root.toString();

        // -- todo 
		// rVal = mdString.replace_All_Text(rVal, '|', "");

		
        //if(rVal.lastIndexOf("<ui") > -1 || rVal.lastIndexOf("<p") > -1 || rVal.lastIndexOf("rowspan") > -1 || rVal.lastIndexOf("colspan") > -1 )
        // if(rVal.lastIndexOf("rowspan") > -1 || rVal.lastIndexOf("colspan") > -1 )
	    //		console.info(++tableCount + ' Contains row or col span '+sourceFileName);
		
		return rVal;
	},

	// Preprocessor which processes HTML input before passing for markdown conversion.
	md_PostProcess : function (targetFileName, markdownString){
      
        let rVal = this.md_getFrontMatter(targetFileName, 'documentation') + markdownString; 
      //  rVal = mdString.replace_All_Text(rVal, brTag, '<br/>');

        //rVal = rVal.split('**_Note:'+NotesTagDummy+'_**').join('> **_Note:_**');

       
	//	rVal = mdString.replace_All_Text2(rVal, ulTag_START, '<ul>', ulTag_END, '</ul>');
       // rVal = mdString.replace_All_Text2(rVal, liTag_START, '<li>', liTag_END, '</li>');

       // rVal = mdString.replace_All_Text2(rVal, ParaTag_START, '<p>', ParaTag_END, '</p>');

        // Fix for - Turndown adds two spaces in empty cells 
        rVal = mdString.replace_All_Text(rVal, ' '+emptyCELLTEXT_Row+' ', '^^');
        rVal = mdString.replace_All_Text(rVal, ' '+emptyCELLTEXT+' ', ''); 


        rVal = this.replace_notes(rVal, targetFileName);

        return rVal;
    },

    md_getFrontMatter: function (str, layout) {
        let category = '';
        if (str.includes('Fabric')) {
            category = str.substr(str.indexOf('Fabric'),str.length).split('/')[1];
        } else {
            category = str.substr(str.indexOf('Visualizer'),str.length).split('/')[1];
        }
       
        let rVal = '---\nlayout: "' + layout + '"\n';
        rVal = rVal + 'category: "' + category + '"\n---\n';
        return rVal;
    },
    manage_MergedCells : function(root)
    {
        let  tables  = root.querySelectorAll("table");
        let tableCounter=0
        while(true)
        {
            if(!tables[tableCounter])
                break;
            
            let  rows  = tables[tableCounter].querySelectorAll("tr");

            let rowCounter=0
            while(true)
            {
                if(!rows[rowCounter])
                    break;

                let  cellTypes  = ["td", "th"];

                for (cellTypeCounter = 0; cellTypeCounter < cellTypes.length; cellTypeCounter++) 
                {
                    let cellType = cellTypes[cellTypeCounter];

                    let  cells  = rows[rowCounter].querySelectorAll(cellType);
                    
                    let cellCounter=0
                    while(true)
                    {
                        if(!cells[cellCounter])
                            break;

                        let cell = cells[cellCounter]
                        

                        if(cell.getAttribute("colspan"))
                        { 
                            let colSpanValue = cell.getAttribute("colspan");
                            for(colSpanCounter=1; colSpanCounter < colSpanValue;colSpanCounter++)
                            {
                                // add sibling here
                                //throw new Error("The value provided ('" + where + "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'");
                                if(cellType == 'td')
                                    cell.insertAdjacentHTML('afterend',  String.raw`</td><td>`+emptyCELLTEXT);   // it provides 
                                else
                                    cell.insertAdjacentHTML('afterend',  String.raw`</th><th>`+emptyCELLTEXT);   // it provides 
                            
                            }
                        }

                        // rowspan is handled only for td, normally th won't have rowspan
                        if(cellType =='td' && cell.getAttribute("rowspan") )
                        { 
                            let rowSpanValue = cell.getAttribute("rowspan");
                            for(rowSpanCounter=1; rowSpanCounter < rowSpanValue; rowSpanCounter++)
                            {
                                if(rows[rowCounter+rowSpanCounter])
                                {
                                    let  nextRowCells  = rows[rowCounter+rowSpanCounter].querySelectorAll("td");
                                    if(nextRowCells[cellCounter])
                                        nextRowCells[cellCounter].insertAdjacentHTML('beforebegin', '<td>'+emptyCELLTEXT_Row + String.raw`</td>`);  
                                }
                            }
                        }

                        cellCounter++;
                }

                }
                rowCounter++;
            }
            tableCounter++;
        }
        return root;

        

    },
    manage_notes : function(root)
    {
        root = this.addSuffixString(root, ".note", NotesTagDummy);
        root = this.addSuffixString(root, ".Important", NotesTagDummy);

        return root;

    },
    addSuffixString : function(root, selector, suffixString)
    {
        var elments  = root.querySelectorAll(selector);
        var i=0
        while(true)
        {
            if(!elments[i])
                break;

            elments[i].set_content(elments[i].innerHTML.replace('>Note:', '>Note:'+NotesTagDummy));
            console.log(elments[i].toString());
            //console.log("element tag Name"+ elments[i].tagName);
            if(elments[i].tagName == 'DIV')
                elments[i] = this.addSuffixString(elments[i], "li", suffixString);

             i++;
        }
        return root;

    },
    replace_notes : function (str)
    {
        var rVal = str;

        //let rx = new RegExp(find1, "g");
        if(rVal.includes("**_Note:_**")){
            rVal = rVal.split("**_Note:_**").join("> **_Note:_**");

        }
        if(rVal.includes("**_Important:_**")) {
            rVal = rVal.split("**_Important:_**").join("> **_Important:_**");
        }
        return rVal; 
    },
    md_processRowAndColSpan(tableContent)
    {
        rVal = tableContent;



        return rVal;
    },
	md_processTables : function(str)
	{
        
        var tableCount=0;
		const TABLE_START = '<table';
		const TABLE_END = '</table>';
		if(str.search(TABLE_START) == -1)
			return str;
		
			//console.log(str.length);

		let rVal = '';
		let searchPos = 0, tblStart=0, tblEnd=0, tableContent = '';
		do
		{
        
            //console.log("Table Count:"+ ++tableCount);
			tblStart = str.indexOf(TABLE_START, searchPos);
            
			// No more tables
			if(tblStart==-1)
			{
				// There is no table tag at all
				if(searchPos==0)
					return str;
                else
                {
                    rVal = rVal + str.substring(searchPos);
                    break;
                }
			}

			// There is some text between two tables
			if(tblStart > searchPos)
				rVal = rVal + str.substring(searchPos, tblStart);
				
            tblEnd = str.indexOf(TABLE_END, searchPos);

			// Just to avoid issue when table close tag not found.
			if(tblEnd==-1)
				tblEnd = str.length;
			else
				tblEnd = tblEnd + TABLE_END.length;

            tableContent = str.substring(tblStart, tblEnd);
            //console.log("Pos:"+tblStart+' ' + tblEnd + "Table content: "+tableContent.length);  <ul style></ul> <ul>dkdfjslkds</ul> <br/>

			// Process Table content
			tableContent = mdString.replaceTag(tableContent, 'br', '', brTag, brTag);
            tableContent = mdString.replaceTag(tableContent, 'ul', ulTag_START, ulTag_END, '');
            tableContent = mdString.replaceTag(tableContent, 'li', liTag_START, liTag_END, '');

            tableContent = mdString.replaceTag(tableContent, 'p', ParaTag_START, ParaTag_END, '');

            //console.log("Table content after: "+tableContent.length);
            //console.log(tableContent);
			rVal = rVal + tableContent;

			searchPos = tblEnd;

			// end of string reached
			if(searchPos >= str.length)
				break;

	}while(true);
	return rVal;

 	}

};

module.exports = processors;

