const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
      filename: "./src/index.js",
  },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ "", ".webpack.js", ".web.js", ".ts", ".tsx", ".js" ]
    },
    // output: {
    //   filename: 'bundle.js',
    //   path: path.resolve(__dirname, 'dist')
    // }
};
