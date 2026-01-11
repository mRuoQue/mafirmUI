import { createApp } from "vue";

import App from "./app.vue";

// import mafirmUI from "../../packages/index";
// import "../../packages/styles/index.css";
// const app = createApp(App);
// app.use(mafirmUI).mount("#app");

import mafirmUI from "../../dist/es/mafirmUI.js";
import "../../dist/es/mafirmUI.css";
const app = createApp(App);
app.use(mafirmUI).mount("#app");
