import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import services from "../views/Apps.vue";
import pricing from "../views/Features.vue";
import contactUs from "../views/About.vue";
import allLinks from "../views/Help.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "services",
    component: services,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: pricing,
  },

  {
    path: "/contact-us",
    name: "contactUs",
    component: contactUs,
  },
  {
    path: "/all-links",
    name: "allLinks",
    component: allLinks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
