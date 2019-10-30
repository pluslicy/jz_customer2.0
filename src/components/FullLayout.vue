<template>
  <div class="full_layout">
    <slot/>
  </div>
</template>
<style scoped>
.full_layout {
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
}
</style>