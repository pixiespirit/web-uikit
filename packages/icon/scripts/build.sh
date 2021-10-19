#!/bin/bash
set -e

# transform all svg icons
node ./scripts/transform-svg.mjs

# build svg icons to components
yarn build:icon

# clean up
rm -rf ./src/svg-transformed

# rollup
yarn rollup
