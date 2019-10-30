import {get} from '../../http/axios'

export default {
  namespaced:true,
  state: {
    categories:[]
  },
  mutations: {
    refreshCategories(state,categories){
      state.categories = categories;
    }
  },
  actions: {
    async findAllCategories({commit}){
      let response = await get('/category/findAll');
      commit('refreshCategories',response.data)
    }
  }
}