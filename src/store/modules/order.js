import {get,post_obj_array} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    orders:[]
  },
  getters:{
    // 根据订单状态进行过滤
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
    // 保存订单信息
    async saveOrder({commit,rootState}){
      // 1. 组合数据
      let data = {
        customerId:rootState.user.info.id,
        addressId:rootState.address.addresses[0].id,
        orderLines:Array.from(rootState.shopcar.orderLines.values())
      }
      // 2. 调用后台接口完成保存
      let response = await post_obj_array('/order/save',data)
      // 3. 清空购物车（order -> shopcar）
      commit('shopcar/clearShopCar',null,{root:true})

      return response;
    },
    // 查询当前用户的所有订单
    async findAllOrders({commit,rootState}){
      let customerId = rootState.user.info.id
      let response = await get('/order/query',{customerId});
      commit('refreshOrders',response.data)
    }
  }
}