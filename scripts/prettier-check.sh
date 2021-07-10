#!/bin/bash
set -e

yarn prettier --check ./core/src
yarn prettier --check ./icon/src
yarn prettier --check ./site/src
