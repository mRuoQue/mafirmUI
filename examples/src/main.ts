import { createApp } from "vue";

import App from "./app.vue";

// import smallmaUI from "../../packages/index";
// import "../../packages/styles/index.css";
// const app = createApp(App);
// app.use(smallmaUI).mount("#app");

import smallmaUI from "../../dist/es/smallmaUI.js";
import "../../dist/es/smallmaUI.css";
const app = createApp(App);
app.use(smallmaUI).mount("#app");
