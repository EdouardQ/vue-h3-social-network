import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/front/Home.vue";


export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name : "home" , component: Home}

    ]
})