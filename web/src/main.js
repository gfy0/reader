import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import store from "./plugins/vuex.js";
import "./plugins/md5.js";
import { registerServiceWorker } from "./registerServiceWorker";
import VueLazyload from "vue-lazyload";
registerServiceWorker();

Vue.config.productionTip = false;

Vue.use(VueLazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");