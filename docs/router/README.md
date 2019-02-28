## 快速配置

- 这个路由的注册方式基本没有改变过，就增加了一个非菜单路由的注册

#### 1. src 文件夹的 router/basic.js

- 注册基础路由,不用控制权限的路由都在这里注册，如登陆,注册，公共页面等等界面，这个是正常的路由注册文件

```js
{
    path: '/login',
    name: 'login',
    component: () => import ('@layout/login'),
    children: [],

  }
```

- 这里是控制权限的路由配置，颗粒度到某个按钮

#### 2.src 文件夹的 router/dynamic.js

**权限路由是动态加载的**

::: tip 只有一级菜单的路由注册

1. id 为后端发送的菜单字符串进行匹配的关键词
2. data 是正常的路由注册内容
3. redirect 必须写上，统一重定向到完整路径 `/home/index`
4. children 路径统一为 index

:::

```js

   {
    id: 1,
    data: [{
      path: '/town',
      name: 'town',
      component: Layout,//这个默认不变的主界面组件（头部，侧边栏等）
      redirect: to => {
        return "/town/index"
      },
      children: [{
        path: 'index',
        name: 'town_index',//
        component: Town,//对应中间区域的组件
        children: []
      }]
    }]
  },
```

::: tip 有二级菜单的路由注册

1. id 为后端发送的菜单字符串进行匹配的关键词
2. data 是正常的路由注册内容
3. redirect 必须写上，统一重定向到完整路径 `/form/form1`
4. 父子路由分开写，不要嵌套到`children`里面，这个很重要，这个文件是要和后端给的菜单字符串进行对比合并成真正的路由，不要写成**树形结构**，要写成**链式结构**

:::

```js
//父组件注册
{id: 2, data: [{
  path: '/form', name: 'form',component: Layout,
  redirect: to => {return "/form/form1"},//重定位要写上，可以重定位到第一个也可以第二个
  children: []}]//这里的不写
},
//form的两个子路由
{id: 3, data: [{path: 'form1',name: 'form1',component: Form1, children: []}]},
{id: 4,data: [{path: 'form2',name: 'form2',component: Form2,children: []}]},
```

#### 3.src 文件夹的 router/nomenu.js

_（例子可以看底包侧边栏的表格=》【to other URL】 ）_
::: tip 受到权限限制的非菜单栏路由

1. `fid`为相应的菜单栏的 id 比如菜单栏的表格 id 为 9，对应的 fid 为 9
2. `meta` 元信息写上`title`，即 tag 标签要显示的文字
3. 注意路径不用`\`

:::

```js
  {
    fid:9,
    data:[
      {
        path: "other",//要注意不用/
        name: "other",
        component: () => import('@/views/other'),
        meta:{'title':'其他'},//很重要
        children:[]
      }
    ]},
```

## Mock-菜单权限字符串

#### 导航权限路由 src 文件夹的 mock/login.js 文件

::: warning 需配置
用 mock 直接模拟获取权限菜单，有后端数据时直接修改请求地址即可，导航权限数据格式如下:
记得是个 json 字符串
:::

```js
/*json模拟后端传递数据,后端传json标题来控制权限,决定菜单栏显示内容的地方*/
const json = `[
    {//一级
        "id": 1,
        "title": "首页",
        "child": [],
        "icon": "dc-icon-iospaperoutline"
    },
    {//有二级的
        "id": 2,
        "title": "表单",
        "icon": "dc-icon-iosbolt",
        "child": [
            {
                "id": 3,
                "title": "表单组件一",
                "icon": "dc-icon-androidexi",
                "child": []
            },
            {
                "id": 4,
                "title": "表单组件二",
                "icon": "dc-icon-database",
                "child": []
            }
        ]
    }
]`;
```

> 到了这里，基本就可以正常使用了，下面是路由相关底层文件的说明，不看不影响使用

## 补充说明

#### 1.src 文件夹的 library/router/dyroute.js

::: tip 基本不用改变
动态添加路由封装函数在这个文件，基本不用改变，可不看，需要动态添加路由的地方，引起这个文件，导出 addDynamic 函数
:::

1. 作用

- 将后端给的菜单字符串和本地注册的路由表进行合并形成真正的路由表

2. 思路

- 将后端给的[菜单字符串](#mock-菜单权限字符串)存于 sessionstorage,key 值为`Getjson`
- addDynamic 函数将获取的菜单字符串用双层循环进行遍历匹配 id，如果 id 相同则将路由信息 push 进路由变量`routerString`和菜单栏变量`nav`
- 用 route 动态添加路由的 api 将处理好的`routerString` push 进去
- 用 export 抛出一个 promise 对象，解决异步问题，等路由加载完毕再执行路由跳转或者其他业务逻辑

```js
//路由加载完毕，目前这个函数在login.js和main.js这两个地方使用
addDynamic(json).then(() => {
  //业务代码
  this.$message.success("登录成功!");
  this.$router.replace({
    path: "/home/index"
  });
});
```

3. 用法

   - 在需要动态加载权限路由的地方`import {addDynamic} from "@/library/router/dyroute.js";`
   - 在 sessionStorage 或者请求获取菜单字符串 json,`addDynamic(json).then(()=>{//业务代码})`

   _后期改成 addDynamic 递归写法，包括左侧菜单栏，上次测试过 element 的菜单栏用递归写法，收缩时有 bug，在 GitHub 提了 issue，看他们是否解决了_

#### 2.src 文件夹的 library/router/index.js

##### 作用

1. 注册基础路由
2. 添加路由守卫

- 判断是否未登陆页，是则清除缓存，否则进入下一判断
- 判断是否登陆`isLogin` 未登陆，重定位到登录页，并清除缓存
- 已登陆：判断是否为未注册路由，是则重定位到 404 页面，否则
- 判断是否为首页，是则直接进入页面，否则
- 处理 Tag 和面包屑，判断是否已经存在当前路由的`Tag`，已经存在则修改面包屑并进入页面
- 否则添加`Tag`,修改面包屑并进入页面
  _在合并路由过程中，meta 元信息已经将二级路由的上级路由信息存入字段 father 中，为了解决面包屑问题_
