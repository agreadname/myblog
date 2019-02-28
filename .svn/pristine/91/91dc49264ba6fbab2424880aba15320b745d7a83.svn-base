# 组件

## 表格

:::tip 提示
底包已经将表格注册全局，直接调用即可。
有两种使用方法:

1. 需要接口, 实时更新的情况
   通过更新 page, pagesize, filter 一个或者多个属性, 表格发送请求, 显示相应的数据。
2. 拿到一个 list, 里面是表格的条目
   直接赋值即可
   :::

### 情况 1（有接口）

#### HTML

```vue
<el-button @click="search">搜索</el-button>
<DataTable
  class="dc-mail-Datatable mt20"
  :fetch="m_callback"
  key="messageTabel"
  :filter="filter"
  :page="page"
  :pagesize="pagesize"
>
  <DataTableColumn column="title" title="主题" :optional="true" key="title">
    <template slot-scope="scope">
      <div class="dc-mail-pointer" @click="handleContont(scope.row);">
        {{ scope.row.title }}
      </div>
    </template>
  </DataTableColumn>
  <DataTableColumn column="name" title="发布人" width="200"></DataTableColumn>
  <DataTableColumn
    column="date"
    title="日期"
    key="date"
    width="200"
  ></DataTableColumn>
  <DataTableColumn column="status" title="状态" width="120"></DataTableColumn>
</DataTable>
```

#### JS

```js

  import {m_callback} from "../api/api_callback.js"
  export default {
    data (){
        m_callback: m_callback,
        page: "1", // 当前显示第几页
        pagesize: "10", // 每页显示的条数
        filter: {
            // 筛选条件, 例如
            keyWord: "keyWord",
        }
    },
    creaded(){},
    methods:{
     //通过修改filter获取新的数据
      search(){
        this.filter={keyword:'666'}
      }
    },
    // 通过侦听器, 监听page和pagesize的值是否变化，引用时可不加
    //这步是用于优化，如果客户直接在浏览器的导航栏修改页数和页码大小可以响应并获取正确数据
    watch: {
      "$route.query.page": function(val) {
        this.page = val;
      },
      "$route.query.pagesize": function(val) {
        this.pagesize = val;
      }
    },
  }
```

#### m_callback(位于目录 src/api/api_callback.js)

```js
// params是发送请求的参数, 一般是page, pagesize和filter, 只要在组件上面正确注册了这三个属性就可以了
export function m_callback(params) {
  return $http({
    url: `/callback`,
    method: "get",
    params
  }).then(resp => {
    return Promise.resolve(resp.data);
  });
}
```

结果： ![运行结果](/table.png)

#### 属性 props

 <table>
        <tr>
            <td>属性名 </td>
            <td>类型</td>
            <td>默认值</td>
            <td>作用</td>
        </tr>
        <tr>
            <td>page</td>
            <td>String或者Number</td>
            <td>1</td>
            <td>当前显示第几页</td>
        </tr>
        <tr>
            <td>pagesize</td>
            <td>String或者Number</td>
            <td>10</td>
            <td>每页显示的条数</td>
        </tr>
        <tr>
            <td>filter</td>
            <td>Object</td>
            <td>{}, 空对象</td>
            <td>筛选条件, 键值对形式</td>
        </tr>
        <tr>
            <td>fetch</td>
            <td>Function</td>
            <td></td>
            <td>可以调用接口的函数, 返回的数据格式有要求, 例如<br>data: {<br>
                list: list, // list 是一个数组, 表示表格的内容<br>
                total: total, //  数字, 表示总条数<br>
            }</td>
        </tr>
    </table>

### 情况 2（mock 模拟数据）

