# Pixie Core UI Versions

We have 2 packages `@pixiepkg/react` and `@pixiepkg/icon` and one react demo / debug website

## V1, V2 opinion

- Bad repository, structure is seperated

- Development is painful

## V3 Lerna + Yarn workspace

Version 3 of design system is just an codebase upgrade to increase development experience

Lerna and Yarn Workspaces is used to ease and optimize the management of working with multi-package repositories.

Lerna makes versioning and publishing packages to an NPM Org a painless experience by providing helpful utility commands for handling the execution of tasks across multiple packages.

Yarn Workspaces manages our dependencies. Rather than having multiple node_modules directories, it intelligently optimizes the installing of dependencies together and allows for the cross-linking of dependencies in a monorepo. Yarn Workspaces provide tools, like Lerna, the low-level primitives it needs to manage multi-package repositories.

> https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149

Let's look at how I config them

## ROOT directory

Init lerna to setup monorepositories

```bash
yarn init -y
yarn add -D lerna
yarn lerna init
```

It will create a lerna.json file, here is some of my configuration for pixie monorepositories

### root lerna.json

`npmClient: "yarn", useWorkspaces: true` -> use yarn workspaces

`stream: true` -> lerna log

### root package.json

`workspaces: {packages: ["packages/*"]}` -> tell yarn workspace packages dirs

`scripts: {build: "yarn lerna run build"}` -> run build to _all_ packages directories

`workspaces: {nohoist: ["**/normalize-scss"]}` -> no hoist a package and will add to the child node_modules

`private: true` -> tell yarn that the package is not meant to be publish

After done all this, there won't any duplicate dependencies, all dependencies will be hoisted in the root \_node_module

And when we run `yarn lerna run build` it will run `yarn run build` to all directories decleared in `workspaces.packages`, it will skip if that packages didn't have the `yarn run build` script

## Scripts

### @pixiepkg/react script

```json
"scripts": {
    "build": "rollup -c",
    "watch": "yarn build --watch"
},
"watch": {
    "build": {
        "patterns": [
            "src/**/*"
        ],
        "extensions": "css, ts, tsx, module.css"
    }
},
```

Simple stuff, `yarn run dev` will "build" and "watch" for changes

### @pixiepkg/icon

```json
"scripts": {
  "watch": "yarn rollup --watch",
  "build": "./scripts/build.sh",
  "rollup": "rollup --config",
  "build:icon": "yarn icon:clean && yarn icon:build",
  "icon:build": "svgr --out-dir ./src/icons ./src/svg-transformed",
  "icon:clean": "rm -f ./src/icons/*"
}
```

### React app demo

```json
"scripts": {
    "demo": "react-scripts start",
    "build:demo": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

### root script

```json
"scripts": {
    "watch": "yarn lerna run watch",
    "demo": "yarn lerna run demo",
    "dev": "concurrently \"yarn run watch\" \"sleep 10 && yarn run demo\"",
    "build": "yarn lerna run build",
    "build:demo": "yarn lerna run build:demo",
    "test": "yarn lerna run test",
    "publish": "yarn build && yarn lerna publish",
    "commit": "yarn git-cz",
    "test:chromatic": "yarn lerna run test:chromatic",
    "build:storybook": "yarn build && yarn lerna run build-storybook"
}
```

So, whenever I want to dev the design system, all I have to do is `yarn run dev`, and it will run concurrently both `watch` = build + watching and start react demo website. Why have to `sleep 5`? Well we have to wait for other packages in our workspaces to finish the first build, otherwise react won't pick it up.

Also in the react demo, if we want to import the package in our workspaces, all we have to do is `import {Button} from '@pixiepkg/react'`. Wait what how? Hehe, yarn workspace will that the packages that we decleared in the root `package.json` and hoisted to the root `node_modulee`. So that all of the code in the workspace will have access to the package. You must include directory to the build file in the `package.json`

```js
"main": "dist/cjs.js",
"module": "dist/esm.js",
"types": "dist/types/index.d.ts",
```

## CI / CD

### Deploy job

Basicly just install -> build -> deploy. Deploy using vercel with this script:

`vercel --token $VERCEL_TOKEN --confirm --no-clipboard --prod`

## Publish to NPM

Just run `yarn run publish`, remember to login to npm using `npm login`.
