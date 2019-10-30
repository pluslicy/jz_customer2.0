<template>
  <briup-fulllayout>
    <div class="address">
      <van-nav-bar
        title="我的地址"
        left-text="返回"
        left-arrow
        @click-left="backHandler" />
    </div>
  </briup-fulllayout>
</template>
<script>
export default {
  methods:{
    backHandler(){
      this.$router.go(-1)
    }
  }
}
</script>