```vue
<DataTable
  class="dc-mail-Datatable mt20"
  :list="tableList"
  key="messageTabel"
  :filter="filter"
  :page="page"
  :pagesize="pagesize"
  :total="total"
>
  <DataTableColumn column="title" title="主题" :optional="true" key="title">
    <template slot-scope="scope">
      <div class="dc-mail-pointer" @click="handleContont(scope.row);">
        {{ scope.row.title }}
      </div>
    </template>
  </DataTableColumn>
  <DataTableColumn column="name" title="发布人" width="200"></DataTableColumn>
  <DataTableColumn
    column="date"
    title="日期"
    key="date"
    width="200"
  ></DataTableColumn>
  <DataTableColumn column="status" title="状态" width="120"></DataTableColumn>
</DataTable>
```

#### JS

```js
  export default {
    data (){
        tableList: [
            {
                id: "111",
                name: "Jack"
            },
            {
                id: "222",
                name: "SLF"
            },
            {
                id: "333",
                name: "MARRY"
            }
        ],
        page: "1", // 当前显示第几页
        pagesize: "10", // 每页显示的条数
        filter: {
            // 筛选条件, 例如
            keyWord: "keyWord",
        },
        total: 233
    },
    creaded(){},
     // 通过侦听器watch, 监听page和pagesize的值是否变化，引用时可不加
    //这步是用于优化，如果客户直接在浏览器的导航栏修改页数和页码大小可以响应并获取正确数据
    watch: {
      "$route.query.page": function(val) {
        this.page = val;
      },
      "$route.query.pagesize": function(val) {
        this.pagesize = val;
      }
    },
  }
```

#### 属性 props

 <table>
        <tr>
            <td>属性名 </td>
            <td>类型</td>
            <td>默认值</td>
            <td>作用</td>
        </tr>
        <tr>
            <td>page</td>
            <td>String或者Number</td>
            <td>1</td>
            <td>当前显示第几页</td>
        </tr>
        <tr>
            <td>pagesize</td>
            <td>String或者Number</td>
            <td>10</td>
            <td>每页显示的条数</td>
        </tr>
        <tr>
            <td>total</td>
            <td>Number</td>
            <td></td>
            <td>总条数</td>
        </tr>
        <tr>
            <td>filter</td>
            <td>Object</td>
            <td>{}, 空对象</td>
            <td>筛选条件, 键值对形式</td>
        </tr>
        <tr>
            <td>list</td>
            <td>Array</td>
            <td></td>
            <td>表格的条目, 里面的元素是Object</td>
        </tr>
    </table>

### 补充, 如果需要使用复选的情况

其实现原理是将 elementUI table 的 selection-change 方法转换成父组件的 input 方法

使用的时候, 只需要关注 selection, 就是您选中的行即可

#### HTML

```vue
<DataTable
  class="dc-mail-Datatable mt20"
  :fetch="m_callback"
  key="messageTabel"
  :filter="filter"
  :page="page"
  :pagesize="pagesize"
  v-model="selection"
>
  <!-- 添加多选功能， 注意， 需要在table里面设置model -->
  <DataTableColumn type="selection" />
  <DataTableColumn column="title" title="主题" :optional="true" key="title">
    <template slot-scope="scope">
      <div class="dc-mail-pointer" @click="handleContont(scope.row);">
        {{ scope.row.title }}
      </div>
    </template>
  </DataTableColumn>
  <DataTableColumn column="name" title="发布人" width="200"></DataTableColumn>
  <DataTableColumn
    column="date"
    title="日期"
    key="date"
    width="200"
  ></DataTableColumn>
  <DataTableColumn column="status" title="状态" width="120"></DataTableColumn>
</DataTable>
```

#### JS

```js

  import {m_callback} from "../api/api_callback.js"
  export default {
    data (){
        m_callback: m_callback,
        page: "1", // 当前显示第几页
        pagesize: "10", // 每页显示的条数
        filter: {
            // 筛选条件, 例如
            keyWord: "keyWord",
        },

        selection: [], // 数据就是您选中的行
    },
    creaded(){},
    methods:{
     //通过修改filter获取新的数据
      search(){
        this.filter={keyword:'666'}
      }
    },
    // 通过侦听器, 监听page和pagesize的值是否变化，引用时可不加
    //这步是用于优化，如果客户直接在浏览器的导航栏修改页数和页码大小可以响应并获取正确数据
    watch: {
      "$route.query.page": function(val) {
        this.page = val;
      },
      "$route.query.pagesize": function(val) {
        this.pagesize = val;
      }
    },
  }
```

