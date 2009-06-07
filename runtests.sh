#!/bin/sh
START="$(date) <--------------START"
cd $(dirname $0)
RHINO="${PWD}"/rhino/js-1.7R1.jar
DOJO="${PWD}"/dojo/dojo/dojo.js
DOH="${PWD}"/dojo/util/doh/

TARGET="${PWD}"/tests/run-rhino.js

java -client -jar "${RHINO}" -opt 1 "${TARGET}" dojoUrl="${DOJO}"  testModule="" 

echo $START
echo $(date) \<--------------END
