import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; // Example components
import About from "./views/About.vue";

const routes = [
  { path: "/", component: Home , name:'homw'},
  { path: "/about", component: About , name:'about'},
  { path: "/test", component: About , name:'about'},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
