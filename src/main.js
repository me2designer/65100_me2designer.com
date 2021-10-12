import Vue              from 'vue'
import wrap             from './App.vue'
import router           from './router'
import files            from '@/assets/js/files.js'

Vue.config.productionTip = false

new Vue({
  el: '#wrap',  
  files,
  router,
  render: h => h(wrap),
}).$mount('#wrap')