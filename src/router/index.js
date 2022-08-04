import {createRouter, createWebHashHistory} from "vue-router"
import TodoPage from "@/pages/TodoPage";
import PostsPage from "@/pages/PostsPage";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/todos',
        name: 'todos',
        component: TodoPage
    },
    {
        path: '/posts',
        name: 'posts',
        component: PostsPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router