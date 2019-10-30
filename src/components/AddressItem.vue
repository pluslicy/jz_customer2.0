<template>
  <div class="address_item">
    <van-row>
      <van-col :span="3">
        <div class="xing">
          张
        </div>
      </van-col>
      <van-col :span="18">
        <div>
          {{data.customerId}}&nbsp; {{data.telephone}}
        </div>
        <div>
          {{data.province}} {{data.city}} {{data.area}} {{data.address}}
        </div>
      </van-col>
      <van-col :span="3" class="option">
        <van-icon name="edit" /> &nbsp;
        <van-icon name="delete" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:['data']
}
</script>
<style scoped>
.address_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.address_item .xing {
  width:3em;
  height: 3em;
  border-radius: 50%;
  background-color: pink;
  text-align: center;
  line-height: 3em;
  color: #ffffff
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
</style>