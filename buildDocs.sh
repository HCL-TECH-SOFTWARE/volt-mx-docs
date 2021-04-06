#!/usr/bin/bash


pwrd=`pwd`
#Perform build
bundle exec jekyll build

cd _site/assets/js

#Update the host url 
sed -i "" s/hcl-tech-software\.github\.io/opensource\.hcltechsw\.com/g search-data.json

#Generate search index file
cp search-data.json ../../../search_idx_generation/
cd ../../../docRebrandScripts/searchIdxGeneration/

node createIndex.js

#move updated index files to _site folders 
mv search* $pwd/_site/assets/js/

cd $pwd
