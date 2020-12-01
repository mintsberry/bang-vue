import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import SpecContest from "@/views/SpecContest";
import AccelerationCamp from "@/views/AccelerationCamp";
import EventNews from "../views/EventNews.vue";
import ProjectDisplay from "../views/ProjectDisplay.vue";

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
    path: "/event-news",
    name: "event-news",
    component: EventNews
  },
  {
    path: "/project-display",
    name: "project-display",
    component: ProjectDisplay
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
