import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

import './common.css'

// 自定义组件
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
Vue.component('briup-fulllayout',FullLayout)
Vue.component('briup-order-item',OrderItem)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
