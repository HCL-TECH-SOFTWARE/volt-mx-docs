#!/usr/bin/bash


pwrd=`pwd`
#Perform build
bundle exec jekyll build

cd _site/assets/js

#Update the host url 
sed -i "" s/hcl-tech-software\.github\.io/opensource\.hcltechsw\.com/g search-data.json
sed -i "" s/hcl-tech-software\.github\.io/opensource\.hcltechsw\.com/g just-the-docs.js

#Generate search index file
cp search-data.json ../../../docRebrandScripts/searchIdxGeneration/
cd ../../../docRebrandScripts/searchIdxGeneration/

node createIndex.js

#move updated index files to _site folders 
echo $pwrd
cp search* $pwrd/_site/assets/js/

cd $pwrd
