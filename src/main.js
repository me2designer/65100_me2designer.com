import Vue from 'vue'
import main from './main.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(main),
}).$mount('#app')
