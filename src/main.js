import Vue from 'vue'
import App from './App.vue'
// Importazione FontAwesomeIcon 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { faStar as solid } from '@fortawesome/free-solid-svg-icons'
import { faStar as regular } from '@fortawesome/free-regular-svg-icons'
library.add(solid, regular)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
