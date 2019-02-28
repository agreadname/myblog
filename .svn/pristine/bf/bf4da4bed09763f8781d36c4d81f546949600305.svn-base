# 接口设计规范

## JSON Web Token

- 通过 JWT（JSON Web Token）进行身份验证 JWT 是个很长的字符串，中间用 `.`分割成三个部分为： Header.Payload.Signature。加密前信息如下（_后端完成_）：
- 如果使用 JWT(JSON Web Token)进行鉴权操作，需要定义好前后端加密方式，拟采用 RSA 非对称加密。

```js
 header:{
  type: token类型,
  algorithm: 加密的算法，对称加密
 }
 payload:{
  token唯一标识、用户的基本信息等，key:value 形式
 }
 signature: 通过header与payload，使用一个密钥，根据一定算法生成签名信息。
```

加密后

```
 sfajalgosodfIJBFo23r34JOGJI23dfsg.jioIEojgOIDKs456fLFFfsdfdFFOdfs5d47164fsdf1654IDFJODF.FAfs254dfdsfDJdf253FOdfsAS34531DIGJIOMVODHGAOFJ
```

:::tip 后端
携带 token 的请求，后端首先验证 token 的有效性（准确性、是否已过期），验证 token 有效后再进行请求处理。若 token 已过期或需刷新，则生成新的 token，与相应数据一起返回前端。
:::
:::tip 前端
前端获取到 token，将其保存至本地（localStorage 或 sessionStorage），每次请求将 token 注入 Header 的 Authorizationziduan 中
:::

## session

- 前端要将 withCredentials 设为 true

```js
const service = axios.create({
  withCredentials: true
});
```

- 后端:Access-Control-Allow-Credentials 设为 true 的话，Access-Control-Allow-Origin 就不能设为\*了，只好改成具体的域了，这样就可以多次请求取到的 sessionid 就一致了。

```java
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
       httpResponse.setHeader("Access-Control-Allow-Origin", "http://192.168.199.240:8081");
       httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
```

## 请求格式

 <table>
      <tr>
          <td>请求信息</td>
          <td>说明</td>
      </tr>
      <tr>
          <td>url</td>
          <td>前端向后端请求的资源路径，restful风格</td>
      </tr>
      <tr>
          <td>method</td>
          <td>请求的方式，如post、get、put、delete等</td>
      </tr>
      <tr>
          <td>params</td>
          <td>请求时附带的参数</td>
      </tr>
  </table>

其中，除部分不需认证访问的公用接口外，其他请求的 Header 中 Authorizationziduan 字段为用户的 token，该字段表示用户登陆的检验字段，证明该次请求的发起者是已登陆的用户。  
`例：http[s]://[host:port]/[api]/[userlist]?[key=value]`
:::tip 示例

```js
export function api_callback(params) {
  return $http({
    url: `/callback`,
    method: "get",
    params
  }).then(resp => {
    return Promise.resolve(resp.data);
  });
}

export function fetchReportlist(params) {
  return $http({
    url: "/officer_reportlist",
    method: "post",
    data: params
  });
}
```

:::

## 响应格式

具体看[响应码表](/httpcode/)

<table>
      <tr>
          <td>响应字段/属性</td>
          <td>说明</td>
      </tr>
      <tr>
          <td>code</td>
          <td>业务响应状态码，表示业务处理的正常或异常状态，http状态码900  </td>
      </tr>
      <tr>
          <td>data</td>
          <td>实际响应的业务数据</td>
      </tr>
      <tr>
          <td>msg</td>
          <td>服务端处理当次请求的结果提示文字</td>
      </tr>
  </table>

- 返回标准的 json 字符串。  
  如未带 token 请求或 token 认证失败，返回错误响应：  
  `{”code”:”0”,”msg”:”token认证失败/不存在该token/用户未登录”,data: ’null/_’}`

# 通用请求类型

## 表格数据结构（列表数据结构）

