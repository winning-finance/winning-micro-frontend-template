import '@/publicPath'
import Vue from 'vue'
import App from './App.vue'
import MicroApp from '@winning/micro-app'

export * from '@winning/micro-app'

Vue.config.productionTip = false

Vue.use(MicroApp, {
  render: h => h(App),
  bootstrap: (props) => {
    // eslint-disable-next-line
    console.log('bootstrap')
  },
  mount: (props) => { },
  unmount: (props) => { }
})
