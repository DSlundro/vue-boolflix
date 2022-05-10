import Vue from 'vue'
import App from './App.vue'

// Bootstrap
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

// Flags
import LangFlag from 'vue-lang-code-flags'
Vue.component('lang-flag', LangFlag)

// rating
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

Vue.use(rate)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

