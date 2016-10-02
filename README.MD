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
- architecture(#architecture)

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

Open source editor : [Atoms](https://atom.io/)