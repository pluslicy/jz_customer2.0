<template>
  <!-- 后台管理总页面 -->
  <div class="manager">
    <!-- 用于接受管理页面，首页，订单页，我的页面 -->
    <router-view></router-view>
    info:{{info}}
    token: {{token}}
    <div>
      <router-link to="/manager/home">首页</router-link>
      <router-link to="/manager/order">订单</router-link>
      <router-link to="/manager/user">我的</router-link>
    </div>
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