const nools = require("nools");
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const exec = require('child_process').execSync;
const upath = require('upath');

let Message = require('../definitions/message');
let config = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../config/config.json")));
let configFolder = config.rulesConfigFolder;

let ns = {};

ns.changeContents = async function(files, rules) {
	let excludedConfig = ns.getConfig(configFolder, "excludeFiles", files);
	files = Array.isArray(files) ? files : [files];
	var flow = require(rules);
	var session = flow.getSession();
	await _changeContents_(flow, files);

	async function _changeFile_(data, file, flow) {
		let m = new Message(data, file);
		session.assert(m);

		try {
			await session.match();
			console.log(`Content change done for file: ${file}`);
			fs.writeFileSync(file, m.message);
		} catch (e) {
			console.log(e.stack);
		} finally {
			session.retract(m);
		}
	}

	async function _changeContents_(flow, files, source) {
		for (let i=0; i<files.length; i++) {
			let file = files[i];
			
			if(ns.isFileExcluded(excludedConfig,file,"contentChange")) {
				continue;
			}
			if (source) {
				file = path.join(source, file);
			}
			if (!fs.existsSync(file)) {
				continue;
			}
			if ( fs.lstatSync(file).isDirectory() ) {

				let filesUnderFolder = fs.readdirSync( file );
				try {
					await _changeContents_(flow, filesUnderFolder, file);
				} catch(err) {
					console.log(err);
				}
				
			} else if (fs.lstatSync(file).isFile()){
				console.log(`file to be updated ${file}`);
				let data = fs.readFileSync(file, 'utf-8');	
				await _changeFile_(data, file, flow);
			} else {
				console.log(`File format is not supported for: ${file}`);
			}
		}
	}
}


ns.renameFiles = async function(files, rules) {
	let excludedConfig = ns.getConfig(configFolder, "excludeFiles", files);
	files = Array.isArray(files) ? files : [files];
	var flow = require(rules);
	let renamedFiles = [];
	try {
		await _renameFiles_(flow, files);

		fs.writeFileSync(path.resolve("output", "renamedFiles.json"), JSON.stringify(renamedFiles, null, 4));
	} catch(err) {
		console.log(err);
	}

	async function _renameFiles_(flow, files, source) {
		for (let i=0; i<files.length; i++) {
			let file = files[i];
			if(source) file = path.join(source, file);
			if(!fs.existsSync(file)) continue;
			if(ns.isFileExcluded(excludedConfig,file,"fileRename")) {
				continue;
			}
			var m = new Message(path.basename(file));
			var session = flow.getSession(m);
			try {
				await session.match();


                if(m.message !== path.basename(file)){
                    let newFile = path.join(path.dirname(file), m.message);
                    var fileStats = fs.statSync(file);
			/**
			* While washing a repository if basefolder name is like konywebstudio, to exlucde them getting renamed we are excluding base folder. 
			*/
                    if(!((fileStats.isDirectory()) && (!source))){
                        fs.renameSync(file, newFile);
                        console.log(file + " renamed to " + newFile);
                        var stats = fs.statSync(newFile);
                        var datajson = {
                            "oldPath" : file,
                            "newPath" : newFile,
                            "oldName" : path.basename(file,path.extname(newFile)),
                            "newName" : path.basename(newFile,path.extname(newFile)),
                            "fileExt" : path.extname(newFile),
                            "isFile" : stats.isFile()
                        }
                        renamedFiles.push(datajson);
                        file = newFile; 
                    }
				}
			} catch (err) {
				console.log(" Renaming failed : " + err);
			}
			session.dispose();

			if (fs.existsSync(file) && fs.lstatSync(file).isDirectory() ) {
				let filesUnderFolder = fs.readdirSync( file );
				await _renameFiles_(flow, filesUnderFolder, file);
			}
		}
	}
}



ns.getConfig = function(configFolder, type, repository) {
	repository = path.parse(repository).base;
	let config = JSON.parse(fs.readFileSync(path.join(configFolder, 'common', type +'.json')));
	if (!repository) return config;

	let repositoryFolder = path.join(configFolder,repository);
	if(!fs.existsSync(repositoryFolder)) {
		console.log("Respository config folder is not present");
		return config;
	}
	
	let configFile = path.join(repositoryFolder, type +'.json');
	
	if(!fs.existsSync(configFile)) {
		console.log("Respository config file is not present");
		return config;
	}

	let repoConfig = JSON.parse(fs.readFileSync(configFile));
	return repoConfig.concat(config);
}

ns.isFileExcluded = function(excludedConfig,file,type) {

	let basefile = path.parse(file).base;
	let fileExtension = path.extname(basefile);
	if(type == "fileRename"){
		if (excludedConfig[0].excludeFileRenaming.files.indexOf(basefile) > -1 || ns.isSubDirectory(excludedConfig[0].excludeFileRenaming.directories,file) || 
			excludedConfig[0].excludeAll.files.indexOf(basefile) > -1 || ns.isSubDirectory(excludedConfig[0].excludeAll.directories,file) ||
			excludedConfig[0].excludeFileRenaming.fileExtensions.indexOf(fileExtension) > -1 || excludedConfig[0].excludeAll.fileExtensions.indexOf(fileExtension) > -1 ) {
			return true;
		}
    } else {
        if (excludedConfig[0].excludeContentChange.files.indexOf(basefile) > -1 || ns.isSubDirectory(excludedConfig[0].excludeContentChange.directories,file) || 
			excludedConfig[0].excludeAll.files.indexOf(basefile) > -1 || ns.isSubDirectory(excludedConfig[0].excludeAll.directories,file) ||
			excludedConfig[0].excludeContentChange.fileExtensions.indexOf(fileExtension) > -1 || excludedConfig[0].excludeAll.fileExtensions.indexOf(fileExtension) > -1 ) {
			return true;
		}
	}

	return false;

}

