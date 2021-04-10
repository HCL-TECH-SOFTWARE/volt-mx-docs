require("amd-loader");
const path = require('path');
const _ = require('underscore');
const requirejs = require('requirejs');
const fs = require('fs');
const config = require('./config');

num_spaces = 0
prev_spaces = 0
console.log("%s:",process.argv[2])
var num_blanks = 0;
//Invoke main routine
entry()

//Routine to get navigation url and title
function getUrl(nav_idx,chunkInfo,numSpaces,subNavCur)
{
    Object.keys(chunkInfo).forEach(key => {
       
    Object.keys(chunkInfo[key].i).forEach(key2 =>{        
    if(nav_idx == chunkInfo[key].i[key2])
        {
            if(subNavCur == 1 && numSpaces > num_blanks)
            {
                console.log("  %ssubnav:",' '.repeat(numSpaces - 2))
                subNavCur = 0;
            }
            num_blanks = numSpaces
            console.log("%s- title: \"%s\"",' '.repeat(numSpaces),chunkInfo[key].t[key2])
            console.log("  %surl: \"%s\"",' '.repeat(numSpaces),"/docs/documentation/"+process.argv[3]+'/'+process.argv[2]+key+'l'+chunkInfo[key].b[key2])
        }
      })
    })
}

//Routine to print same consecutive characters 
String.prototype.repeat = function(length) {
 return Array(length + 1).join(this);
}

//Main routine
function entry()
{
     // Parse through config files to identify needed chunk files 
   _.each(config.tocPaths, tocPath => {
      let toc = require(tocPath);
      let prefix = toc.prefix;
      let numchunks = toc.numchunks;
      let tree = toc.tree;
      let chunks = [];

      // Construct chunk path and invoke parseTree to process all 
      // indexes and output in yaml format
      for(let i=0; i<numchunks; i++) {
          let chunkPath = path.resolve(path.dirname(tocPath), prefix+i+".js");
	  chunks.push(requirejs(chunkPath));
      }
      if(tree && tree.n && tree.n.length > 0) {
          parseTree(tree.n,num_spaces,0,0,0,chunks)
      }
     })
}

//Parse TOC index object and invoke getUrl to print formated urls
function parseTree(obj,numSpaces,prevSpaces,subNavCur,subNavPrv,chunks)
{

  prevSpaces = numSpaces
  subNavPrv = subNavCur

  if(obj != null)

  Object.keys(obj).forEach(key => {

   //Print node index
   if(obj[key]['i'] >= 0)
   {
      // Get url using TOC chunk index
      getUrl(obj[key]['i'],chunks[obj[key]['c']],numSpaces,subNavCur)
      subNavCur = 0;
   } 
   //Get sub navigation elements, increase space as needed
   if(obj[key]['n'])
   {
       numSpaces = numSpaces + 2
       subNavCur = 1
       parseTree(obj[key]['n'],numSpaces,prevSpaces,subNavCur,subNavPrv,chunks)
       subNavCur = subNavPrv
       numSpaces = prevSpaces
   }

   })
   return
}
