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
git add ./package.json ./yarn.json
git commit -m "Build(core): @pixiepkg/core $version"

yarn build
cd dist/
npm publish --access public
