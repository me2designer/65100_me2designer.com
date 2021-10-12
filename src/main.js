import files            from '@/assets/js/files.js'
import Vue              from 'vue'
import wrap             from './App.vue'
import router           from './router'

Vue.config.productionTip = false

new Vue({
  files,
  el: '#wrap',  
  router,
  render: h => h(wrap),
}).$mount('#wrap')