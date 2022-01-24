import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import HotMusic from './HotMusic/HotMusic'

export default new Vuex.Store({
  modules:{
    HotMusic
  }
})

// export default store