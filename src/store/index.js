import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import order from './modules/order'

export default new Vuex.Store({
  modules:{
    user,
    order
  }
})
