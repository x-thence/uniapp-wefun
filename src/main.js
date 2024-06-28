import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import uView from "uview-ui";
import store from "./store/index.js";

Vue.use(uView);
Vue.config.productionTip = false;
// Vue.prototype.$

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
