#!/bin/bash

set -e

for file in $(find templates -name "*.html"); do # Not recommended, will break on whitespace
    echo "inserting: $file"
    content=$(cat "$file")
    script="<script type=\"text/ng-template\" id=\"$file\">\n\t$content\n</script>"
    pattern=$"s%<!-- script placeholder -->%<!-- script placeholder -->\n$script%g"
    perl -i -0pe $"$pattern" index.html
done
