/* global __dirname */
const path = require("path");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    index: "../index.js",
  },

  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    alias: {
      "polythene/config/custom": path.resolve(__dirname, "../src/config/custom.js"),
      "polythene/config/config": path.resolve(__dirname, "../src/config/config.js"),
    }
  },

  externals: {
    mithril: "m"
  },

  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      }
    ]
  },

  devtool: "source-map"

};
