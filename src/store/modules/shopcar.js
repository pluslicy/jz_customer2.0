import _ from 'lodash'
export default {
  namespaced:true,
  state:{
    // [productId->{productId,productName,price,number}]
    orderLines:new Map()
  },
  getters:{
    // 计算出购物车的总额
    total(state){
      let result = 0;
      for(let orderLine of state.orderLines.values()){
        result += orderLine.price * orderLine.number;
      }
      return result;
    }
  },
  mutations:{
    // 添加购物车 {productId,productName,price,number}
    addShopCar(state,orderLine){
      state.orderLines.set(orderLine.productId,orderLine);
      // 克隆对象，改变引用地址，目的是为了让监听机制监听到orderLines的改变
      state.orderLines = _.clone(state.orderLines);
    },
    // 清空购物后
    clearShopCar(state){
      state.orderLines.clear();
      state.orderLines = _.clone(state.orderLines);
    }
  }
}