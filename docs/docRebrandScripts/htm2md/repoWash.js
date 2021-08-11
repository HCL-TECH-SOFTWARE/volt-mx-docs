const utils = require("./src/util/washUtils");
const templateUtils = require("./src/util/templateUtils");
const fs = require("fs");
const path = require('path');
const _ = require("underscore");
const { each } = require("underscore");

let config = JSON.parse(fs.readFileSync('config/config.json'));
let configFolder = config.rulesConfigFolder;

let isRenameRequired = config.isRenameRequired;
let repositories = config.repositories;
let logResults = [];

repositories.forEach(repository => {
    var logjson={};
    logjson["repository"]=repository;
	let _contentUpdate_ = async function() {
		console.log("*******************Updating file content******************");
		let contentConfig = utils.getConfig(configFolder, "contentChange", repository);
		let contentUpdateRules = templateUtils.generateRules("contentTemplate", contentConfig, "contentRules");
		await utils.changeContents(repository, contentUpdateRules);
		if (config.validateWashing) {
			logjson["no. of content updates remaining"] = utils.isWashSuccessfull(repository,"contentChange");
			logResults.push(logjson);
			if(repository === repositories[repositories.length-1]){
				printWashResults();
			}
		}
	}

	if (isRenameRequired) {
		let renameConfig = utils.getConfig(configFolder, "fileRename", repository);
		console.log("Concatenated config " + JSON.stringify(renameConfig));
		let renameRules = templateUtils.generateRules("fileRenameTemplate", renameConfig, "fileRenameRules");

		let _washRepo_ = async function() {
			console.log("*******************File renaming******************");
			await utils.renameFiles(repository, renameRules);

			await _updateRef_();
			await _contentUpdate_();
		}
		
		let _updateRef_ = async function() {
			console.log("*******************Updating renamed files references******************");
			let renamedRefConfig = JSON.parse(fs.readFileSync(path.resolve("output", "renamedFiles.json")));
			let refUppdateRules = templateUtils.generateRules("fileReferenceUpdateTemplate", renamedRefConfig, "fileReferenceUpdateRules");
			await utils.changeContents(repository, refUppdateRules);
			if (config.validateWashing) {
				logjson["no. of files and its references not renamed"] = utils.isWashSuccessfull(repository,"fileRename");			
			}
		}

		_washRepo_();

	} else {
		_contentUpdate_();
	}

})

function printWashResults() {
	console.log("\n *************** Washing Results ***************");
	console.log(logResults);
}
