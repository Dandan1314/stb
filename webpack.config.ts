import * as path from "path";
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as cleanWebpackPlugin from 'clean-webpack-plugin';
import { pages } from "./webpack.pages.config";

const jsonAlias = require("./src/platform/platform.alias.config.json");
const jsonPlatform = require("./src/platform/platform.alias.config.json");

const alias = jsonAlias[jsonPlatform.platform];

const tsxTem = "./src/pages/{name}/index.tsx";
const lesTem = "./src/pages/{name}/index.less";

// 页面配置
const entrys: any = {};
const plugis: any = [
  new cleanWebpackPlugin(['dist']),
  new ExtractTextPlugin({
    filename: '[name].css'
  })
];

pages.forEach((v) => {
  entrys[`js_${v}`] = tsxTem.replace("{name}", v);
  entrys[`css_${v}`] = lesTem.replace("{name}", v);
  plugis.push(
    new HtmlWebpackPlugin({
      filename: `${v}.html`,
      template: `./src/pages/${v}/index.html`,
      hash: true,
      chunks: [`common`, `runtime`, `css_${v}`, `js_${v}`]
    })
  )
});

// 别名配置
const _alias: any = {
  "stb": path.resolve(__dirname, 'src/framework')
};

for (const key in alias) {
  if (alias.hasOwnProperty(key)) {
    const val = alias[key];

    _alias[key] = path.resolve(__dirname, `src/platform/${val}`);
  }
}

const config: webpack.Configuration | any = {
  entry: entrys,
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                alias:{
                  '$':path.join(__dirname,'src','platform','common')
                }
              }
            }
            , 'less-loader']
        })
      },
      {
        test: /\.tsx?$/,
        use: ['es3ify-loader', 'awesome-typescript-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[hash].[ext]",
              outputPath: '/images',
              publicPath: "./images"
            }
          }
        ]
      },
      {
        test: /\.(html)$/i,
        use: ['html-withimg-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 30,
      automaticNameDelimiter: '_',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          name: "common",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single'
  },
  plugins: plugis,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: _alias
  },
  devtool: "eval-source-map"
  // --inline --devtool source-map --content-base dist
}

export default config;