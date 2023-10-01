import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).mount("#app");
