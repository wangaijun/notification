import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
      curObj: {
          userName:'卢瑟'
      }
    },
    mutations: {
      setcurObj (state,data) {
        state.curObj = data
      }
    }
  })