#### 1.列表类型的请求

<table>
        <tr>
            <td>名称</td>
            <td colspan="3">列表信箱</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">资源定位路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">get</td>
        </tr>
        <tr>
            <td rowspan="4">params</td>
            <td>limit</td>
            <td colspan="2">分页大小</td>
        </tr>
        <tr>
            <td>page</td>
            <td colspan="2">当前页码</td>
        </tr>
        <tr>
            <td>keyword</td>
            <td colspan="2">关键字搜索，由业务需求确定后端查询规则</td>
        </tr>
         <tr>
            <td>其他搜索字段名</td>
            <td colspan="2">查询的条件值，key=value形式</td>
        </tr>
        <tr>
            <td rowspan="8">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="6">data</td>
            <td colspan="2">
              请求成功时返回的数据，包含内容如下
            </td>
        </tr>
         <tr>
            <td>total</td>
            <td>总记录数</td>
        </tr>
        <tr>
            <td>list</td>
            <td>数组类型，实际查询结果，必须带id值</td>
        </tr>
    </table>

#### 发送请求

```js
params = {
  limit: 45,
  page: 5,
  keyword: "dddd"
};
export function api_callback(params) {
  return $http({
    url: `/callback`,
    method: "get",
    params
  });
}
```

#### 响应信息

```js
//这个已经封装
  res{
      code:'200',
      msg:"成功",
      data:{
     list:{'name':'admin','password':'123456'},//表格数据
     pages:124, //总页数
     total:1234,//总记录数
     colums:[],//列名
     options:{},//列操作按钮集合
    }
  }

```

## 实体信息的请求

 <table>
        <tr>
            <td>名称</td>
            <td colspan="3">实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">资源定位路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">get</td>
        </tr>
        <tr>
            <td>params</td>
            <td>id</td>
            <td colspan="2">实体id值对应的记录</td>
        </tr>
        <tr>
            <td rowspan="4">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="2">data</td>
            <td colspan="2">
              请求成功时返回的数据，包含内容如下
            </td>
        </tr>
         <tr>
            <td>实体属性名</td>
            <td>属性名对应的数据值，具体属性根据需求确定，必须包含id值</td>
        </tr>
    </table>

## 新增、修改实体请求

 <table>
        <tr>
            <td>名称</td>
            <td colspan="3">新增/修改**实体</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">新增post，修改post</td>
        </tr>
        <tr>
            <td rowspan="2">params</td>
            <td>id</td>
            <td colspan="2">实体id值对应的记录</td>
        </tr>
        <tr>
            <td >实体字段名</td>
            <td>字段值，依业务需求确定字段</td>
        </tr>
         <tr>
           <td rowspan="3">响应信息</td>
            <td>code</td>
            <td>业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="2">data</td>
            <td colspan="2">
              根据需求返回响应数据
            </td>
        </tr>
    </table>

## 删除\*\*信息请求

 <table>
        <tr>
            <td>名称</td>
            <td colspan="3">删除**信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">delete</td>
        </tr>
        <tr>
            <td>params</td>
            <td>id</td>
            <td colspan="2">实体id值对应的记录，若批量删除，id为数组，其他批量操作类似</td>
        </tr>
         <tr>
           <td rowspan="3">响应信息</td>
            <td>code</td>
            <td>业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="2">data</td>
            <td colspan="2">
              根据需求返回响应数据
            </td>
        </tr>
    </table>
    
## 图表类型数据请求

 <table>
        <tr>
            <td>名称</td>
            <td colspan="3">**图表数据</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">get</td>
        </tr>
        <tr>
            <td>params</td>
            <td>id</td>
            <td colspan="2">图标数据唯一标识</td>
        </tr>
         <tr>
           <td rowspan="4">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="2">data</td>
            <td colspan="2">
             请求成功时返回的数据，包含内容如下
            </td>
        </tr>
         <tr>
           <td>[data]</td>
            <td>
              根据echart插件格式返回具体数据
            </td>
        </tr>
    </table>
    
