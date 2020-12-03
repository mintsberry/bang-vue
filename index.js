import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import SpecContest from '@/views/SpecContest'
import CustomContest from '../views/Custom-contest.vue'
import Advisor from '@/views/Advisor'
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
        path: '/custom-contest',
        name: "CustomContest",
        component: CustomContest
    },
    {
        path: '/advisor',
        name: 'Advisor',
        component: Advisor
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;