{
  "name": "@loomhq/loom-embed",
  "version": "1.1.3",
  "description": "SDK for easy embedding videos",
  "main": "dist/sdk.js",
  "scripts": {
    "start": "webpack-dev-server --config ./config/webpack.config.base.js --open",
    "test": "jest --watch",
    "build": "webpack --config ./config/webpack.config.prod.js",
    "prepublishOnly": "webpack --config ./config/webpack.config.prod.js",
    "publish:beta": "npm publish --tag=next",
    "deployDocs": "./bin/deploy-docs.sh",
    "deployToCdn": "./bin/deploy-sdk-cdn.sh"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.1.2",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-transform-async-to-generator": "^7.1.0",
    "@babel/plugin-transform-runtime": "^7.1.0",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.0.0",
    "@babel/runtime": "^7.1.2",
    "babel-core": "^7.0.0-bridge.0",
    "babel-jest": "^23.6.0",
    "babel-loader": "^8.0.4",
    "css-loader": "^1.0.0",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^23.6.0",
    "style-loader": "^0.23.0",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.9"
  },
  "dependencies": {
    "react": "^16.5.2",
    "react-dom": "^16.5.2"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/loomhq/loom-embed.git"
  },
  "bugs": {
    "url": "https://github.com/loomhq/loom-embed/issues"
  },
  "homepage": "https://github.com/loomhq/loom-embed#readme"
}
