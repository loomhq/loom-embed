const path = require('path');

module.exports = {
  entry: {
    sdk: './src/sdk/index.js',
    examples: './src/examples/index.js'
  },
  mode: 'development',
  devServer: {
    port: 8989,
    publicPath: '/assets/'
  },
  output: {
    library: 'loom',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'umd',
    filename: '[name].js',
    // Workaround until webpack fixes the global/window umd export issue
    // https://github.com/webpack/webpack/issues/6784
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "loom-embed": path.resolve(__dirname, '..', 'src/sdk/')
    }
  }
};
