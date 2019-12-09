import Vue from 'vue';
import App from './App.vue'

import './css/index.less'; // 公用样式
import './js/vue-extend'; // 全局属性
import './js/vue-filter'; // 全局过滤器

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
