import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import AddNotification from '@/view/AddNotification'
import SelectResponsibler from '@/view/SelectResponsibler'
import SelectSub from '@/view/SelectSub'

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
    },
    {
      path: '/SelectResponsibler',
      name:'SelectResponsibler',
      component:SelectResponsibler,
    },
    {
      path: '/SelectSub',
      name:'SelectSub',
      component:SelectSub,
    }
  ]
})
