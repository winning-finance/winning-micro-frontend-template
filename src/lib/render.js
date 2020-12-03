import '@/publicPath'
import MicroApp from '@winning/micro-app'
import Vue from 'vue'

export function render (config) {
  return Vue.use(MicroApp, config)
}
