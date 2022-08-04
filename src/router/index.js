import {createRouter, createWebHashHistory} from "vue-router"
import App from "@/App";
import TodoPage from "@/pages/TodoPage";
import PostsPage from "@/pages/PostsPage";

const routes = [
    {
        path: '/',
        component: App
    },
    // {
    //     path: '/todos',
    //     component: TodoPage
    // },
    {
        path: '/posts',
        component: PostsPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router