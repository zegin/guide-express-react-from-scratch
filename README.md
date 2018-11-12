# guide-react-boilerplate

## 1 => Node - Hello world

Src/server/index.js

```
node src/server/index.js
```

## 2 => Yarn and hot reload

```
yarn init -y
```
```
yarn add -D nodemon
```
```
  "scripts": {
    "dev": "nodemon src/server/index.js" 
  },
```
```
yarn dev
```

## 3 => Express
```
yarn add express
```
Add express in src/server/index.js
```
yarn dev
```

## 4 => React

### a - webpack
Add webpack/webpack.congig.js
Add src/client/index.html
```
yarn add webpack webpack-dev-middleware
yarn add -D webpack-cli html-webpack-plugin
```
### b - babel
Add .babelrc
```
yarn add -D @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
```
### c - react
Add src/client/index.js
```
yarn add react react-dom
```
