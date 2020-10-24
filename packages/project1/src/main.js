import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MicroApp from '@winning/micro-app'

export * from '@winning/micro-app'

Vue.config.productionTip = false

Vue.use(MicroApp, {
  router,
  store,
  render: h => h(App),
  bootstrap: (props) => {
    console.log('bootstrap')
  },
  mount: (vm,props) => { },
  unmount: (props) => { }
})
