#!/bin/bash

# Read .ENV Variables
declare -x BUILD_PATH=$(pwd)\..

cd $BUILD_PATH

source $BUILD_PATH/.env

# Compile
docker-compose build 

# Deploy
docker-compose up -d
