const { merge } = require('webpack-merge') //
const common = require('./webpack.common.js') //

module.exports = merge(common, { 
    mode: "development",
    devtool: "eval-source-map", // recommended source-mapping for 'mode: development'
    devServer: {
        open: true, //open browser automatically when dev-server is turned on
        hot: true, //only refresh the areas of the page that had an update (rather than a full-page refresh)
    }
})