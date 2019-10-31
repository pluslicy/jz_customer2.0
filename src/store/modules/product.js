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
      // 为每个产品添加一个number属性（购物后的维护）
      response.data.list.forEach(item=>{
        item.number = 0;
      })
      commit('refreshProducts',response.data.list);
    }
  }
}