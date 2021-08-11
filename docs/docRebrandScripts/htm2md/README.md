# rulesFramework
Rules framework to convert the code/documentation as per HCL namespaces.

## Setup
npm install to install the dependent node modules

## How to run
node repoWash.js

## Requesting Enhancements & Reporting Bugs 
create a jira ticket under epic https://jira01.hclpnp.com/browse/HPHX-1673


## Guide

### How to setup:  

1. Clone the Rules framework(jarvis) code from https://github01.hclpnp.com/phoenix-core/jarvis

2. Checkout the branch ‘phx-dev’

3. Open terminal, go to the jarvis folder and install npm through the command below:
 npm install

4. Checkout the repo specific rules (if they are already defined) from the below git url(this is temporary and will be moved to a different repo) and place the rules folder(eg: spa) under rulesConfig. This is not applicable if you are defining rules/patterns for a repo for the first time https://github01.hclpnp.com/phoenix-temenos/rulesConfig

5. Configuration files to be updated:

    1. Will be primarily using below config files for washing
        1. Config.json
            1. `"rulesConfigFolder"`:
            
            2. `“isRenameRequired”`:  
                • Boolean datatype:
                    • True - files/folders will be renamed along with the content update  
                    • False – Renaming of Files and Folders will be ignored and only content update takes place  

            3. `“validateWashing”`:
            
            4. `“repositories”`:  
                • Absolute path of the repo or direct folder/file name with in the same location as of the framework code on which we want to run the rules.
                
            

        2. rulesConfig
            1. fileRename.json: Rules for renaming the files and folders  
                1. srcRegex à We will be writing a regular expression for the pattern that is needed for washing like in the below two ways  
                    1. “ ’ <sourceString> ’ ” à direct string replacement  
                    2. “/<regex>/” à Proper regex  
                2. destregex  
                    1. “<destinationString>” à direct string replacement  
                    2. If source is regex then destination to be handled in groups àEg: “$1<destString>$3”  
                3. condition(optional) à The rule will only be executed if the condition is satisfied. Please refer to the examples below:  
                    1. direct message string search, this can be used to run the rule only when there is at least one match of the regex in the file which will optimize the performance  
                        1. “condition” : “m.message =~ /<string>/g”  
                    2. to wash contents using regex for a given file  
                        1. “condition” : “m.fileName == \\\"/spa/SPAWeb/web/lib/konyinit.js\\\""  
                        2. "condition": "m.fileName.includes('spacssgen') || m.fileName.endsWith('.vm')"  
                    3. For file or folder renaming in filerename.json  
                        1. "condition": "m.message.includes(\\\"kony.js\\\")"  

            2. contentChange.json: Rules(regex patterns) for updating the contents of the files.  
                1. srcRegex, destRegex and condition have the same behavior as fileRename.json  
                2. Apart from the above attributes, we have added a new attribute “type” (optional)  
                    1. This is being added to support string literals as of now where we are writing a custom replace logic for it with in Jarvis.  
                    2. How to pass in case of string literal  
                        1. “type” : “literal”  

            3. excludeFiles.json ->  
                1. excludeFileRenaming: Accepts list of files, folders and file extensions in array and these will be excluded from renaming.  
                2. excludeContentChange: Accepts list of files, folders and file extensions in array and these will be excluded from content update.  
                3. excludeAll: Accepts list of files, folders and file extensions in array and these will be excluded from both renaming and content update.  

            PS: Common rules applicable for all repos should be maintained in common folder and repo specific rules should be maintained in a separate folder with repo name as per given in the config.  

6. How to run à node repowash.js  

7. How to Debug àSame as debugging any nodejs app  

8. Guidelines:  
    - Regular expression à https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
    - To try Regex online à https://regex101.com/

9. FAQ:  
    Q. Do we need to give special attention to case-sensitiveness while configuring rules? (kony vs Kony etc)  
    A. Yes, if you have different destination regex  
  
    Q. fileRename.JSON is dependent on isRenameRequired flag in config.json?  
    A. Yes; if the flag is false, fileRename.json will not come into picture  
  
    Q. How to avoid considering unwanted places to be washed in content?  
    A. This should be taken care by the regex you define  

## Best Practices

- For those who are trying to change only 1 file, you can do that by setting a condition something like this
 
```
[
 {
 "srcRegex": "'https://cloud-metrics.konycloud.com/AppViewerLink'",
 "destRegex": "https://download.hclvoltmx.com",
 "condition": "m.fileName.includes('configUtil.js')"
 }
]
```

