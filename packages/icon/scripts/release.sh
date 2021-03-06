#!/bin/bash
set -e

# sanity check
if [[ -z "$1" ]]; then
    echo "Missing release version (minor or patch)" 1>&2
    exit 1
fi

# bump version
version=$(npm version $1)

# commit new version
git add ./package.json ./yarn.lock
git commit -m "Build(icon): @pixiepkg/icon $version"

yarn build
cd dist/
npm publish --access public
