module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    "user": "./src/index.ts",
  },
  output: {
    path: `${__dirname}/public/script`,
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: false,
              emitErrors: true
            },
          },
        ],
        exclude: /node_modules/
      }
    ]
  }
};
