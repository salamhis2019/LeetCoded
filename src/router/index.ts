import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LandingView from "../views/LandingView.vue";
import MainView from "../views/MainView.vue";
import ProblemSolution from "../components/ProblemSolution.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LandingView,
  },
  {
    path: "/solutions",
    component: MainView,
  },
  {
    path: "/solution/:problem",
    name: "ProblemSolution",
    component: ProblemSolution,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
