module.exports = { // module 模块，组件 exports: 出口，输出
    title: "2020 学习", // 给一个标题
    description: '将一些步骤收集起来',  // 描述一下网站，介绍一下
    head: [
        ['link',{
           rel: 'icon',
           href: 'img/'
        }]
    ],
   themeConfig: {
       nav: [ //配置导航
           {text: '首页', link:'/pages/README'},
           {text: 'VuePress官网', link:'https://vuepress.vuejs.org/zh/'},
           {text: 'Vuejs官网', link:'https://vuejs.org/zh/'},
           {text: 'java', link:"/pages/java"}
       ],
       sidebar:[// 侧边栏
       {
           title: 'VuePress',
           collapsable: true,
           children: ['/pages/vuepress']
       },
       {
           title: 'word',
           collapsable: true,
           children: ['/pages/word']
       },
       {
           title: 'vuejs',
           collapsable: true,
           children: ['/pages/vuejs']
       },
       {
           title: 'vuejs',
           collapsable: true,
           children: ['/pages/vuejs']
       },
       {
           title: 'Java',
           collapsable: true,
           children: ["/pages/java"]
       }
     ],
   sidebarDepth: 2 // depth: 向下的距离，深(度),宽(度)
    }
}