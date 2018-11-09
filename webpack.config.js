const  HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname,'/lib'),
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        port: 8080
    },
    module: {
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
    
};