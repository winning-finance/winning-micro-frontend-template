const { name } = require('./package')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const resolve = dir => path.join(process.cwd(), '../../', dir)

module.exports = {
  publicPath: isDev ? '/' : '/fee-management-outp/outpCharge/',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 3003,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/outpat-person': {
        target: 'http://172.16.6.213'
      },
      '/schedule-outpatient': {
        target: 'http://172.16.6.213'
      },
      '/finance-common': {
        target: 'http://172.16.6.213'
      },
      '/oss': {
        target: 'http://172.16.6.213'
      }
    }
  },
  chainWebpack: config => {
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
    })
    config.plugin('html')
      .tap(args => {
        args[0].template = resolve('src/public/index.html')
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
