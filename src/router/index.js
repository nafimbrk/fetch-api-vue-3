import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/persons',
        name: 'persons.index',
        component: () => import('../views/persons/index.vue')
    },
    {
        path: '/create',
        name: 'persons.create',
        component: () => import('../views/persons/create.vue')
    },
    {
        path: '/edit/:id',
        name: 'persons.edit',
        component: () => import('../views/persons/edit.vue')
    },
    {
        path: '/show/:id',
        name: 'persons.show',
        component: () => import('../views/persons/show.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router