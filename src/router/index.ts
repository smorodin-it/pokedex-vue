import { createRouter, createWebHistory } from "vue-router";

import ListView from "../views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: ListView,
    },
    {
      path: "/card",
      name: "card",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DataCardView.vue"),
    },
  ],
});

export default router;
