import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import SpecContest from '@/views/SpecContest'

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