import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = true

import NiceElements from './main.js';
Vue.use(NiceElements);

new Vue({
  render: h => h(App)
}).$mount('#app')