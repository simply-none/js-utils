// 引入nodejs path 包
const { resolve } = require('path')

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出打包文件配置
    output: {
        // 输出文件名称
        filename: 'jadeqs-utils.js',
        // 输出文件目录
        path: resolve(__dirname, 'dist'),
        // 导出全局变量
        library: 'jadeqUtils',
        // 导出模块化 'umd' 支持 'amd' 或 'cmd'规范
        libraryTarget: 'umd',
        // 处理browser或者node环境
        globalObject: 'this',
    },
    // 将lodash包排除在打包外。（注意：在引入包时，需要用户再单独下载lodash包）
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    // 打包环境
    mode: 'production',
    // 开启source-map 方便生成调试。
    devtool: 'source-map'
}