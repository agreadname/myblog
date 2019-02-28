<template>
  <div class="dc_iconfont">
    <el-input type="text" placeholder="输入英文关键字搜索，比如success" v-model="keyword"/>
    <el-row>
      <div class="icon_content">
        <icon-item v-for="(icon, index) in filteredList" :key="index" :icon-item="icon"/>
      </div>
    </el-row>
  </div>
</template>

<script>
import Iconfont from "./iconfont.js";
export default Iconfont;
</script>


<style scoped>
.dc_iconfont {
  margin-top: 20px;
  overflow: hidden;
}

.dc_iconfont .icon_content {
  margin-top: 20px;
  overflow-y: auto;
  max-height: 800px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.dc_iconfont .icon_content .icon-item {
  display: block;
  text-align: center;
  word-wrap: break-word;
  width: 120px;
  height: 150px;
  float: left;
}
.dc_iconfont .icon_content .icon-item .icon-img {
  height: 80px;
  width: 100%;
}
</style>
