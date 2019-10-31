<template>
  <briup-fulllayout title="地址列表">
    <div class="address" >
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
   
  }
}
</script>
<style scoped>
.address {
  background-color: #f1f1f1;
  padding-bottom: .2em;
}
</style>