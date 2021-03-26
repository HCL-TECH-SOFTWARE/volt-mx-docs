#!/bin/bash

echo "{" > "config.json"
echo "\"tocPaths\": [\"/Users/sunilnagaraja/Documents/Work_at_HCL/Softwares/QuantumV9SP2/Visualizer/$1/Data/Toc.js\"]" >> "config.json"
echo "}" >> "config.json"
node Create_tree_yml.js $1 $2 > "$1.yml"
