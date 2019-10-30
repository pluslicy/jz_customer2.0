import {get} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    addresses:[]
  },
  getters:{
    
  },
  mutations: {
    refreshAddresses(state,addresses){
      state.addresses = addresses;
    }
  },
  actions: {
    // 查询当前用户的所有订单
    async findAllAddresses({commit,rootState}){
      let id = rootState.user.info.id
      let response = await get('/address/findByCustomerId',{id});
      commit('refreshAddresses',response.data)
    }
  }
}