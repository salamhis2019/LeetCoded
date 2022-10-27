import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(VueClickAway);
app.use(pinia);
app.use(router).mount("#app");
