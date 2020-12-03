import {
  createRouter,
  createWebHistory
} from "vue-router";
import Index from "../views/Index.vue";
import SpecContest from "@/views/SpecContest";
import AccelerationCamp from "@/views/AccelerationCamp";
import EventNews from "../views/EventNews.vue";
import ProjectDisplay from "../views/ProjectDisplay.vue";
import ProjectDetail from "../views/ProjectDetail.vue";
import CustomContest from "../views/CustomContest.vue";
import Advisor from "../views/Advisor.vue";
import GreenPackage from '@/views/GreenPackage'
import Bettery from '@/views/Bettery'
import HighEnergy from '@/views/HighEnergy'
import HotManange from '@/views/HotManange'

const routes = [{
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
    name: "EventNews",
    component: EventNews
  },
  {
    path: "/project-detail",
    name: "ProjectDetail",
    component: ProjectDetail
  },
  {
    path: "/advisor",
    name: "Advisor",
    component: Advisor
  },
  {
    path: "/custom-contest",
    name: "CustomContest",
    component: CustomContest
  },
  {
    path: "/project-display",
    name: "ProjectDisplay",
    component: ProjectDisplay
  },
  {
    path: "/green-package",
    name: "GreenPackage",
    component: GreenPackage
  },
  {
    path: "/hot-manange",
    name: "HotManange",
    component: HotManange
  },
  {
    path: "/bettery",
    name: "Bettery",
    component: Bettery
  }, {
    path: "/high-energy",
    name: "HighEnergy",
    component: HighEnergy
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