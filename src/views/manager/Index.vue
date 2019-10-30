<template>
  <!-- 后台管理总页面 -->
  <div class="manager">
    <!-- 用于接受管理页面，首页，订单页，我的页面 -->
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/manager/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/manager/order">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/manager/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  created(){
    if(this.token){
      // 查询info
      this.getInfo(this.token);
    } else {
      this.$toast("token失效")
      // 跳转到登录
      this.$router.push({path:'/login'})
    }
  },
  computed:{
    ...mapState('user',['token','info'])
  },
  methods:{
    ...mapActions('user',{
      'getInfo':'info'
    })
  }
}
</script>