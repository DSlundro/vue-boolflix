import Vue from 'vue'
import App from './App.vue'

// Bootstrap
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

// Flags
import LangFlag from 'vue-lang-code-flags'
Vue.component('lang-flag', LangFlag)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
