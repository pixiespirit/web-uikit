#!/bin/bash
set -e

# lint check core
yarn eslint ./core/src \
    --max-warnings=0 \
    --ext=.jsx,.js,.ts,.tsx \
    --ignore-path=./core/.gitignore

# lint check icon
yarn eslint ./icon/src \
    --max-warnings=0 \
    --ext=.jsx,.js,.ts,.tsx \
    --ignore-path=./icon/.gitignore
