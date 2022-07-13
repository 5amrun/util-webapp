const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});


module.exports = {
  entry: "./src/index.js",
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },


  devServer: {
    static: [path.join(__dirname, "public")],


    // In case needed:
    // https: true,
    // key: './path_to_pemfile.pem',
    // cert: './path_to_pemfile.pem',

    // This enables webpack-dev-server cross-origin-isolated and set to yes for shared array buffer err...
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  
  // Adding source map for better error logs (so not all point to bundler.js)
  devtool: 'inline-source-map',


  // externals: {
  //   'react': 'React'
  // },

//   plugins: [
//     htmlPlugin,
//     new webpack.ProvidePlugin({
//        "React": "react",
//     }),
//  ],
  plugins: [
    htmlPlugin
  ],



  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: 'static/[hash].[ext]' }
      },

      {
        test: /\.(glsl|frag|vert)$/,
        use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
      },

    ]
  }
};
