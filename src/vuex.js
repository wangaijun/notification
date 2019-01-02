import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
      curObj: {
          userName:'卢瑟'
      },
      parts:[],
    },
    mutations: {
      setcurObj (state,data) {
        state.curObj = data
      },
      setparts(state,data){
          state.parts = data
      }
    }
  })