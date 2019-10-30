import {post} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    products:[]
  },
  mutations: {
    refreshProducts(state,products){
      state.products = products;
    }
  },
  actions: {
    async queryProduct({commit},payload){
      let response = await post('/product/query',payload)
      commit('refreshProducts',response.data.list);
    }
  }
}