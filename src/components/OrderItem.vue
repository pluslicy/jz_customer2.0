<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12">{{data.id}}</van-col>
      <van-col span="12" class="text-right">{{data.status}}</van-col>
    </van-row>
    <van-row>
      <van-col :span="6">
        <img src="../assets/service.png" alt="">
      </van-col>
      <van-col :span="16" :offset="2">
        <div>擦玻璃、打扫卫生、清洗空调、</div>
        <div>服务时间：2019-2-3</div>
      </van-col>
    </van-row>
    <div class="text-right">
      共计 个服务，合计￥ 20.3
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{type:Object}
  }
}
</script>
<style scoped>
.order_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
}


</style>