ns.isSubDirectory = function(excludedConfig,parentPath) {

    for(filepath in excludedConfig) {
		if(isPathChildOf(excludedConfig[filepath], parentPath)) {
			return true;
		}
	}	
    return false;
}


function isPathChildOf(path, parentPath) {
    path = upath.toUnix(path.trim());
    parentPath = upath.toUnix(parentPath.trim())

	let firstChar_path = path[0];
	let lastChar_path = path[path.length - 1];
	let firstChar_parentPath = parentPath[0];
    let lastChar_parentPath = parentPath[parentPath.length - 1];
    if (lastChar_parentPath !== '/') parentPath += '/';
	if (lastChar_path !== '/') path += '/'; 
	if (firstChar_parentPath !== '/') parentPath = '/'+parentPath;
    if (firstChar_path !== '/') path = '/'+path; 

	if(parentPath.includes(path)){
		return true;
	}
	else {
		return false;
	}

}

ns.isWashSuccessfull = function(repository,type) {
    let excludedConfig = ns.getConfig(configFolder, "excludeFiles", repository);
    let fileRenameConfig = ns.getConfig(configFolder, "fileRename", repository);
    let contentConfig = ns.getConfig(configFolder, "contentChange", repository);
    let count=0;
    var options = {
        encoding: 'utf8'
    };
    if(type == "fileRename"){
		let renamedRefConfig = JSON.parse(fs.readFileSync(path.resolve("output", "renamedFiles.json")));
		if(renamedRefConfig.length!=0 ){
			findPath=ns.constructFindPath(excludedConfig[0].excludeAll)+ns.constructFindPath(excludedConfig[0].excludeFileRenaming);
			files=" -name";
			content="";
			pathcondition = " -o -name";
			for(var i=0;i<fileRenameConfig.length;i++){
				files=files+ " \"*"+fileRenameConfig[i].srcRegex.replace(/^'|'$/g, '')+"*\" "+pathcondition;
			}
			files=" \\( " + files.substring(0,files.length-10) + " \\)"
			cmd="find " + repository +  files +findPath +" | wc -l"
			count=parseInt(exec(cmd, options).replace( /[\r\n]+/gm, "" ));
			for(var i=0;i<renamedRefConfig.length;i++){
				if(renamedRefConfig[i].fileExt==""){
					content=content+ "/"+ renamedRefConfig[i].oldName+"/"+"\\|";
				} else {
					content=content+ renamedRefConfig[i].oldName+renamedRefConfig[i].fileExt+"\\|";
				}
			}
			content=content.substring(0,content.length-2);
			cmd="find " + repository + findPath + " -type f -exec grep -r \""+content+"\" {} \\; " +" | wc -l";
			console.log(cmd);
			count=count+parseInt(exec(cmd, options).replace( /[\r\n]+/gm, "" ));
		}

    } else if( type == "contentChange") {
        content=0;
        findPath=ns.constructFindPath(excludedConfig[0].excludeAll)+ns.constructFindPath(excludedConfig[0].excludeContentChange);
        for(var i=0;i<contentConfig.length;i++){
            content=content+ contentConfig[i].srcRegex.replace(/^'|'$/g, '')+"\\|";
        }
        content=content.substring(0,content.length-2);
        cmd="find " + repository +  findPath + " -type f -exec grep -r \""+content+"\" {} \\; " + " | wc -l";
        count=parseInt(exec(cmd, options).replace( /[\r\n]+/gm, "" ));
    }
    return count;

}

ns.constructFindPath = function(excludedConfig){
    findPath_1 = "";
    findPath_2 = "";
    pathcondition = " -o  ";
    fileArraySize=excludedConfig.files.length;
    dirArraySize=excludedConfig.directories.length;
    fileExtArraySize=excludedConfig.fileExtensions.length;
    if(!fileArraySize && !dirArraySize && !fileExtArraySize){
        return "";
    }
    else {
        for(var i=0;i<dirArraySize;i++){
		excludedConfig.directories[i]=excludedConfig.directories[i].indexOf('/') == 0 ? excludedConfig.directories[i].substring(1) : excludedConfig.directories[i];
        findPath_1=findPath_1 + " -path \"*/" + excludedConfig.directories[i] + "/*\" " + pathcondition;
        }
        for(var i=0;i<fileExtArraySize;i++){

        findPath_1=findPath_1 + " -path \"*" + excludedConfig.fileExtensions[i] + "\" " + pathcondition;
        }
        if (dirArraySize || fileExtArraySize) {
        findPath_1=" -not \\( " + findPath_1.substring(0,findPath_1.length-4) + " \\)"
        }
        for(var i=0;i<fileArraySize;i++){

        findPath_2=findPath_2 + " ! -name " + excludedConfig.files[i];
        }
        return findPath_1+findPath_2;
    }
}

module.exports = ns;
