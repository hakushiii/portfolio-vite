import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '', name: 'home', component: () => import("@/views/HomePage.vue")},
    {path: '/works', name: 'works', component: () => import('@/views/WorksPage.vue')},
    {path: '/tools', name: 'tools', component: () => import('@/views/ToolsPage.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router