# React & Material Design Sample Project

## About
>The basic function of react : compsition of UI component, navigation between UI, event dispatch, handle client data.

#### Features
- Layout, Sidevar menu in smallscreen, title menu in large screen
- Routing between UI based on URL 
- Asynchronous data access(AJAX)
- Appendable list item

### **Agenda**
- [install & run](#global install)
- [tools](#tools)
- [architecture](#architecture)

----

### Global install
> The environment requires node and global packages.

_*Need to update npm version more than `3.x.x`*_
_*because it will optimize npm packages*_

'npm install -g webpack webpack-dev-server cross-env babel-node babel-cli'

(sudo needs in OXS or Linux)
- webpack: running babel tranpill and combining js and so on
- webpack-dev-server: run http server and inject js and css, live load 
- cross-env: senvironment properties set- development or pproduction, so that application knows running mode
- babel-node, babel-cli: babel package support for ES6(EcmaScript 2015)

Preview: https://myguddy.github.io

### Following technologies are used
Need to run 'npm install'
- axios
- babel
- express
- bcryptjs
- mongoose
- react
- react-router
- react-addons-css-transition-group
- react-addons-update
- redux
- redux-thunk
- materializecss
- react-hot-loader
- webpack
- webpack-dev-server
- style-loader
- css-loader

### Run Scripts

- `npm run ui` live load ui http://localhost:4000
- `npm run clean` Deletes Build files of Server and Client
- `npm run build` Builds Server and Client
- `npm run start` Start server in production environment
- `npm run development` Start server in development environment

-----

## tools

### editor
I think `Visual Studio Code` is better
- [Atoms](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/?utm_expid=101350005-28.R1T8FshdTBWEfZjY0s7XKQ.0&utm_referrer=https%3A%2F%2Fwww.google.co.kr%2F)
- sublimetext

You may want to install extension for better performance

![Extension](/doc/vsc_extension.png)


### npm, package.json

Option desriptioin for npm installing

1. npm install [packagename] : install pkg into ./node_moduls
2. npm install -g [packagename] : install pkg into user_home path/lib/node_modules
3. npm install --save [packagename] : same as '1' and save pgk as dependencies into package.json
4. npm install --save-dev [packagename] : same as '1' and save pgk as devdependencies into package.json

> `npm install` install all of packages in package.json.

> Global packages can run from command line but local packages can only in js source code.

> If you need both of module js and command line, then you install global and local, tools

----

## architecture

TBD