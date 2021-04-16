#!/bin/bash 

# Initialize variables
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

#Remove files not considered for porting
deleteDirFiles()
{
   find $1 -type f -name "*.xml" -exec rm -r {} +
   find $1 -type f -name "*.js" -exec rm -r {} +
   find $1 -type d -name Directories -exec rm -r {} +
   find $1 -type f -name "Sitemap.xml" -exec rm -r {} +
   find $1 -type f -name "*.mclog" -exec rm -r {} +
   find $1 -type d -name Scripts -exec rm -r {} +
   find $1 -type d -name MasterPages -exec rm -r {} +
   find $1 -type d -name Prettify -exec rm -r {} +
   find $1 -type d -name SkinSupport -exec rm -r {} +
   find $1 -type d -name masterpages -exec rm -r {} +
  # find $1 -type d -name stylesheets -exec rm -r {} +
   find $1 -type d -name tablestyles -exec rm -r {} +
   find $1 -type d -name TableStyles -exec rm -r {} +
  # find $1 -type d -name Stylesheets -exec rm -r {} +
   find $1 -type d -name MasterPages -exec rm -r {} +
   find $1 -type d -name Scripts -exec rm -r {} +
 #  find $1 -type d -name Skins -exec rm -r {} +
   find $1 -type d -name Data -exec rm -r {} +
   find $1 -type f -name "*.mcwebhelp" -exec rm -r {} +
   find $1 -type f -name "Default.htm" -exec rm -r {} +
   find $1 -type f -name "Default_CSH.htm" -exec rm -r {} +
   find $1 -type f -name "*.flmsp" -exec rm -r {} +
   find $1 -type f -name "*.DS_Store" -exec rm -r {} +
   find $1 -type d -name Stylesheets1 -exec rm -r {} +
   find $1 -type d -name SkinSupport -exec rm -r {} +
   find $1 -type d -name prettify1 -exec rm -r {} +
   find $1 -type d -name Fonts -exec rm -r {} +
   find $1 -type f -name "Default.htm" -exec rm -r {} +
   find $1 -type f -name "Default.mcwebhelp" -exec rm -r {} +
   find $1 -type f -name "Default_CSH.htm" -exec rm -r {} +
   find $1 -type f -name "*.flmsp" -exec rm -r {} +
   find $1 -type f -name ".DS_Store" -exec rm -r {} +
   find $1 -type d -name Stylesheets1 -exec rm -r {} +
   find $1 -type d -name SkinSupport -exec rm -r {} +
   find $1 -type d -name prettify1 -exec rm -r {} +
   find $1 -type d -name Fonts -exec rm -r {} +
   find $1 -type f -name "Copyright.htm" -exec rm -r {} +
   find $1 -type d -name prettify -exec rm -r {} +
   find $1 -type f -name "*TOC*" -exec rm -r {} +
}


