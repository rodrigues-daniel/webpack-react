const  HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname,'./'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
    
};