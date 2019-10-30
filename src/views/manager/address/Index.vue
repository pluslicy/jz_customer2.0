<template>
  <briup-fulllayout>
    <div class="address">
      <van-nav-bar
        title="我的地址"
        left-text="返回"
        left-arrow
        @click-left="backHandler" />
      <div class="list">
        <briup-address-item v-for="address in addresses" :key="address.id" :data="address"></briup-address-item>
      </div>
    </div>
  </briup-fulllayout>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  created(){
    this.findAllAddresses();
  },
  computed:{
    ...mapState('address',['addresses'])
  },
  methods:{
    ...mapActions('address',['findAllAddresses']),
    backHandler(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.address {
  background-color: #f1f1f1;
  padding-bottom: .2em;
}
</style>