# Search for file name references
searchFunc(){
  echo "Base DIR  : $1\n\n"
  cd $1
  yourfilenames=`ls $2`
  cd $2
  for eachfile in $yourfilenames
  do
    if [ -f "$eachfile" ]; then
      echo "\nFiles with $eachfile references:\n"
      grep -lr "[\/]$eachfile[\"]" $1/*
#   else
#      echo  "$eachfile FAILED"
    fi
  done

}

listFiles()
{
   echo "Base DIR  : $1\n\n"
   cd $2
   declare -a myArrayResult
   myArrayResult=(`find . -name $1 > fileMap`)
   
    dirname=$3

    if [ ! -d "$dirname" ];
        then
        mkdir -p ./$dirname
    else
        echo "$dirname exists, removing directory to create again"
        rm -rf $dirname
        mkdir -p ./$dirname
    fi

    while read line;
    do
         cp $line $dirname/
    done < fileMap
#    rm fileMap
#    echo "Total number of file ${#myArrayResult[@]}"
     cd -
}


#Get Clickable links from file
getLinksAndValidate()
{
    cmpString="javascript:void(0);"
    declare -a myArrayResult
    myArrayResult=(`find . -name "*.htm" > fileMap`)
    
    echo "#!/bin/bash" > lynxScript.sh
    while read line;
    do   
        echo "echo \"\nFile Name : $line \n\"" >> lynxScript.sh
        echo "lynx -nonumbers -dump -listonly \"$line\"" >> lynxScript.sh
    done < fileMap
   
    sh lynxScript.sh > ClickableLinks
   
    while read line;
    do
        if [ "$line" != "$cmpString" ]; then
            echo  $line >> ClickableReferences
        fi
    done < ClickableLinks
     
    rm fileMap 
}


#Verify links
verifyLinks()
{
    getLinksAndValidate
    declare -a myArrayResult
    myArrayResult=(`grep -e "^file\:" -e "^https\:" -e "^http\:" ClickableReferences > fileMap`)
    cat fileMap | sort -u > allLinksWithoutDups
    rm fileMap
    while read line;
    do
      curl -f --silent --output /dev/null --head $line
       
      if [ $? -eq $curlErrStat ]; then
          echo "****URL: $line not found****"
      fi
    done < allLinksWithoutDups
  
}

#Organize file by file size
orgByFileSize()
{
    echo "Organizing by file Size ...\n\n"
    cd $3
    dirname="dir$1"
    dirname2="fileSizeAbove$1" 
    myArrayResult=(`find . -name $2 >interested_files` )

    #Create directory

    if [ ! -d "$dirname" ];
        then
        mkdir -p ./$dirname
    else
        echo "$dirname exists, removing directory to create again"
        rm -rf $dirname
        mkdir -p ./$dirname 
    fi

    if [ ! -d "$dirname2" ];
        then
        mkdir -p ./$dirname2
    else
        echo "$dirname2 exists, removing directory to create again"
        rm -rf $dirname2
        mkdir -p ./$dirname2
    fi

    while read line;
    do
        size=(`stat -f %z $line`)
        if [ $size -le $1 ]; then 
            cp $line $dirname/
        else
            cp $line $dirname2/
        fi
     
    done < interested_files
    rm interested_files
}

#Identify duplicate files
identifyDupsUsecmp()
{
    echo "Searching  : $1...\n\n"
    cd $2
    declare -a myArrayResult
    declare -a myArray
    declare -a filePaths
    declare -a tocsvFile
    declare -a fileRefs
    oldFilename="TTTTT"
    myArrayResult=(`find $2 -name $1 >interested_files` )

    while read line;
    do
       echo "$line":$(basename "$line")>>filesToSort
    done < interested_files
 
    myArrayResult=(`cat filesToSort | sort -t':' -k 2 > sortedFile`)
    myArray=(`cat sortedFile`)
    myArrayResult=(`cat sortedFile`)
    i=0
    j=1
    check=0
    filecntapp=0
    dup_count=0
    index_csv=0
    n=${#myArray[@]}
    totalcnt=$n
    total_referenced=$n
    echo "comparing... $n Files"
    REPORT_FILE=report.csv

    echo "File Name,References Files,File Location">$REPORT_FILE 
    # write to the file
    while [ $i -lt $n ]
    do
    j=`expr $i + 1`
    var1=$(echo ${myArray[$i]} | awk -F ':' '{print $1}')
    FilePath=$(echo ${myArray[$i]} | awk -F ':' '{print $1}')
    FileName=$(echo ${myArray[$i]} | awk -F ':' '{print $NF}')
    
    if [ "$FileName" = "$oldFilename" ]; then
       if [ $flag -ne $initi ]; then
       i=`expr $i + 1`
       echo "-----------------------------"
       continue    
       fi
    fi

    #Search only in provided pattern
    flag=0
  #  filePaths=(`grep -lr --include=$2 --include-dir="Content" "[\/]$FileName[\"]" $3/*`)
    filePaths=(`rg -Nl --type-add 'htm:*.{htm,HTM,html,HTML}' -thtm "[/\"]$FileName"`)  
    if [ ${#filePaths[@]} -eq $initi ]; then
  #  echo "$FileName not referenced, please track"
     oldFilename=$FileName 
     flag=1
     echo "$FileName not referenced, please track"
     total_referenced=`expr $total_referenced - 1`
    fi
 
    if [ $flag -eq $initi ]; then
 
        # print to file 
        echo "-----------------------------"

        index_refs=0 
        fileRefs[index_refs]=$FilePath
        index_refs=`expr $index_refs + 1`

        while [ $j -lt $n ]
        do
           var2=$(echo ${myArrayResult[$j]} | awk -F ':' '{print $1}')
           cmpCheck=(`cmp -s "$var1" "$var2"`)
           if [ $? -eq $initi ];
           then
               FilePath=$(echo ${myArray[$j]}| awk -F ':' '{print $1}')
      
               fileRefs[index_refs]=$FilePath
               index_refs=`expr $index_refs + 1`
  
               dup_count=`expr $dup_count + 1`
               totalcnt=`expr $totalcnt - 1`
               i=`expr $i + 1`
           else
               break
           fi
           j=`expr $j + 1`
        done
     
        #preserve previous value for later indexing
       # if [[ ${#fileRefs[@]} < ${#filePaths[@]} ]]; then
           
        #Output file info only if referenced
        filecntapp=0

        # Handle case where references are less than locations where files are found

        if [ ${#fileRefs[@]} -gt ${#filePaths[@]} ]; then

            while [ $filecntapp -lt ${#fileRefs[@]} ]
            do

               if [ $filecntapp -lt ${#filePaths[@]} ]; then
                  tocsvFile[$index_csv]="$FileName,${filePaths[$filecntapp]},${fileRefs[$filecntapp]}\\n"
                  index_csv=`expr $index_csv + 1`
              else
                  tocsvFile[$index_csv]="$FileName,\"\",${fileRefs[$filecntapp]}\\n"
                  index_csv=`expr $index_csv + 1`
              fi
    
              filecntapp=`expr $filecntapp + 1`
           done

        elif [ ${#filePaths[@]} -gt ${#fileRefs[@]} ]; then
              filecntapp=0
              while [ $filecntapp -lt ${#filePaths[@]} ]
              do

               if [ $filecntapp -lt ${#fileRefs[@]} ]; then
                  tocsvFile[$index_csv]="$FileName,${filePaths[$filecntapp]},${fileRefs[$filecntapp]}\\n"
                  index_csv=`expr $index_csv + 1`
              else
                  tocsvFile[$index_csv]="$FileName,${filePaths[$filecntapp]},\"\"\\n"
                  index_csv=`expr $index_csv + 1`
              fi
    
              filecntapp=`expr $filecntapp + 1`
              done
         else
               filecntapp=0
               while [ $filecntapp -lt ${#fileRefs[@]} ]
               do
                  tocsvFile[$index_csv]="$FileName,${filePaths[$filecntapp]},${fileRefs[$filecntapp]}\\n"
                  index_csv=`expr $index_csv + 1`
                  filecntapp=`expr $filecntapp + 1`
               done
           
        fi
        tocsvFile[$index_csv]="\\n"
        index_csv=`expr $index_csv + 1`
     fi
 
    filecntapp=0
    buffer=1024
    if [ $index_csv -gt $buffer ]; then 
      echo ${tocsvFile[*]}>>$REPORT_FILE
      index_csv=0 
      unset tocsvFile
    fi

    unset filePaths
    unset fileRefs
#    if [[ $dup_count != $check ]]; then
#        i=`expr $i - 1`
#    fi
    dup_count=0
    i=`expr $i + 1`
    done
    echo ${tocsvFile[*]} >> $REPORT_FILE
    echo "Total count without repeats: $totalcnt"
    echo "Total referenced files: $total_referenced"
 #   echo "${myArrayResult[*]}"
   rm interested_files filesToSort sortedFile 
}

identifyDupsUseMD5()
{
    filename=mdf5Files
    declare -a myArrayBase
    declare -a myArrayResult
    myArray=(`sort -k 2 "$filename"`)
    myArrayResult=(`sort -k 2 "$filename"`)
    i=0
    j=1
    check=0
    dup_count=0
    n=${#myArray[@]}
    totalcnt=$n
    echo "comparing... $n Files"
    while [ $i -lt $n ]
    do
    # To print index, ith
    # element
#    echo "${myArray[$i]}  ${myArrayResult[$i]}"

    j=`expr $i + 1`
    var1=$(echo ${myArray[$i]} | cut -d' ' -f2)
    FilePath=$(echo ${myArray[$i]} | cut -d' ' -f1)
    FileName=$(echo ${myArray[$i]} | cut -d' ' -f1 |  awk -F '/' '{print $NF}')
    echo "File: $FileName"
    echo "    $FilePath"

    while [ $j -lt $n ]
    do
        var2=$(echo ${myArrayResult[$j]} | cut -d' ' -f2)
        if [ $var1 -eq $var2 ];
        then
            FilePath=$(echo ${myArray[$j]} |  awk '{print $1}')
            echo "     $FilePath"
           dup_count=`expr $dup_count + 1`
           totalcnt=`expr $totalcnt - 1`
           i=`expr $i + 1`
        else
        break
        fi
        j=`expr $j + 1`
    done

    if [ $dup_count -ne $check ]; then
        i=`expr $i - 1`
    fi
    dup_count=0
    i=`expr $i + 1`
    done
    echo "Total count without repeats: $totalcnt"
    echo "${myArrayResult[*]}"

}


#Remove unreferenced files
removeUnreferencedFiles(){
   i=0
   RemCount=0
   initi=0
   echo "Base DIR  : $1\n\n"
   cd $2
   declare -a myArrayResult
   myArrayResult=(`find . -name $1`) 
   n=${#myArrayResult[@]}
   while [ $i -lt $n ] 
   do
    var1=$(echo ${myArrayResult[$i]})
    if [ -f $var1 ]; then
         var2=$(echo $var1 | awk -F '/' '{print $NF}')
         echo "$var2 Found Here:"
         grep -m 1 -lr $var2 $2
         if [ $? != $initi ]; then
             rm ${myArrayResult[$i]}
             echo "******Removed file $var1 \n***********"
         fi          
    fi 
   i=`expr $i + 1`   
  done
  echo "Redundant files removed\n"
}


#Not used, for madcapFlare output structure reference
searchMain(){
# Update delimiter to allow spaces in file names
OIFS="$IFS"
IFS=$'\n'

#echo "--------------"
#echo $1

# Reference file paths. Update this as needed
yourdirs=`ls $1`

for eachdir in $yourdirs
do
  cd $1
  if [ -d "$eachdir" ]; then
    searchFunc "$1/$eachdir" ./Skins

    searchFunc "$1/$eachdir" ./Skins/Default

    searchFunc "$1/$eachdir" ./Skins/Default/Scripts

    searchFunc $1/$eachdir ./Skins/Default/Stylesheets

    searchFunc $1/$eachdir ./Skins/Default/Stylesheets/Components

    searchFunc $1/$eachdir ./Skins/Default/Stylesheets/Images

    searchFunc $1/$eachdir ./Resources

    searchFunc $1/$eachdir ./Resources/Scripts

    searchFunc $1/$eachdir ./Data

    searchFunc $1/$eachdir ./Content/Resources/Images

    searchFunc $1/$eachdir ./Content/Resources/MasterPages

    searchFunc $1/$eachdir ./Content/Resources/MasterPages/Resources

    searchFunc $1/$eachdir ./Content/Resources/Stylesheets

    searchFunc $1/$eachdir ./Content/Resources/TableStyles

    searchFunc $1/$eachdir ./Content/TableStyles
   else
     echo "\n\n\n"
   fi
done

echo "-------------------------------"
echo "\n\nTotal number of image: $count_img"
echo "-------------------------------"
OIFS="$IFS"
IFS=$'\n'
IFS="$OIFS"

}

if [ $# -eq 0 ]
then
        echo "Missing options!"
        echo "(run $0 -h for help)"
        echo ""
        exit 0
fi

ECHO="false"

while getopts "hryliusbcdv" OPTION; do
        case $OPTION in
                
                s)
                        if [ $# -lt 4 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        orgByFileSize     $2 "*.$3" $4
                        ;;
                u)
                        if [ $# -lt 2 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        dirs=`pwd`
                        echo "\nSearch directory $dirs"
                        identifyDupsUsecmp     "*.$2" $dirs
                        ;;
                r)
                        if [ $# -lt 3 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        removeUnreferencedFiles "*.$2" $3
                        ;;
                l)
                        if [ $# -lt 2 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi

                        listFiles "*.png" $2 png
                        listFiles "*.gif" $2 gif
                        listFiles "*.svg" $2 svg
                        listFiles "*.jpg" $2 jpg
                        listFiles "*.bmp" $2 bmp
                        listFiles "*.jpeg" $2 jpeg
          
                        ;;
                b)
                        if [ $# -lt 2 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        searchFunc $2 $3                        
      
                        ;;
                d)      
                        if [ $# -lt 2 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        deleteDirFiles $2

                        ;;
                c)
                        if [ $# -lt 1 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi

                        getLinksAndValidate
                        ;; 

                v)      
                        if [ $# -lt 1 ]
                        then
                            echo "Missing options"
                            echo "(run $0 -h for help)"
                            echo ""
                            exit 0
                        fi
                        verifyLinks
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
                y)
                        echo "Getting Youtube link count..."
                        getLinksAndValidate
                        cat ClickableLinks| grep youtube > YoutubeLinks
                        rm ClickableLinks
                        rm ClickableReferences
                        exit 0
                        ;;
        esac
done
IFS="$OIFS"