## 数据字典信息获取

- （返回常规的列表数据）

<table>
        <tr>
            <td>名称</td>
            <td colspan="3">数据字典信息</td>
        </tr>
        <tr>
            <td>描述</td>
            <td colspan="3">作用于下拉框、单选框、复选框等前端UI组件中，统一管理数据源（数据库、JSON、文件等）</td>
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">get</td>
        </tr>
        <tr>
            <td>params</td>
            <td>kind/type</td>
            <td colspan="2">唯一确定字典组标识，必选参数，参数名待定</td>
        </tr>
        <tr>
            <td rowspan="8">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="6">data</td>
            <td colspan="2">
                请求成功时返回的数据，包含内容如下
            </td>
        </tr>
        <tr>
            <td>kind/type</td>
            <td>
                字典类型标识
            </td>
        </tr>
        <tr rowspan="4">
            <td>items</td>
            <td>具体细项，必须包含字段（原来的规范文档写的）</td>
        </tr>
        <tr>
            <td>value</td>
            <td>
                字典实际值
            </td>
        </tr>
        <tr>
            <td>text</td>
            <td>
                向用户显示的内容
            </td>
        </tr>
        <tr>
            <td>disable</td>
            <td>
                若禁用了该选项，则此属性值为true，否则可忽略
            </td>
        </tr>
    </table>
    
## 发送短信验证码

 <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>send_msg</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr>
            <td>params</td>
            <td>mobile（手机号码）</td>
        </tr>
    </table>
   
## 验证短信验证码

 <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>check_msg</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr >
            <td rowspan="2">params</td>
            <td>mobile（手机号码）</td>
        </tr>
        <tr>
        <td>msg_code（短信验证码）</td>
        </tr>
    </table>
    
 ## 获取图片验证码
 <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>get_aptcha</td>
        </tr>
        <tr>
            <td>method</td>
            <td>get</td>
        </tr>
        <tr >
            <td>params</td>
            <td>id（验证码辅助id）</td>
        </tr>        
    </table>  
    
 ## 验证图片验证码

 <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>check_aptcha</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr >
            <td rowspan="2">params</td>
            <td>id（验证码辅助id）</td>
        </tr>
        <tr>
        <td>verify(图片验证码)</td>
        </tr>
    </table>

::: tip
文件上传—秒传处理、检测分片是否已上传、上传分片、合并分片（一次性合并）
:::

## 秒传处理

<table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>checkFile</td>
        </tr>
        <tr>
            <td>method</td>
            <td>Post</td>
        </tr>
        <tr >
            <td>params</td>
            <td>md5（文件md5）</td>
        </tr>        
    </table>  
    
## 检测分片是否已上传

 <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>checkChunk</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr >
            <td rowspan="4">params</td>
            <td>md5（文件md5）</td>
        </tr>
        <tr>
        <td>ext(文件后缀)</td>
        </tr>
         <tr>
        <td>chunk(当前分片)</td>
        </tr>
        <tr>
        <td>chunkSize（分片大小）</td>
        </tr>
    </table>
    
## 上传分片
  
   <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>upOne</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr >
            <td rowspan="5">params</td>
            <td>md5（文件md5）</td>
        </tr>
        <tr>
        <td>ext(文件后缀)</td>
        </tr>
         <tr>
        <td>chunk(当前分片)</td>
        </tr>
        <tr>
        <td>chunks（总分片数量）</td>
        </tr>
        <tr>
        <td>file(文件对象)</td>
        </tr>
    </table>
        
 ## 合并分片
  
   <table>
        <tr>
            <td>名称</td>
            <td>实体信息</td>       
        </tr>
        <tr>
            <td>url</td>
            <td>mergeChunks</td>
        </tr>
        <tr>
            <td>method</td>
            <td>post</td>
        </tr>
        <tr >
            <td rowspan="5">params</td>
            <td>md5（文件md5）</td>
        </tr>
        <tr>
        <td>ext(文件后缀)</td>
        </tr>
         <tr>
        <td>chunk(当前分片)</td>
        </tr>
        <tr>
        <td>chunks（总分片数量）</td>
        </tr>
        <tr>
        <td>name(文件名)</td>
        </tr>
    </table>
        
