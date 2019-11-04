import Vue from 'vue'
import VueListPackage from './VueListPackage.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(VueListPackage),
}).$mount('#app');
