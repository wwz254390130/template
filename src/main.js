import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import API from './api/api';
import WX from 'weixin-js-sdk';
import Vant from "vant";
import "vant/lib/index.css";
import "./variables.scss";

require('./mock');
Vue.use(Vant);
Vue.prototype.$api = API;
Vue.prototype.wx = WX;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
