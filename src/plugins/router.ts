import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '', name: 'home', component: () => import("../../src/views/HomePage.vue")},
    {path: '/works', name: 'works', component: () => import('../../src/views/WorksPage.vue')},
    {path: '/tools', name: 'tools', component: () => import('../../src/views/ToolsPage.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router