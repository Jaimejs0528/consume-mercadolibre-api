import vueResource from 'vue-resource';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(vueResource)
new Vue({
  render: h => h(App),
}).$mount('#app');
