<template>
  <div class="user">
    我的
    <div>{{info.name}}</div>
    <p>
      <a href="" @click.prevent="logoutHandler">退出</a>
    </p>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  methods:{
    ...mapActions('user',['logout']),
    logoutHandler(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{
    ...mapState("user",["info"])
  }
}
</script>