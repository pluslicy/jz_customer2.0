<template>
  <div class="home">
    <header class="header">
      <img src="../../assets/home.png" alt="">
    </header>
    <!-- 栏目信息 -->
    <van-grid :column-num="3">
      <van-grid-item
        @click="toProductListHandler(c.id,index)"
        v-for="(c,index) in categories"
        :key="c.id"
        :icon="c.icon"
        :text="c.name"/>
    </van-grid>
    <!-- 产品信息 -->
    <van-grid :column-num="2">
      <van-grid-item
        v-for="p in products"
        :key="p.id">
        <van-image :src="p.photo" />
        <div>{{p.name}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState("user",["info"]),
    ...mapState("category",["categories"]),
    ...mapState("product",["products"]),
  },
  created(){
    this.findAllCategories();
    this.queryProduct({page:0,pageSize:4});
  },
  methods:{
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['queryProduct']),
    // 跳转到产品列表页面
    toProductListHandler(id,activeKey){
      this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
    }
  }
}
</script>
<style scoped>
.home {
  padding-bottom: 50px;
}
.header {
  height: 200px;
  overflow: hidden;
}
.header img {
  width: 100%;
}
</style>