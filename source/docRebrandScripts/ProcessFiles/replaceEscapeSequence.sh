#!/usr/bin/bash

pwrd=`pwd`
cd $1
myArrayResult=(`rg -l "\{% highlight" > $pwrd/fileMap`)
cd -
while read line;
do
   awk -f handleescapeChar.awk $1/$line > temp_$(basename $line) && mv temp_$(basename $line) $1/$line
done < fileMap

rm fileMap
