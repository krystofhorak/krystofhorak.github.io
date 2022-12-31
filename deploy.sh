#!/bin/bash

set -e
yarn build
cd dist

echo > .nojekyll

git init
git checkout -B gh-pages
git add .
git commit -m 'Updating GitHub Pages'

git push -f git@github.com:krystofhorak/krystofhorak.github.io.git gh-pages

cd -
