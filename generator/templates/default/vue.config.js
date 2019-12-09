/**
 * 覆盖webpack默认设置
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  productionSourceMap: false,

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true // 自动启动浏览器
  },

  chainWebpack: (config) => {
    config.plugins
      .delete('prefetch');
    config.resolve.alias
      .set("@", resolve('src'))
  }
}