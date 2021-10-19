import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Apps from "../views/Apps.vue";
import Features from "../views/Features.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Apps",
    name: "Apps",
    component: Apps,
  },
  {
    path: "/Features",
    name: "Features",
    component: Features,
  },

  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Help",
    name: "Help",
    component: Help,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
