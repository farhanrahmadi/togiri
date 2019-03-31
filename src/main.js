import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAsia, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VAnimateCss from 'v-animate-css'

Vue.use(VAnimateCss)

library.add(faGlobeAsia)
library.add(faBoxOpen)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueFullpage)

Vue.config.productionTip = false
require('./assets/sass/main.scss')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
