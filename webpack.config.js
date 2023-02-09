const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const getStyleLoaders = () => {
  return [isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"];
};

const getPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),

    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
  ];
  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name]-[hash:8].css",
      })
    );
  }
  return plugins;
};

module.exports = {
  mode: isProd ? "production" : isDev && "development",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash:8].js",
    sourceMapFilename: "index.[contenthash:8].js.map",
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },
  devtool: "source-map",

  plugins: getPlugins(),

  module: {
    rules: [
      //Loading Babel
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      //Loading images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.resolve("icons", "[name].[contenthash][ext]"),
        },
      },
      //Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        type: "asset/resource",
      },

      //Loading CSS
      {
        test: /\.(css)$/,
        use: getStyleLoaders(),
      },
      //Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use: [...getStyleLoaders(), "sass-loader"],
      },
    ],
  },
  devServer: {
    watchFiles: path.resolve(__dirname, "src"),
    port: 9000,
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              ["svgo", { name: "preset-default" }],
            ],
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
