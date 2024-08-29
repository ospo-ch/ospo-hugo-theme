#!/bin/bash

# https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
#
# set -e will cause the script to exit immediately when a command fails
set -e 

cd exampleSite && hugo server --gc --themesDir=../..