import Vue from "vue";
import App from "./App.vue";
import glKxUi from "../packages/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(glKxUi);
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
