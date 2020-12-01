import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import SpecContest from "@/views/SpecContest";
import AccelerationCamp from "@/views/AccelerationCamp";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/spec-contest",
    name: "SpecContest",
    component: SpecContest
  },
  {
    path: "/acceleration-camp",
    name: "AccelerationCamp",
    component: AccelerationCamp
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
