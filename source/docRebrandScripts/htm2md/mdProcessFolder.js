/*
	Script to create Markdown (.md) files for HTML/HTM files 
		-> It traverse thru folder and sub-folders to find all html/htm files
		-> Destincation/Target folder can be same as source or different
		-> If Destincation/Target folder does not exit then it will create the same.
		-> If there are existing md files then it will overwrite the same (Note that .md files should not readonly)
	
	Prerequistes:
		-> nodeJS
		-> Turndown module
		-> Turndonw gfm plugin 
	
	Custom Rules/Code
		--- need to add here---
	
*/


//-------------------------------------------------------
// Set Path Variables
//-------------------------------------------------------

var versionSuffix = "";  //::FOR TESTING:: it will append this as suffix for md file - test.md, test_v1.md etc.

var sourcePath = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2`;
var targetPath = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2Markdown`;

var sourcePathFab = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2/Fabric`;
var targetPathFab = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2Markdown/Fabric`;

var sourcePathViz = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2/Visualizer`;
var targetPathViz = String.raw`/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/Delete/QuantumV9SP2Markdown/Visualizer`;

var COPYFILES = true;

//-------------------------------------------------------
// Load Node.js Modules
//-------------------------------------------------------
var TurndownService = require('turndown')
var fs = require('fs');  // File service
var path = require("path"); // Path module

var turndownService = new TurndownService();

// custom modules
var mdString = require('./mdString');
var processor = require('./mdProcessors');

//var replace_anchors = require('../replaceAnchors/replace_anchors.js');
// Import plugins from turndown-plugin-gfm 
var turndownPluginGfm = require('turndown-plugin-gfm')
const shell = require('shelljs')
var gfm = turndownPluginGfm.gfm
turndownService.use(gfm); // Use the gfm plugin
//var tables = turndownPluginGfm.tables
//var strikethrough = turndownPluginGfm.strikethrough
//Use the table and strikethrough plugins only
//turndownService.use([tables, strikethrough]);


//----------------------------------------------------------------------------------------------
//  Customize Convertion
//----------------------------------------------------------------------------------------------

// Remove Scripts Tag
turndownService.addRule('script_Rule', {
	filter: ['script'],
	replacement: function (content) {
		//return '~' + content + '~'
		return '';
	}
});

// Remove Head and Title Tag
turndownService.addRule('head_title_rule', {
	filter: ['head', 'title', 'style'],
	replacement: function (content) {
		//return '~' + content + '~'
		//console.info('title etc....');
		return '';
	}
});

turndownService.addRule('pre_tag_rule', {
	filter: ['pre'],
	replacement: function (content) {
		return '{% highlight voltMx %}' + content + '\n{% endhighlight %}';
	}
});
//turndownService = turndownService.keep(['table']);
//turndownService = turndownService.keep(['p']);

//----------------------------------------------------------------------------------------------
// Main call - Execution Entry Proint.
//----------------------------------------------------------------------------------------------
var processCount = 0;  // Just to  print files count on console
var processedCount = 0;
shell.exec(`sh ../ProcessFiles/processFiles.sh -d ${sourcePath}`)
processFolder(sourcePath, targetPath, true);
console.info('Files processed: ' + processCount);
var trigger = setInterval(triggerWash, 3000)


// Wash Files 
function triggerWash(){
	console.log("files are being processed please wait .....");
	if(processCount == processedCount){
		clearInterval(trigger);

        // Replace anchor links as per arkdown standards
           shell.exec(`../replaceAnchors/extractAnchors.sh -x ${sourcePathFab} ${targetPathFab}`)
           shell.exec(`../replaceAnchors/extractAnchors.sh -x ${sourcePathViz} ${targetPathViz}`)

		console.log("ready to trigger wash");
//		var invokeRuleEngine = require('./repoWash.js');
	}
}
var fileCount = 0;
var tableCount = 0;
var execOnce = 0;
//verifyFolder(sourcePath, targetPath, true);
//console.info('Files verified count: '+fileCount);


//----------------------------------------------------------------------------------------------

//-------------------------------------------------------
// Main Folder-File Processing Fucntions
//-------------------------------------------------------
function processFolder(folderPath, outputPath, recursive) {

    //Remove redundant files
    if(execOnce == 0)
    {
        shell.exec(`sh ../ProcessFiles/processFiles.sh -d ${folderPath}`)
        execOnce = 1
    }
	// create output path if not exists
	   if (!fs.existsSync(outputPath)) {
		fs.mkdirSync(outputPath);
	   }

	// console.info('output '+outputPath);

	fs.readdirSync(folderPath).forEach(function (file) {

		let filepath = path.join(folderPath, file);
		let stat = fs.statSync(filepath);

		if (stat.isDirectory()) {

			if (recursive === true && filepath.indexOf('.git') == -1) // process subfolder only if recursive = true and not a .git folder
			    processFolder(filepath, path.join(outputPath, file), recursive);

		} else {

			if (isFileToBeConverted(filepath) === true) {
				//console.info('Processing file : - '+filepath+ '.... '); 
				var outputFile = getmdFileName(outputPath, file);

				//if(outputFile != getmdFileName_old(outputPath, file))
				//	console.log( getmdFileName_old(outputPath, file));
				//console.info('outputfile '+outputFile);

				processFile(filepath, outputFile);

				processCount++;
				//console.info('..Completed\n'); 
			}
			else {

				if (COPYFILES == true) {
					// copy only if the source and distination are different.

					if (folderPath != outputPath) {
						//console.info('Copying file file : - '+filepath+ '.... '); 
						fs.copyFile(filepath, path.join(outputPath, file),
							(err) => {
								if (err) {
									console.log("Error while copying :" + filepath, err);
								}
							}
						);
					}
				}
				//console.info('Ignored file: - '+filepath+ '\n');
			}

		}
	});
	return 1;
}

function processFile(inputFile, outputFile) {
	fs.readFile(inputFile, 'utf8', function (err, data) {

		// file has some issue.
		if (inputFile == sourcePath + String.raw`\docs\_includes\fix_linenos.html`) {
			console.log("Ignoring file" + inputFile);
			return;
		}
		//res.writeHead(200, {'Content-Type': 'text/html'});
		//res.write(data);
		//console.log("Processing:"+inputFile)
		// Pre-Processor Call
		let inputHtml = processor.md_PreProcess(inputFile, data);

		// Convert to Markdown
		let markdown = turndownService.turndown(inputHtml);

		markdown = processor.md_PostProcess(outputFile, markdown);

		// Write to .md file
		fs.writeFile(outputFile, markdown, function (err) {
			if (err) throw err;
			processedCount = processedCount + 1;
		});
		//return res.end();
	});

}

function isFileToBeConverted(file) {
	let ext = path.extname(file).toUpperCase();
	return (ext === '.HTML' || ext === '.HTM')
}

function getmdFileName(folderPath, file) {
	return path.join(folderPath, file.substring(0, file.lastIndexOf('.')) + versionSuffix + ".md");
	//return path.join(folderPath , file.replace(/.html/gi, versionSuffix+".md").replace(/.htm/gi, versionSuffix+".md"));
	//return path.join(folderPath , file.replace('.html', ".md").replace('.htm', ".md"));
}

function getmdFileName_old(folderPath, file) {
	return path.join(folderPath, file.replace(/.html/gi, versionSuffix + ".md").replace(/.htm/gi, versionSuffix + ".md"));
	//return path.join(folderPath , file.replace('.html', ".md").replace('.htm', ".md"));
}

// The end
// ----------------------------------------------------------------------



// Additional function to verify all md files created or not

///	String.raw`C:\AshvinHCL\Phoenix\DocRebranding\HTML2MD\Test\output\output1.md`)
function verifyFolder(folderPath, outputPath, recursive) {

	   if (!fs.existsSync(outputPath)) {
		console.info('Issue - No FOLDER ' + outputPath + '\n');
	   }

	   var fcount = 0;

	fs.readdirSync(folderPath).forEach(function (file) {

		let filepath = path.join(folderPath, file);
		let stat = fs.statSync(filepath);


		if (stat.isDirectory()) {
			if (recursive === true) // process subfolder only if recursive = true
				verifyFolder(filepath, path.join(outputPath, file), recursive);
		} else {

			if (isFileToBeConverted(filepath) === true) {

				if (fcount == 0) {
					console.info('\n');
					console.info(folderPath);
				}

				fileCount++;
				fcount++;

				console.info('    ' + file);
				var outputFile = getmdFileName(outputPath, file);
				if (!fs.existsSync(outputFile)) {
					console.info('Issue - No file ' + outputFile + '\n');
				}



			}

		}
	});

	if (fcount == -1) {
		console.info('\n');
		console.info(folderPath + '  ' + fcount + ' file(s)');
		console.info('\n');
		console.info('\n');
	}
}
