import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import order from './modules/order'
import category from './modules/category'
import product from './modules/product'
import address from './modules/address'
import shopcar from './modules/shopcar'

export default new Vuex.Store({
  modules:{
    user,
    order,
    category,
    product,
    address,
    shopcar
  }
})
