// import files            from '@/assets/js/files.js'
import Vue              from 'vue'
import wrap             from './App.vue'
import router           from './router'

Vue.config.productionTip = false

new Vue({
  el: '#wrap',  
  // files,
  router,
  render: h => h(wrap),
}).$mount('#wrap')