## 登陆注册操作相关请求

#### 用户登陆 --后期将引入德诚用户中心

 <table>
        <tr>
            <td>名称</td>
            <td colspan="3">**系统用户登陆</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">post</td>
        </tr>
        <tr>
            <td rowspan="3">params</td>
            <td>username</td>
            <td colspan="2">用户账户</td>
        </tr>
        <tr>
            <td>password</td>
            <td colspan="2">密码</td>
        </tr>
         <tr>
            <td>verify</td>
            <td colspan="2">验证码</td>
        </tr>
         <tr>
           <td rowspan="5">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
        <tr>
            <td rowspan="3">data</td>
            <td colspan="2">
             登陆成功或失败信息
            </td>
        </tr>
         <tr>
           <td>token</td>
            <td>
              用户登陆凭证，其他需登陆才能访问的j接口携带此数据请求
            </td>
        </tr>
         <tr>
           <td>user_info</td>
           <td>用户基本信息如id，昵称/姓名，角色标识符</td>
        </tr>
    </table>

:::warning 注意
后端需设置 token 过期时间，如 2 小时后 token 无效需重新登陆
:::

#### 验证用户名是否存在

<table>
        <tr>
            <td>名称</td>
            <td colspan="3">**系统用户名验证</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">post</td>
        </tr>
        <tr>
            <td>params</td>
            <td>username</td>
            <td colspan="2">用户账户</td>
        </tr>
         <tr>
           <td rowspan="2">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
    </table>

#### 用户注册请求

- 用户名统一用 username

<table>
        <tr>
            <td>名称</td>
            <td colspan="3">**系统用户名注册</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">post</td>
        </tr>
        <tr>
            <td>params</td>
            <td>username</td>
            <td colspan="2">用户账户</td>
        </tr>
         <tr>
           <td rowspan="4">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
         <tr>
            <td rowspan="2">data</td>
            <td colspan="2">业务处理结果</td>
        </tr>
         <tr>
            <td>msg</td>
            <td>注册结果提示信息</td>
        </tr>
    </table>

#### 登陆成功后获取导航信息

<table>
        <tr>
            <td>名称</td>
            <td colspan="3">**系统**角色导航菜单</td>       
        </tr>
        <tr>
            <td>url</td>
            <td colspan="3">请求处理路径</td>
        </tr>
        <tr>
            <td>method</td>
            <td colspan="3">get</td>
        </tr>
        <tr>
            <td>params</td>
            <td>role</td>
            <td colspan="2">用户角色标识符</td>
        </tr>
         <tr>
           <td rowspan="7">响应信息</td>
            <td>code</td>
            <td colspan="2">业务处理状态</td>
        </tr>
        <tr>
            <td>msg</td>
            <td colspan="2">业务处理结果</td>
        </tr>
         <tr>
            <td rowspan="5">data</td>
            <td colspan="2">导航集合，每项基本信息包括</td>
        </tr>
         <tr>
            <td>name</td>
            <td>菜单唯一标识</td>
        </tr>
        <tr>
            <td>text</td>
            <td>菜单名称</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>菜单图标</td>
        </tr>
        <tr>
            <td>children</td>
            <td>子菜单，结构一致</td>
        </tr>
    </table>

```js
//返回导航
data: {
  nav: [
    {
      name: ".....",
      text: "....",
      icon: ".....",
      children: [
        {
          name: "",
          text: "",
          icon: "",
          children: []
        }
      ]
    }
  ];
}
```
