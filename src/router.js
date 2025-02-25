import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; // Example components
import About from "./views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
