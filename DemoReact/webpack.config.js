const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // ********* Dẫn tới file index.js ta đã tạo 
    output: {
        path: path.join(__dirname, "build"), // Thư mục chứa fi
        filename: "bundle.js" // Tên file được build ra         
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Sẽ sử dụng babel-loader cho những
                exclude: /node_modules/, // Loại trừ thư mục node_mod
                use: ["babel-loader"]
            },
            {
            test: /\.css$/, // Sử dụng style-loader, css-loader
            use: ["style-loader", "css-loader"]
            }
        ]
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html" // ********* Đúng vào file html
        })
    ]
};
