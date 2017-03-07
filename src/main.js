import Vue from 'vue'
import axios from 'axios'
import Promise from 'promise-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
Vue.prototype.$http = axios;
/*
    引入axios对IE11的兼容性
 */
if (!window.Promise) {
    window.Promise = Promise;
}
Vue.use(ElementUI);
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
    router: router,
    template: '<App/>',
    components: {App}
});
