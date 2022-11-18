/*
 * @Description: 
 * @Author: Zhu li
 * @Date: 2021-12-05 00:15:36
 * @LastEditTime: 2022-11-18 15:19:38
 * @LastEditors: zl
 */
const path = require('path')
const startAPI = process.env.VUE_APP_BASE_URL
const proxyUrl = process.env.VUE_APP_URL
module.exports = {
  publicPath: './', // 公共路径
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192
          })
        ]
      }
    }
  },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    proxy: {
      // 配置多个跨域
      [startAPI]: {
        // target: 'http://121.89.177.77:8003',
        target: proxyUrl,
        changeOrigin: true,
        // ws: true,//websocket支持
        // secure: false,
        logLevel: 'debug',
        pathRewrite: {
          ['^' + startAPI]: ''
        }
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '基本框架';
      return args;
    })
    //svg图标
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/img/icon'))
      .end()

    config.module
      .rule('icons')// 定义一个名叫 icons 的规则
      .test(/\.svg$/)// 设置 icons 的匹配正则
      .include.add(path.join(__dirname, 'src/assets/img/icon'))// 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .end()
      .use('svg-sprite')// 指定一个名叫 svg-sprite 的 loader 配置
      .loader('svg-sprite-loader')// 该配置使用 svg-sprite-loader 作为处理 loader
      .options({// 该 svg-sprite-loader 的配置
        symbolId: 'icon-[name]'
      })
      .end()
  },
}