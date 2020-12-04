/* eslint-disable */
const isProduction = process.env.NODE_ENV === 'production'
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = isProduction ? window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : process.env.VUE_APP_SYSTEM_BASE_URL;
  }