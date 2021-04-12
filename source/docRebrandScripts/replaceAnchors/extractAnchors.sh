#!/bin/bash 

# Initialize variables

# Command to remove directories / Files
# 
count_img=0
count=1
filecnt=0
otherFiles=0
RemCount=0;
filetype=" "
flag=0
initi=0
curlErrStat=22

#Field separator to read till end of line
OIFS="$IFS"
IFS=$'\n'

# Extract header and anchor link name from HTML
# generate a mapping between extracted information
# mapped information is used to edit markdown files to have correct
# anchor name
extractHeaderAnchor()
{
    declare -a myArrayResult
    yourdirs=`ls $1`
    pwdir=`pwd`
    for eachdir in $yourdirs
    do
        cd $1
        if [ -d "$eachdir" ]; then
            
            myArrayResult=(`find $eachdir -name "*.htm" > ../fileMap`)
   	        myArrayResult=(`find $eachdir -name "*.html" >> ../fileMap`)
    	    myArrayResult=(`find $eachdir -name "*.HTM" >> ../fileMap`)
            myArrayResult=(`find $eachdir -name "*.HTML" >> ../fileMap`)
           
            cd .. 
            tempLine=''
    	    echo "{" > $pwdir/../replaceAnchors/config.json
    	    echo "\"jsPaths\": [" >> $pwdir/../replaceAnchors/config.json
    
            # Create directory hierarchy
    	    while read line;
    	    do
                filename=$(basename "$line" .htm)
                filename+=".cfg"

                # Remove the breadcrumbs line from Markdowns
                markDownFile=$(basename "$line" .htm)
                markDownFile+=".md"
                awk '/You are here:.*\.htm/ && !f{f=1; next} 1' $2/$(dirname "$line")/$markDownFile > tmp_file && mv tmp_file $2/$(dirname "$line")/$markDownFile
                
                echo "define({test:" >> $2/$(dirname "$line")/$filename
                cat $1/$line | pup 'h1,h2,h3,h4,h5 json{}' >> $2/$(dirname "$line")/$filename
                echo "});" >> $2/$(dirname "$line")/$filename
                tempLine=$line
                echo "\"$2/$(dirname "$line")/$filename\"," >> $pwdir/../replaceAnchors/config.json

            done < fileMap

            filename=$(basename "$tempLine" .htm)
            filename+=".cfg"
            echo "\"$2/$(dirname "$tempLine")/$filename\"" >> $pwdir/../replaceAnchors/config.json
            echo "]" >> $pwdir/../replaceAnchors/config.json
            echo "}" >> $pwdir/../replaceAnchors/config.json
            
            #Replace anchors in markdown files
            node $pwdir/../replaceAnchors/replace_anchors.js $pwdir $2
           
            rm fileMap
        fi
    done 
}

# Routine invoked by repalceAnchor.js
replaceAllOccr()
{
   declare -a myArrayResult
    echo "Replacement string : ** $2"
    echo "Replace with : ** $3"
    echo " Replacing here : $1"
     cd $1
     myArrayResult=(`rg -l "$2" > filemap2`)
     
     while read line;
      do
#         echo $line
         sed -i "" s/"$2"/"$3"/ $1/$line
      done < fileMap2 
      rm fileMap2 
     cd -
}


if [ $# -eq 0 ]
then
        echo "Missing options!"
        echo "(run $0 -h for help)"
        echo ""
        exit 0
fi

ECHO="false"

while getopts "xrh" OPTION; do
        case $OPTION in
                x)
                        extractHeaderAnchor $2 $3
                        exit 0
                        ;;
                r)
                        replaceAllOccr  $2 $3 $4
                        exit 0
                        ;;
                h)
                        echo "Usage:"
                        echo "Command to get outputs on console-"
                        echo "    sh processFiles.sh [Options] [Option parameters] [Target Directory]"
                        echo "Command to get outputs in file-"
                        echo "    sh processFiles.sh [Options] [Option parameters] [Target Directory] > [Target File]"
                        echo "Options:"
                        echo "   -s   Organize by file size"
                        echo "        Outputs are grouped in folders with name dir{fileSize} and  fileSizeAbove{filesize}." 
                        echo "        If filesize is 600 bytes then output" 
                        echo "        directories are dir600 and fileSizeAbove600"
                        echo "    Option Parameters: <file size> <file extension> <Target Directory>\n"
                        echo "   -y   Get youtube links from html files\n"
                        echo "   -u   Identify unique files. Binary comparision of files are performed to identify unique set of files"
                        echo "    Option Parameters: <file extension> <Target Directory>\n"
                        echo "   -r   Remove files that are not referenced. Search for files with provided extension and remove file if not referenced in any of files"
                        echo "    Option Parameters: <file extension> <Target Directory>\n"
                        echo "   -b   Trace the files to referenced files." 
                        echo "    Option Parameters:  <search_directory_absolute_path> <file_directory>"
                        echo "   -c   Get Clickable links and validate whether links document is part of documentation structure"
                        echo "   -h     help (this output)\n"
                        echo "   **Note : scripts create temporary files. If scripts execution is interrupted, manually delete files-interested_files,filesToSort,sortedFile\n"
                        echo "            For issues with script contact sunilnk@hcl.com,sivaramasowri.varan@hcl.com,shivamsuraj.s@hcl.com"
                        exit 0
                        ;;
        esac
done
IFS="$OIFS"
