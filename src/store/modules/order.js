import {get} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    orders:[]
  },
  mutations: {
    refreshOrders(state,orders){
      state.orders = orders;
    }
  },
  actions: {
    // 查询当前用户的所有订单
    async findAllOrders({rootState}){
      console.log('order');
      console.log(JSON.stringify(rootState.user.info));
      let response = await get('/order/query',{customer:26});
    }
  }
}