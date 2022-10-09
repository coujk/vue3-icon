import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as icons from "./index.js";
const iconNames: unknown[] = [];
const Vue = createApp(App);
if (typeof Vue !== "undefined") {
  for (const name in icons) {
    Vue.component(name, icons[name]);
    iconNames.push(name);
  }
}
Vue.use(store).use(router).mount("#app");
