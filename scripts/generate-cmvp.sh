#!/bin/bash

set -e

#go to project root
cd $(dirname $(readlink -f $0))/..

. node_modules/cmvp-framework/src/scripts/generate-cmvp.sh

update_main() {
    for key in "${!FILES[@]}"
    do
        local file=$(fix_path ${FILES[$key]})
        if ! [[ "$file" =~ "$TEST_EXT" ]] ; then
            file=$(echo "$file" | sed "s/$APP_PATH\///g")
            file=$(echo "$file" | sed "s/\.js\///g")
            local find="\/\/CMVP-SCRIPT-PLACEHOLDER"
            local replace="'$file',\n        \/\/CMVP-SCRIPT-PLACEHOLDER"
            sed -i "s%$find%$replace%g" app/require.cfg.js
        fi
    done
}

generate_cmvp $1
update_main

./scripts/fix-eslint.sh