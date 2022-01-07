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
  cookiePluginOptions: { // 自动登陆，注意不要写死 host
    userInfoParams: {
      loginURL: '/base/api/v1/base/user/login',
      userInfoURL: '/base/api/v1/base/user/get_information',
      username: '00',
      password: '1'
    },
    extraCookies: {
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
