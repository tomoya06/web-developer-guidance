const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// comment line 6 to disable analyzer
// plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins,
    optimization
  }
};
