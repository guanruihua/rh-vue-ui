import Vue from 'vue'
import App from './App.vue'
import RHUI from '../packages'
Vue.config.productionTip = false

Vue.use(RHUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