## 富文本

### 组件使用说明

#### 1.下载百度富文本官方资源文件,放与 public 目录下

::: warning 注意
文件夹名字改为 Uediter  
图片上传：单图片上传的 serverUrl 路径要为相对路径，列:serverUrl: "./图片上传接口"
:::

#### 2. 已全局注册直接引用：

```html
<QuillEditor v-model="msg" :config="myConfig" name="myEditor"></QuillEditor>
```

#### 3.v-model 绑定变量为文本内容

#### 4.config 为配置项，可直接修改 ueditor.config.js 文件，也可以直接在初始化时进行配置

#### 5.若需要上传文件功能，则需配置的 URL：serverUrl，若不需要，直接注释 ueditor.config.js 的 serverUrl，则控制台不会出现后台没有配置的错误

#### 6.配置细节可参考百度的配置项修改说明

http://fex.baidu.com/ueditor/#start-toolbar

```js
 config: {
           // 如果需要上传功能,找后端小伙伴要服务器接口地址
           // serverUrl: 'http://api.demo.com/ueditor/upload',
           // 编辑器不自动被内容撑高
           autoHeightEnabled: false,
           // 初始容器高度
           initialFrameHeight: 240,
           // 初始容器宽度
           initialFrameWidth: '80%',
           // 关闭自动保存
           enableAutoSave: false
       }
```

#### 7.对 windowUE 进行二次开发通过 init 传递函数

```js
 methods:{
       myinit(){
         //自定义按钮
            this.$refs.ueditor.registerButton({
                name:'test',
                icon:'./a.jpg',
                tip: '插入分割线',
                handler: (editor, name) => {
                        editor.execCommand('horizontal')
                }
            })
        }
   }
```

### 属性说明

| prop    |                          说明                          |        用法 |     类型 |
| ------- | :----------------------------------------------------: | ----------: | -------: |
| init    |   函数将在 scripts 加载完毕、editor 初始化之前运行。   |      第七点 | Function |
| destroy | 设置是否在组件的 beforeDestroy 钩子里销毁 UEditor 实例 |           / |  Boolean |
| name    |                          名字                          |           / |   String |
| config  |                  对 UEidtor 进行配置                   | 参考第 6 点 |   Object |

### 方法说明

  <table>
        <tr>
            <td>方法 </td>
            <td>说明</td>
            <td>参数</td>
        </tr>
        <tr>
            <td>1111111111</td>
            <td>22222222222222222</td>
            <td>1111111111</td>     
        </tr>
        <tr>
            <td>1111111111</td>
            <td>22222222222222222</td>
            <td>1111111111</td>
        </tr>
        <tr>
            <td>1111111111</td>
            <td>22222222222222222</td>
            <td>1111111111</td>
        </tr>
    </table>

## 表单

### 级联选择器

######

