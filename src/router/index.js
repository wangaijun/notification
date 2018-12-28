import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import AddNotification from '@/view/AddNotification'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/AddNotification',
      name:'AddNotification',
      component:AddNotification,
    }
  ]
})
