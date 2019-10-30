import {get} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    orders:[]
  },
  getters:{
    ordersStatusFilter(state){
      return (status)=>{
        return state.orders.filter(order=>order.status === status)
      }
    }
  },
  mutations: {
    refreshOrders(state,orders){
      state.orders = orders;
    }
  },
  actions: {
    // 查询当前用户的所有订单
    async findAllOrders({commit,rootState}){
      let customerId = rootState.user.info.id
      let response = await get('/order/query',{customerId});
      commit('refreshOrders',response.data)
    }
  }
}