import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from '../components/About.vue'
import Contract from '../components/Contract.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path:"/",
        name:'Home',
        component:HelloWorld
    },
    {
        path:"/about",
        name:'about',
        component:About
    },
    {
        path:"/contract",
        name:'contract',
        component:Contract
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router 