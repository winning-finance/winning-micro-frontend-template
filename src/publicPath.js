/* eslint-disable */

const isProduction = process.env.NODE_ENV === 'production'
const isLocal = process.env.HIS_MICRO_APP_DEVELOP_MODE === 'local'

// 解决window下 多
if (!isProduction && isLocal) {
  const  Vue = require('vue')
  Vue && Vue.default && (window.Vue = Vue.default)
}
// if (window.__POWERED_BY_QIANKUN__) {
//  __webpack_public_path__ = isProduction ? window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : process.env.VUE_APP_SYSTEM_BASE_URL;
// }
