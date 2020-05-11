import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import PrettierPlugin from "prettier-webpack-plugin";

export default {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        //        https: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Poker 2020 - Cards",
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
