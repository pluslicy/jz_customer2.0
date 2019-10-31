import {post} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    products:[]
  },
  getters:{
    productCustomerFilter(state){
      return (categoryId)=>{
        return state.products.filter(item=>item.categoryId === categoryId)
      }
    }
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