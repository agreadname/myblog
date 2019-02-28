<template>
  <div class="wrapper" :ref="canvasKey" width="300px" height="200px"></div>
</template>

<script>
/**
 * url为图片路径，imgName为图片名称，类型为数组，
 * onsuccess为成功回调事件
 * onrefresh为刷新回调事件
 * onfail为失败回调事件
 */
import { canvas } from "./constructor.js";
export default {
  data() {
    return {
      canvasKey: "CANVAS" + parseInt(Math.random() * 100000)
    };
  },
  created() {},
  mounted() {
    this.initCanvas();
  },
  props: {
    url: { type: String, default: "//picsum.photos/300/150/?image=" },
    imgName: {
      type: Array
    }
  },
  methods: {
    //初始化
    initCanvas() {
      let _this = this;
      let _url =
        this.url == "//picsum.photos/300/150/?image="
          ? this.url + this.getRandomNumberByRange(0, 300)
          : this.url +
            this.imgName[
              this.getRandomNumberByRange(0, this.imgName.length - 1)
            ];
      canvas.init({
        el: this.$refs[this.canvasKey],
        onSuccess: _this.result(0),
        onFail: _this.result(1),
        onRefresh: _this.result(2),
        url: _url
      });
    },
    //触发回调
    result(_a) {
      let _this = this;
      return function() {
        let text = !_a ? "成功" : _a == 2 ? "刷新" : "失败";
        _this.$message("这是" + text + "回调事件");
        !_a
          ? _this.$emit("onsuccess", "成功回调事件")
          : _a == 2
          ? _this.$emit("onrefresh", "刷新回调事件")
          : _this.$emit("onfail", "失败回调事件");
      };
    },
    getRandomNumberByRange(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    }
  }
};
</script>
