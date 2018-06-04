// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import goTop from '../lib/index'
import goTop from './lib/VueGotop.vue'

// Vue.use(goTop);
Vue.component('goTop', goTop)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app', components: {
    App
  }, template: '<App/>'})
