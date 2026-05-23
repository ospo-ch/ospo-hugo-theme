#!/bin/bash

# https://coderwall.com/p/fkfaqq/safer-bash-scripts-with-set-euxo-pipefail
set -euo pipefail

cd exampleSite && hugo server --gc --themesDir=../.. --logLevel debug