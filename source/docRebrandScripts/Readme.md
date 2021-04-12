# Volt MX documentation build support scripts

   * [buildDocs.sh](#builddocssh) - Performs jekyll build and and creates a search index file
   * [docsBuildSupportScripts/htm2md/mdProcessFolder.js](#mdprocessfolderjs) - Ports HTM/HTML to markdown files, adds front matter to markdown
   * [docsBuildSupportScripts/CreateYaml/gen_yml.sh](#gen_ymlsh) - Creates yml files which are consumed by jekyll to create right hand navigation tree
   * [docsBuildSupportScripts/ProcessFiles/processFiles.sh](#processfilessh) - Collection of scripts to perform file processing and report generation tasks
   * [docsBuildSupportScripts/replaceAnchors/replace_anchors.sh](#replace_anchorssh) - Ports HTML anchor syntax to Markdown anchor syntax standards
   * [docsBuildSupportScripts/searchIdxGeneration/createIndex.js](#createindexjs) - Creates search index file out of search-data.json file 
   

## buildDocs.sh

   ### Description

   Performs jekyll build which creates a _site folder at documentation root. Copies search-data.json from _site/assets/js/ to create search index folder
   and executes create search index script. Moves created search index file back to _site/assets/js/ for final documentation hosting.
  
   ### Usage

   Script is executed at documentation root.

   ```
   Execute script :
     sh buildDocs.sh
   ```

## mdProcessFolder.js


   ### Description
   Base script to convert HTM/HTML to markdown. Anchor replacement script and rule engine are integrated with script to perform below tasks

   * Converts HTM/HTML to markdown
   * Adds front matter to markdown. Front matter provides the page layout and defines category which is utilized by jekyll to create right has navigation.
   * Removes redundant files from HTM/HTML documentation repository
   * Ports HTML anchor syntax to Markdown anchor syntax standards
   * Updates all Temenos product texts as per Temenos to HCL product name mapping

   ### Usage

   Script is executed with in docsBuildSupportScripts/htm2md/ folder. Update sourcePath(HTM/HTML source), targetPath(Target for generated markdown file),
   sourcePathFabric(Fabric folder path with in sourcePath),targetPathFabric(Visualizer target folder path with in targetPath), sourcePathFabric(Fabric 
   folder path with in sourcePath),targetPathViz(Visualizer target folder path with in targetPath).

   ```
   Install node modules:
     npm install

   execute script:
     node mdProcessFolder.js

   ```

## gen_yml.sh

   ### Description

   Script creates yml files which are part of _data folder of documentation structure. yml files are processed by jekyll to create
   right hand navigation structure.
   
   ### Usage

   Script is executed with in **docsBuildSupportScripts/CreateYaml/**. **Create_tree_yml.js** is a support script which is invoked by gen_yml.sh to 
   create yml files.

   ```
   Install node modules:
    
     npm install

   execute script:

     sh gen_yml.sh <Toc base folder name> <Visualizer/Fabric> <Absolute path of Toc.js>
   
   Example:
    
     If sample folder tree as below and absolute Fabric path is /usr/USR1/QuantumV9SP2/Fabric
 
     custom_metrics_and_reports
     ├── Content
     │   ├── Advanced_Actions_in_Custom_Reports.htm
     │   ├── Chart_Report_User_Interface.htm
     │   ├── Copyright.htm
     │   ├── Overview_of_Dashboard_Designer.htm
     │   ├── Resources
     │   │   ├── Images
     │   │   │   ├── AdHocV2.png
     │   │   │   ├── AdHocViewScreen_547x305.png
     │   ├── Revision_History.htm
     │   ├── Running_Custom_Reports.htm
     │   ├── Saving_Custom_Reports_and_Ad_Hoc_Views.htm
     │   ├── StandardMetrics.htm
     ├── Data
     │   ├── Search.js
     │   ├── SearchStem_Chunk1.js
     │   ├── SearchTopic_Chunk0.js
     │   ├── Toc.js

    Then execution command would be:

    sh gen_yml.sh custom_metrics_and_reports Fabric /usr/USR1/QuantumV9SP2/Fabric/custom_metrics_and_reports/Data/Toc.js

    Above command creates ***custom_metrics_and_reports.yml*** which is later moved to _data folder of documentation structure
   ```

## replace_anchors.sh

   ### Description

   Script ports HTML anchor syntax to Markdown anchor syntax standards. Anchors are standard approach for in page indexing, normal
   syntax is \<topic name\>#\<anchor_name\>. There is standard anchor naming conventionfor anchors in Markdown and is based on section
   header names, convention is as followed:
   Header name is converted to lower case and spaces are replaced with "-"
   If there are special characters other than alphanumerics, all special characters are replaced with spaces. Additional spaces are
   truncated and replaced with "-"
   One special case is "." character which is just removed.


   **Example**

   Header name : VoltMX Header
   Anchor      : voltmx-header   


   Header name : VoltMX__Header
   Anchor      : voltmx-header
  
   Header name : VoltMX.Header
   Anchor      : voltmxheader
 

  To achive the above schemes script gets current HTML anchor name using **pup** tool and converts to markdown syntax, replaces
  the HTML anchor names with markdown anchor names across markdown files.


  ### Dependencies

  pup - pup is a command line tool for processing HTML. It reads from stdin, prints to stdout, and allows the user to filter parts of the page
  [pup reference](https://github.com/ericchiang/pup)

  ### Usage

  Script has been integrated with `mdProcessFolder.js`. `replace_anchors.sh` utilize support js script `replace_anchors.js` to replace the anchors.

  ```
    npm install

    sh replace_anchors.sh <HTMLFilesPath> <MarkDownFilesPath>

  ```

  **Note:** There has to be mapping between HTML and markdown files for anchors to get replaced.


## createIndex.js

   Creates search index file out of search-data.json file. To address search performance issues on documentation site, a search index file is generated 
   out of search-data.json file. Script has been integrated with buildDocs.sh.


   ### Usage

   Copy search-data.json generated after jekyll build to docsBuildSupportScripts/searchIdxGeneration/. search-data.json will be available under
   _site/assets/js post jekyll build. 

   ```
     npm install
 
     node createIndex.js

   ```

## processFiles.sh 

   Collection of scripts to perform file processing and report generation tasks

   ### Dependencies

   rg - [ripgrep](https://github.com/BurntSushi/ripgrep) is a line-oriented search tool that recursively searches your current directory for a regex pattern

   lynx - [lynx](https://lynx.browser.org/) is a text browser for the World Wide Web.

   ### Usage
   
   ```
   Command to get outputs on console-
    sh processFiles.sh [Options] [Option parameters] [Target Directory]
   
   Command to get outputs in file-
    sh processFiles.sh [Options] [Option parameters] [Target Directory] > [Target File]

   **Options:**
   -s   Organize by file size
        Outputs are grouped in folders with name dir{fileSize} and  fileSizeAbove{filesize}.
        If filesize is 600 bytes then output
        directories are dir600 and fileSizeAbove600
    Option Parameters: <file size> <file extension> <Target Directory>

   -u   Identify unique files and create a CSV report with file name, reference path. Binary comparision of
        files are performed to identify unique set of files
    Option Parameters: <extension of files to search> <extension of files where to search> <Target Directory>

   -r   Remove files that are not referenced. Search for files with provided extension and remove file if not referenced in any of files
    Option Parameters: <file extension> <Target Directory>

   -b   Trace the files to referenced files.
    Option Parameters:  <search_directory_absolute_path> <file_directory>
   -c   Get Clickable links and validate whether links document is part of documentation structure
   -d   Remove redundant files the are part of Temenos documentation structure
   -h     help (this output)
   ```
