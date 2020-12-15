import Button from './button.vue'
import Dialog from './dialog.vue'
import GlTable from "./glTable.vue";
const components = [
  Button,
  Dialog,
  GlTable
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
