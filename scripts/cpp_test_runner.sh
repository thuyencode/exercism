#!/bin/bash

cd $(pwd)
mkdir build
cd build
cmake -G "Unix Makefiles" ..
make
cd ..
rm -rf build/
