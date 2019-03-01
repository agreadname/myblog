module.exports = {
  title: '前后端开发Vue文档说明',
  description: '底包文档使用说明',
  configureWebpack: {
    resolve: {

    }
  },
  base: '/myblog/',//打包文件生成的路径
  repo:'https://github.com/agreadname/myblog',
  dest:'./docs/.vuepress/dist',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    sidebarDepth: 2,
    // 标题栏配置
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '线上VUE组件集合',
        link: 'https://github.com/vuejs/awesome-vue'
      },
      {
        text: 'VuePress',
        link: 'https://vuepress.vuejs.org/'
      },
      // 下拉列表的配置
      {
        text: 'Languages',
        items: [{
            text: 'Chinese',
            link: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh'
          },
          {
            text: 'English',
            link: 'https://translate.google.cn/m/translate'
          }
        ]
      },
    ],
    //侧边栏配置
    sidebar: [{
        title: '接口规范',
        collapsable: false,
        children: [
          '/api/'
        ]
      },
      {
        title: '项目说明',
        collapsable: false,
        children: [
          '/project/'
        ]
      },
      {
        title: '路由配置',
        collapsable: false,
        children: ['/router/']
      },

      {
        title: '组件',
        collapsable: false,
        children: ['/components/']
      },
      {
        title: 'gulp文档说明',
        collapsable: false,
        children: ['/gulp/']
      },
      {
        title: '通用代码规范',
        collapsable: false,
        children: ['/rule/']
      },

      {
        title: '状态码',
        collapsable: false,
        children: ['/httpcode/']
      },
      {
        title: '测试专用',
        collapsable: false,
        children: ['/vue/']
      },
    ]
  },
serviceWorker:true


}