<template>
  <div class="home">
    首页
    {{info}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState("user",["info"])
  }
}
</script>