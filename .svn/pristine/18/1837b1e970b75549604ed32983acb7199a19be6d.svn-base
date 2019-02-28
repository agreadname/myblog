## 项目说明

### 快速上手

1. 项目运行

```js
//下载依赖包
npm install
//启动项目
npm run dev
//打包文件
npm run build

```

#### 目录结构介绍

```
├─gulp //环境配置
└─src
    ├─images //图片资源
    │
    ├─js
    │  ├─api //公共接口
    │  ├─app //业务代码
    │  ├─components //公共组件
    │  └─core //核心
    │      ├─frame //主框架库
    │      ├─library //其他框架库
    │      ├─request //接口核心
    │      └─utils //工具库
    │
    └─style
       ├─fonts //字体库
       └─less //页面样式
```

#### 项目集成

**js 库**

[vue-2.5.17](https://cn.vuejs.org/)

`jquery-3.3.1 -swiper-4.3.5 swiper.animate-1.0.3 echarts-4.2.0 jquery.ztree-3.5.37 ckplayer-X1 css 库 animate-2015 字体库 iconfont-dc`

## 项目使用

1. 环境配置 Gulp config.js 文件

```
// 项目基本配置
module.exports = {
    server: {
        port: 520, //项目端口
        proxypath: '/api', //接口路径
        proxytarget: 'http://vue.test.dc-it.cn' //接口地址
    },
    shiftes5: true, //是否开启js转换成ES5语法
    compress: false //是否开启js、css压缩。开发时不建议开启压缩，正式上线一定要开启压缩
}
```

2. 界面 html 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>标题</title>
    <meta name="description" content="描述" />
    <meta name="keywords" content="关键字" />
    <link rel="stylesheet" href="css/library.min.css" />
    <link rel="stylesheet" href="css/basic.css" />
  </head>
  <body>
    <!-- 编写html代码 -->

    <script src="js/library.min.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/common.js"></script>
    <script src="js/index.js"></script>
  </body>
</html>
```

3. 业务代码 js 文件

```
/ 编写业务代码
(function(Vue, global) {

new Vue({
  el: '#index',
  data: {

  },
  created() {

  },
  methods: {

  },
  filters: {

  }
})


})(Vue, window)
```

4. 公共接口 js 文件

```js
// 编写接口
function get_banner(params) {
  return $http({
    url: "/index/banner",
    method: "get",
    params
  }).then(res => {
    return Promise.resolve(res);
  });
}
```

5. less 样式文件

```js
// 编写样式
.index-banner{
  width: 100%;
  height: 360px;
  img{
    width: 100%;
  }
}
```
