#!/usr/bin/bash


pwrd=`pwd`
#Perform build
bundle exec jekyll build $1

cd _site/assets/js

#Update the host url 
#sed -i 's/VoltMxDocOpnSrc/pages\/phoenix-temenos\/VoltMxDocOpnSrc/g' search-data.json
sed -i 's/`\/VoltMxDocOpnSrc/`\/pages\/phoenix-temenos\/VoltMxDocOpnSrc/g' just-the-docs.js

#Generate search index file
cp search-data.json ../../../docRebrandScripts/searchIdxGeneration/
cd ../../../docRebrandScripts/searchIdxGeneration/

node createIndex.js
#read -p "Resume"
#move updated index files to _site folders 
echo $pwrd
cp search* $pwrd/_site/assets/js/

cd $pwrd
