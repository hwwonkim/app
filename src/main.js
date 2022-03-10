import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import {store} from "@/components/vuex";
import BootstrapVue, {ButtonPlugin, IconsPlugin, ToastPlugin} from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/style.css')

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ToastPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: "#app",
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