<container>
  <src-cascader/>
  
  <highlight-code slot="codeText" lang="vue">
    HTML代码
    <template>
      <div class="demo-button">
        <div>
         <div>
        <div class="block">
            <span class="demonstration">click 触发子菜单</span>
            <el-cascader :options="options" 
            v-model="selectedOptions"
             @change="handleChange">
            </el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">hover 触发子菜单</span>
            <el-cascader expand-trigger="hover"
             :options="options"
              v-model="selectedOptions2" @change="handleChange">
            </el-cascader>
        </div>
    </div>
        </div>
      </div>
    </template>
  </highlight-code>

  <highlight-code slot="jstext" lang="javascript">
   JS代码
    export default {
      data() {
        return {
          options: [
            {
              value: "zhinan",
              label: "指南",
              children: [
                {
                  value: "shejiyuanze",
                  label: "设计原则",
                  children: [
                    {
                      value: "yizhi",
                      label: "一致"
                    },
                    {
                      value: "fankui",
                      label: "反馈"
                    },
                    {
                      value: "xiaolv",
                      label: "效率"
                    },
                    {
                      value: "kekong",
                      label: "可控"
                    }
                  ]
                },
                {
                  value: "daohang",
                  label: "导航",
                  children: [
                    {
                      value: "cexiangdaohang",
                      label: "侧向导航"
                    },
                    {
                      value: "dingbudaohang",
                      label: "顶部导航"
                    }
                  ]
                }
              ]
            },
            {
              value: "zujian",
              label: "组件",
              children: [
                {
                  value: "basic",
                  label: "Basic",
                  children: [
                    {
                      value: "layout",
                      label: "Layout 布局"
                    },
                    {
                      value: "color",
                      label: "Color 色彩"
                    },
                    {
                      value: "typography",
                      label: "Typography 字体"
                    },
                    {
                      value: "icon",
                      label: "Icon 图标"
                    },
                    {
                      value: "button",
                      label: "Button 按钮"
                    }
                  ]
                },
                {
                  value: "form",
                  label: "Form",
                  children: [
                    {
                      value: "radio",
                      label: "Radio 单选框"
                    },
                    {
                      value: "checkbox",
                      label: "Checkbox 多选框"
                    },
                    {
                      value: "input",
                      label: "Input 输入框"
                    },
                    {
                      value: "input-number",
                      label: "InputNumber 计数器"
                    },
                    {
                      value: "select",
                      label: "Select 选择器"
                    },
                    {
                      value: "cascader",
                      label: "Cascader 级联选择器"
                    },
                    {
                      value: "switch",
                      label: "Switch 开关"
                    },
                    {
                      value: "slider",
                      label: "Slider 滑块"
                    },
                    {
                      value: "time-picker",
                      label: "TimePicker 时间选择器"
                    },
                    {
                      value: "date-picker",
                      label: "DatePicker 日期选择器"
                    },
                    {
                      value: "datetime-picker",
                      label: "DateTimePicker 日期时间选择器"
                    },
                    {
                      value: "upload",
                      label: "Upload 上传"
                    },
                    {
                      value: "rate",
                      label: "Rate 评分"
                    },
                    {
                      value: "form",
                      label: "Form 表单"
                    }
                  ]
                },
                {
                  value: "data",
                  label: "Data",
                  children: [
                    {
                      value: "table",
                      label: "Table 表格"
                    },
                    {
                      value: "tag",
                      label: "Tag 标签"
                    },
                    {
                      value: "progress",
                      label: "Progress 进度条"
                    },
                    {
                      value: "tree",
                      label: "Tree 树形控件"
                    },
                    {
                      value: "pagination",
                      label: "Pagination 分页"
                    },
                    {
                      value: "badge",
                      label: "Badge 标记"
                    }
                  ]
                },
                {
                  value: "notice",
                  label: "Notice",
                  children: [
                    {
                      value: "alert",
                      label: "Alert 警告"
                    },
                    {
                      value: "loading",
                      label: "Loading 加载"
                    },
                    {
                      value: "message",
                      label: "Message 消息提示"
                    },
                    {
                      value: "message-box",
                      label: "MessageBox 弹框"
                    },
                    {
                      value: "notification",
                      label: "Notification 通知"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "menu",
                      label: "NavMenu 导航菜单"
                    },
                    {
                      value: "tabs",
                      label: "Tabs 标签页"
                    },
                    {
                      value: "breadcrumb",
                      label: "Breadcrumb 面包屑"
                    },
                    {
                      value: "dropdown",
                      label: "Dropdown 下拉菜单"
                    },
                    {
                      value: "steps",
                      label: "Steps 步骤条"
                    }
                  ]
                },
                {
                  value: "others",
                  label: "Others",
                  children: [
                    {
                      value: "dialog",
                      label: "Dialog 对话框"
                    },
                    {
                      value: "tooltip",
                      label: "Tooltip 文字提示"
                    },
                    {
                      value: "popover",
                      label: "Popover 弹出框"
                    },
                    {
                      value: "card",
                      label: "Card 卡片"
                    },
                    {
                      value: "carousel",
                      label: "Carousel 走马灯"
                    },
                    {
                      value: "collapse",
                      label: "Collapse 折叠面板"
                    }
                  ]
                }
              ]
            },
            {
              value: "ziyuan",
              label: "资源",
              children: [
                {
                  value: "axure",
                  label: "Axure Components"
                },
                {
                  value: "sketch",
                  label: "Sketch Templates"
                },
                {
                  value: "jiaohu",
                  label: "组件交互文档"
                }
              ]
            }
          ],
          selectedOptions: [],
          selectedOptions2: []
        };
      },
      methods: {
        handleChange(value) {
          console.log(value);
        }
      }
    };

  </highlight-code>
  
