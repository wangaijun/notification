// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + "cn-caee5b34-aa2d-499e-aee0-6f08d8cd5de6";
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;

import {XHeader,CellFormPreview,Group,Flexbox, FlexboxItem} from 'vux'
Vue.component('XHeader',XHeader)
Vue.component('CellFormPreview',CellFormPreview)
Vue.component('Group',Group)
Vue.component('Flexbox',Flexbox)
Vue.component('FlexboxItem',FlexboxItem)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
