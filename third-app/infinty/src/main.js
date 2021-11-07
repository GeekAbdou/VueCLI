import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fab, fas);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../scss/index.scss";
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import "animate.css";

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
