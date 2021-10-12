import files            from '@/assets/js/files.js'
import Vue              from 'vue'
import wrap             from './App.vue'
import router           from './router'

Vue.config.productionTip = false

Vue.use(files)

new Vue({
  el: '#wrap',    
  router,
  render: h => h(wrap),
}).$mount('#wrap')