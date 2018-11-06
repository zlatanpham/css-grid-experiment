const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = mode => ({
  devServer: {
    contentBase: "./dist",
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.?scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "__[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: { plugins: () => [require("autoprefixer")] }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "CSS Grid experiment",
      template: "src/index.html"
    })
  ]
});
