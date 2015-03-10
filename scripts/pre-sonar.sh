#!/bin/sh

sed -i "s/<project-key>/$1/g" sonar-project.properties
sed -i "s/<project-name>/$2/g" sonar-project.properties