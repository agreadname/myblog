<template>
  <div class="icon-item">
    <div class="icon-img">
      <i :class="iconClass" style="fontSize:40px;"></i>
      <!-- <icon :name="iconItem.name" :prefix="iconItem.type" :size="40"/> -->
    </div>
    <div class="icon-text">{{iconItem.name}}</div>
  </div>
</template>

<script>
import Item from "./item.js";
export default Item;
</script>

<style scoped>
.dc_iconfont .icon_content .icon-item .icon-img {
  height: 60px;
  width: 100%;
}
</style>