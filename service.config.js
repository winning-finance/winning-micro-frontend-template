module.exports = {
  vueConfig: { // 所有 vue.config.js 的配置都支持
    watch: true,
    devServer: {
      open: true,
      proxy: { // 配置代理
        '/finance-fee-inp': {
          target: 'http://172.16.6.201',
          changeOrigin: true
        }
      }
    }
  },
  loginPluginOptions: {
    systemId:'153614388663152641',
    username: '00', // 账号
    password: '1', // 密码
    extraCookies: { // 调试参数
      'W-FLOW': 'canary',
      'W-SEQ': 21,
      'X-DEBUG': 'hybrid'
    }
  },
  menu: { // 菜单模块
    appSystemId: '4303253901',
    appMenuName: '患者管理',
    appMenuList: [
      {
        name: 'welcome',
        appMenuCode: '399203507',
        appMenuId: '106667170654810113',
        appMenuRelativeUri: '/welcome/',
        appMenuName: '欢迎-his-app',
        appMenuList: [],
        appMenuTypeCode: '256053'
      }
    ]
  }
}
