const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/index' },
      // { path: '/', component: '../pages/index' }
      {
        // 主页
        path: '/index',
        component: './home/index'
      },
      {
        // 关于我们
        path: '/about',
        component: './about/index'
      },
      {
        // 联系我们
        path: '/contact',
        component: './contact/index'
      },
      {
        // 公司进程
        path: '/process',
        component: './process/index'
      },
      {
        // 教程
        path: '/tutorial',
        component: './tutorial/index'
      },
      {
        // 登录
        path: '/login',
        component: './login/index'
      },
      {
        // 注册
        path: '/register',
        component: './register/index'
      },
      {
        // 分类页面
        path: '/item/list',
        component: './item/list'
      },
      {
        // 商品详情
        path: '/item/detail',
        component: './item/detail'
      },
      {
        component: '404'
      }
    ]
  }
]

export default routes
