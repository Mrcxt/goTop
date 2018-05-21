// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import goTop from './components/goTop/goTop.vue'

Vue.config.productionTip = false
Vue.component('go-top', goTop)

/* eslint-disable no-new */
new Vue({el: '#app', components: {
    App
  }, template: '<App/>'})
