import Main from "@/pages/Main";
import Range from "@/pages/Range";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/range',
        component: Range
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;