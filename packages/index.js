import Button from './button.vue'
import Dialog from './dialog.vue'
import WsTable from "./wsTable.vue";
const components = [
  Button,
  Dialog,
  WsTable
]
const install = function(Vue) {
  // 注册 组件
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

export default {
  install,
};
