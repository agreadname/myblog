# 通用规范
## 命名规范
 #### 1.尽量以有意义的单词词组命名，避免拼音命名，单词小写，多单词用下划线分隔
 #### 2.项目名：同（1），以dc开头，下划线加项目英文名称, 如dc_bulesky

 #### 3.目录名：src根目录基本不变，pages内各组件目录名同（1）
 #### 4.js文件命名：同（1），以功能模块命名，如， 组件example=》example.js
 #### 5.样式文件命名：同（1）和（4）， 如，组件example=》example.scss
::: tip 注意
 (1)  公共基础样式，只能*覆盖*、不能直接修改；

 (2)  主框架的样式文件，以DC_ 为开头，以做区分及避免冲突；
 
 (3)  需要通过全局更改主框架的样式文件时建议用样式穿透，如 dc_main /deep/ .el-select{//.....} 
:::
## 语法规范
 #### 1.HTML
 <table>
    <tr>
        <td>在属性上，使用双引号，不要使用单引号</td>
    </tr>
     <tr>
        <td>不要在自动闭合标签结尾处使用斜线</td>
    </tr>
     <tr>
        <td>网站首页及其子页面，都需要加上description标签和keyword标签。</td>
    </tr>
</table>

 #### 2.Javascript代码
 <table>
    <tr>
        <td>一条js语句独占一行，且必须以“;”标识语句结束，如：a=0;</td>
    </tr>
     <tr>
        <td>变量名、方法名小驼峰，常量大写所有单词，专有名词除外；</td>
    </tr>
     <tr>
        <td>命名要体现变量、函数的功能</td>
    </tr>
</table>

#### 3.css代码
一.常用的CSS命名参考（仅为参考，注意类名的语义性和加上注释即可）

1)	页面结构：  
a.	容器： container
b.	页头：header
c.	内容：content/container
d.	页面主体：main
e.	页尾：footer
f.	导航：nav
g.	侧栏：sidebar
h.	栏目：column
i.	页面外围控制整体布局宽度：wrapper
j.	左右中：left right center
2)	导航：  
a.	导航：nav
b.	主导航：mainnav
c.	子导航：subnav
d.	顶导航：topnav
e.	边导航：sidebar
f.	左导航：leftsidebar
g.	右导航：rightsidebar
h.	菜单：menu
i.	子菜单：submenu
j.	标题：title
k.	摘要：summary
3)	功能：  
a.	标志：logo
b.	广告：banner
c.	登陆：login
d.	搜索：search
e.	功能区：shop
f.	标题：title
g.	状态：status
h.	按钮：btn
i.	滚动：scroll
j.	标签页：tab
k.	文章列表：list
l.	提示信息：msg
m.	当前的：current
n.	小技巧：tips
o.	图标：icon

二 css命名方法  
   >dc-组件名-语义名，如dc-login-header  
   >dc-组件名-语义名-状态,如dc-login-button-active

## 组件规范
例，组件exam1  
1.vue文件:
```vue
    <template>
        <div>
            <p class="red">模板</p> 
        </div>     
    </template>
    <script>
        import Exam1 from './index.js';
        export default Exam1;
    </script>
    <style lang="scss" scoped>
        @import  "./index.scss"
    </style>
```
2.js文件
```js
 import {GetData} from '@/api/exam1.js'
 export default {
  data() {
    return {
      msg: '课程资源'
    }
  },
  created(){
  }
}
```
3.scss文件  
规范同语法规范的 [css代码](#语法规范)