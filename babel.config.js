const path = require("path");

module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  entry: "./src/index.js", // Your entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regular expression to match .js files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use this preset for modern JavaScript
          },
        },
      },
    ],
  },
};
