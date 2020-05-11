const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
        }),
        new PrettierPlugin({
            printWidth: 80, // Specify the length of line that the printer will wrap on.
            tabWidth: 4, // Specify the number of spaces per indentation-level.
            useTabs: false, // Indent lines with tabs instead of spaces.
            semi: false, // Print semicolons at the ends of statements.
            encoding: "utf-8", // Which encoding scheme to use on files
            extensions: [".js"], // Which file extensions to process
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
