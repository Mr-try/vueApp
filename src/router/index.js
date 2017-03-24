import Vue from 'vue'
import Router from 'vue-router'
import home from  '../components/home'
import App from '../App'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/login', //登录
          meta: {auth: localStorage.isLogin},
          component: resolve => require(['../components/login'], resolve)
        },
        {
          path: '/home',
          meta: {auth: false},
          component: home,
          children: [
            {path: '/', meta: {auth: localStorage.isLogin},component: resolve => require(['../components/workprogress/first'], resolve)},
            {
              path: '/1-1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/workprogress/first'], resolve)
            },
            {path: '/1-2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/workprogress/second'], resolve)},
            {path: '/1-3', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/workprogress/third'], resolve)},
            {path: '/1', redirect: '/home'},
            {path: '/2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/index'], resolve)},
            {path: '/2-1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/first'], resolve)},
            {path: '/2-2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/second'], resolve)},
            {path: '/2-3/1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/updatePrep'], resolve)},
            {path: '/2-3/2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/updateMid'], resolve)},
            {path: '/2-3/3', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/updateLate'], resolve)},
            {path: '/2-4/1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/checkPrep'], resolve)},
            {path: '/2-4/2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/checkMid'], resolve)},
            {path: '/2-4/3', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/progressmanage/checkLate'], resolve)},
            {path: '/3', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/projectmanage/index'], resolve)},
            {path: '/3-1', meta: {auth: localStorage.isLogin},component: resolve => require(['../components/projectmanage/first'], resolve)},
            {path: '/3-2/*', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/projectmanage/newProject'], resolve)},
            {path: '/3-3/*', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/projectmanage/updateProject'], resolve)},
            {path: '/3-4/*', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/projectmanage/checkProject'], resolve)},
            {path: '/4', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/setting/index'], resolve),},
            {path: '/4-1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/setting/first'], resolve)},
            {path: '/4-2', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/setting/second'], resolve)},
            {path: '/5-1', meta: {auth: localStorage.isLogin}, component: resolve => require(['../components/personal/first'], resolve)},
          ]
        },
        {
          path: '*', //其他页面，强制跳转到登录页面
          redirect: '/login'
        }
      ]
    },
  ]
})
