<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    {{info}}
    <van-tabs v-model="active">
      <van-tab title="全部">
        <briup-order-item :data='{id:1,status:"ok"}'></briup-order-item>
      </van-tab>
      <van-tab title="待支付">内容 2</van-tab>
      <van-tab title="待服务">内容 3</van-tab>
      <van-tab title="待确认">内容 4</van-tab>
      <van-tab title="已完成">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  computed:{
    ...mapState('user',['info'])
  },
  created(){
    this.findAllOrders();
  },
  methods:{
    ...mapActions('order',['findAllOrders'])
  }
}
</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>