import { createMemoryHistory, createRouter } from "vue-router";


import Register from "../src/components/Register.vue";

const routes = [
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router