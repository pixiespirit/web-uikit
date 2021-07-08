#!/bin/bash
set -e

yarn prettier --write --loglevel=silent ./core/src
yarn prettier --write --loglevel=silent ./icon/src
yarn prettier --write --loglevel=silent ./site/pages
yarn prettier --write --loglevel=silent ./site/components