</container>

### 树形选择器

- 待完成
  <div>
    <p style="color:#651781;font-weight:700;font-size:18px;border:1px solid #e3e3e3;padding:20px;border-radius:10px;">
      用html标签写的
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, necessitatibus amet! Quas sed sequi animi labore repellendus commodi minus quo, perspiciatis pariatur, tenetur tempore rerum. Labore quo assumenda itaque sunt.    
    </p>
  </div>

## 图标

:::tip
底包已经将图标注册全局，直接调用即可。查看图标名[图标库](http://demo.test.dc-it.cn/DCadmin/DCadmin_SPA/dist/index.html#/icon/)
:::

#### HTML

```vue
<Icon name="dc-icon-document" :size="28" color="#fff"></Icon>
```

#### 属性 props

  <table>
        <tr>
            <td>属性名</td>
            <td>类型</td>
            <td>默认值</td>
            <td>作用</td>
        </tr>
        <tr>
            <td>prefix</td>
            <td>String</td>
            <td>"iconfont"</td>
            <td>/</td>
        </tr>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>/</td>
            <td>图标名</td>
        </tr>
        <tr>
            <td>size</td>
            <td>Number</td>
            <td>14</td>
            <td>修改图标的大小</td>
        </tr>
        <tr>
            <td>color</td>
            <td>String</td>
            <td>继承</td>
            <td>修改图标的颜色</td>
        </tr>
    </table>

### 图标库

  <iconfont-iconfont/>
  
## 拼图验证
#### HTML

```vue
<VerifyChip
  @onsuccess="log"
  @onfail="log"
  @onrefresh="log"
  url="./images/"
  :imgName="['2.jpg', '3.jpg', 'yz.jpg']"
></VerifyChip>
```

```js
  methods: {
    log(n) {
      console.log(n);
    }
  }
```

#### 属性 props

  <table>
        <tr>
            <td>属性名</td>
            <td>类型</td>
            <td>默认值</td>
            <td>作用</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>//picsum.photos/300/150/?image=</td>
            <td>图片地址</td>
        </tr>
        <tr>
            <td>imgName </td>
            <td>Array</td>
            <td>/</td>
            <td>图片名字</td>
        </tr>
    </table>
    
#### 事件 event

  <table>
        <tr>
            <td>事件名</td>
            <td>作用</td>
        </tr>
        <tr>
            <td>onsuccess</td>           
            <td>拼图成功后的回调事件</td>
        </tr>
        <tr>
            <td>onrefresh</td>           
            <td>刷新的回调事件</td>
        </tr>
        <tr>
            <td>onfail</td>           
            <td>拼图失败后的回调事件</td>
        </tr>
    </table>
    
#### 演示     
    
   <verifychip-index/>
