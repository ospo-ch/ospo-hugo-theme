#!/bin/bash
# 
# Copyright (c) ospo.ch & authors
# SPDX-License-Identifier: Apache-2.0
# 
# This script generates content for the ospo theme demo website. 

set -euo pipefail

main() {
    EXIT_CODE=0

    CURRENT_DIR=$(pwd)
    CATALOG_DIR="./exampleSite/content/catalog/"
    
    if [ -d "$CATALOG_DIR" ]; then 

        cd "$CATALOG_DIR"
        seed_software_catalog
    else 
        echo "Couldn't find the $CATALOG_DIR directory"
        echo "Please make sure to execute from the ospo theme root directory"
    fi

    cd "$CURRENT_DIR"

    exit "$EXIT_CODE"
}

seed_software_catalog() {
    FILENAME="catalog"
    for i in {1..25}
    do 
        FILE_SUFFIX=$(printf "%03d" "$i")
        cat > "$FILENAME-$FILE_SUFFIX.md" << EOF
        ---
        title: software $i
        ---
EOF
    done 
}

main