// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'


import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + "cn-d4a313d6-f8a4-4eba-b42e-d23dc20717c4";
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

import {XHeader,CellFormPreview,Cell,Group,Flexbox, FlexboxItem, DatetimeRange, Datetime,Search,ToastPlugin} from 'vux'
Vue.component('XHeader',XHeader)
Vue.component('CellFormPreview',CellFormPreview)
Vue.component('Cell',Cell)
Vue.component('Group',Group)
Vue.component('Flexbox',Flexbox)
Vue.component('FlexboxItem',FlexboxItem)
Vue.component('DatetimeRange',DatetimeRange)
Vue.component('Datetime',Datetime)
Vue.component('Search',Search)
Vue.use(ToastPlugin, {position: 'middle'})

FastClick.attach(document.body)

Vue.config.productionTip = false
import {store} from '../src/vuex.js'
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
