module.exports = {
  build: {
    dist: 'dist', // 生产包存放目录
    packages: 'packages' // 子应用默认路径
  },
  data: {
    applicationList: [{
      appSystemId: '4302708202',
      appSystemName: '门诊费用管理',
      appSystemPicUrl: 'c:\\',
      appSystemRelativeUri: 'fee-management-outp',
      appMenuList: [
        {
          appMenuId: '4302708264',
          appMenuRelativeUri: '/#/feeCompare',
          appMenuName: '费用对比',
          appMenuList: [],
          devEntry: 'http://localhost:3003'
        }
      ]
    }],
    currentAppId: '4302708202'
  }
}
