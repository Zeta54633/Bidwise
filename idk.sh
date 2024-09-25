#!/bin/bash

cd ./views
npm run build
cd ../
python app.py

