const path = require('path'); //import the Node.js built-in Path module API
const HtmlWebpackPlugin = require('html-webpack-plugin'); //import plugin 'API'

module.exports = {
    entry: {
        app: './src/main.js' //entry point for webpack to start building its 'dependency-graph'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html', // file-path for webpack to use as template for its generated html
            filename: 'index.html', // file-name for the webpack-generated html
            title: 'To-Do List', // 'tab' title in the browser / the text in the <title> tag.
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // if a filename with this extension is found (regex-pattern)
                use: ['style-loader', 'css-loader'] // then apply these things (last to first) (also handles images when paired with the rule for img files below)
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // (regex-pattern)
                type: 'asset/resource', // webpack built-in asset handling (for JS img references, maybe CSS also?)
            },
            {
                test: /\.html$/,
                use: 'html-loader' // find the original image reference so that webpack can process it (create an optimized copy of the image and update the relative-path in the generated HTML file)
            }
        ]
    },
    resolve: {
        alias: {
            '@images': path.resolve(__dirname, 'src/images/') // path.resolve converts the relative path to an absolute path (so it can be referenced from anywhere for JS files | does not work for HTML or CSS files)
        }
    }
}