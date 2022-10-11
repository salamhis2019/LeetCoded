import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LandingView from "../views/LandingView.vue";
import MainView from "../views/MainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LandingView,
  },
  {
    path: "/solutions",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
