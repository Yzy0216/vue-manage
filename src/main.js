import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/less/index.less'
import store from './store/index.js'
import axios from 'axios'
import '../api/mock.js'
// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'




Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.config.productionTip = false
    //全局配置axios
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios



//过滤器优化时间格式
Vue.filter('dateFormat', (dtStr) => {

    const dt = new Date(dtStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDay())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
})

function padZero(n) {
    return n > 9 ? n : '0' + n
}



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')