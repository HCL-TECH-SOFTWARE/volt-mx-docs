require("amd-loader");
const path = require('path');
const _ = require('underscore');
const requirejs = require('requirejs');
const fs = require('fs');
const config = require('./config');
var shell = require('shelljs');

num_spaces = 0
prev_spaces = 0
//console.log("%s:",process.argv[2])
var num_blanks = 0;
//Invoke main routine
entry()

//Routine to print same consecutive characters 
String.prototype.repeat = function(length) {
 return Array(length + 1).join(this);
}

// extension should include the dot, for example '.html'
function changeExtension(file, extension) {
  const basename = path.basename(file, path.extname(file))
  return path.join(path.dirname(file), basename + extension)
}

function changeExt(file, extension)
{
  const basename = path.basename(file, path.extname(file))
  return path.join( basename + extension)
}

//Main routine
function entry()
{
	blank_text = 0
        header = ""
        var index = 0
        var name = []
       _.each(config.jsPaths, jsPaths => {     
       let toc = require(jsPaths);
     //  console.log("\n\n%s",jsPaths)
       Object.keys(toc.test).forEach(key => {
           if(toc.test[key].children)
              Object.keys(toc.test[key].children).forEach(keychild =>
              {
                  if(toc.test[key].children[keychild].name){
                      name[index] = toc.test[key].children[keychild].name
                      console.log(name[index])
                      index = index + 1
                      if(toc.test[key].text)
                      {
                          header = toc.test[key].text
                      }
                 }
                 if(toc.test[key].children[keychild].text)
                 { 
                      if(header === "")
                      header = toc.test[key].children[keychild].text
                 }
              })

              if(name.length > 0)
              {
                  file=changeExtension(jsPaths,".md")
                  console.log("Processing %s",file)
                   
                  for(i=0;i < name.length; i++)
                  {
                      
                      name[i]=name[i].replace(/\(/g,"[(]")
                      name[i]=name[i].replace(/\)/g,"[)]")
                      stringToReplace = "][(]#"+name[i]+"[)]"
                      console.log("Actual:"+header)
                      headerInlowerCase = header.toLowerCase().replace(/[^A-Z0-9]/ig, " ").replace(/^\s+|\s+$/gm,'').replace(/ +(?= )/g,'').replace(/ /ig, "-")
                      replaceWith = "](#"+headerInlowerCase+")"
             //       console.log(header)
             //       console.log(stringToReplace)
             //       console.log(replaceWith)
                      shell.sed('-i', stringToReplace, replaceWith, file);
 
                      console.log("ReplacingWith:"+headerInlowerCase)
                      //Handle speacial character %23 
                      stringToReplace = "][(]%23"+name[i]+"[)]"
                      replaceWith = "](#"+headerInlowerCase+")"
                      shell.sed('-i', stringToReplace, replaceWith, file);

                      //Replace strings in complete setup 
                      stringToReplace = changeExt(jsPaths,".htm")+"#"+name[i]+"[)]"
                      replaceWith = changeExt(jsPaths,".htm")+"#"+headerInlowerCase+")"
                      console.log( process.argv[2] +"  " + process.argv[3])
                      shell.exec(`sh ${process.argv[2]}/../replaceAnchors/extractAnchors.sh -r ${process.argv[3]} "${stringToReplace}" "${replaceWith}"`)       

                      stringToReplace = changeExt(jsPaths,".html")+"#"+name[i]+"[)]"
                      replaceWith = changeExt(jsPaths,".html")+"#"+headerInlowerCase+")"
                      console.log( process.argv[2] +"  " + process.argv[3])
                 
                      shell.exec(`sh ${process.argv[2]}/../replaceAnchors/extractAnchors.sh -r ${process.argv[3]} "${stringToReplace}" "${replaceWith}"`)
 
                      stringToReplace = changeExt(jsPaths,".htm")+"%23"+name[i]+"[)]"
                      replaceWith = changeExt(jsPaths,".htm")+"#"+headerInlowerCase+")"
                      shell.exec(`sh ${process.argv[2]}/../replaceAnchors/extractAnchors.sh -r ${process.argv[3]} "${stringToReplace}" "${replaceWith}"`)       
                 
                      stringToReplace = changeExt(jsPaths,".htm")+"#"+name[i]+"[?]"
                      replaceWith = changeExt(jsPaths,".htm")+"#"+headerInlowerCase+"?" 
                      shell.exec(`sh ${process.argv[2]}/../replaceAnchors/extractAnchors.sh -r ${process.argv[3]} "${stringToReplace}" "${replaceWith}"`)       

                      stringToReplace = changeExt(jsPaths,".htm")+"%23"+name[i]+"[?]"
                      replaceWith = changeExt(jsPaths,".htm")+"#"+headerInlowerCase+"?"
                      shell.exec(`sh ${process.argv[2]}/../replaceAnchors/extractAnchors.sh -r ${process.argv[3]} "${stringToReplace}" "${replaceWith}"`)       
                  }
                  for(i=0;i < name.length; i++)
                  {
                      delete name[i]
                  }
                  name = []
              }
              index = 0
              header = ""
              blank_text = 0
         })
         //Remove config file
         shell.rm(jsPaths)
     })

}
module.exports.replace_anchors=entry;

