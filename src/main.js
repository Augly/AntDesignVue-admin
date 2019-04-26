import Vue from "vue";
//按需引入and-design UI组件
import { Button, Layout, Icon, Drawer } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
