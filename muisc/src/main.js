import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 初始化css
import './assets/css/common.css'
import './assets/font/css/font-awesome.css'

// vue-router
import router from './router'

// axios
// import request from './utils/request'
// Vue.prototype.$request = request

// vuex

import store from './store'

// element-ui
import {Radio} from 'element-ui'
Vue.component(Radio.name,Radio)

// vant ui
import {
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Tabs
} from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
