import Vue from 'vue'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './vuex/store'
Vue.prototype.$http = $.ajax;

/*
 引入Promise对IE11的兼容性
 */
if (!window.Promise) {
  window.Promise = Promise;
}
Vue.use(ElementUI);
/*
 定义本地存储变量
 */
localStorage.url = "http://192.168.2.118:8180/gj2017";

router.beforeEach(({meta,path},from,next) => {
  var { auth = true} = meta;
  // console.log(auth,path);
  if(auth && path !=='/login'){
    // return next({path:'/login'})
    next();
  }
  next()
});

new Vue({
  el: '#app',
  store:store,
  router: router,
  template: '<App/>',
  components: {App}
});
