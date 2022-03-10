import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/',
        name: 'root',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/result',
        name: 'login-result',
        component: () => import('../components/LoginResult.vue'),
        props: true
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/contents/Test.vue'),
    }
];

const router = new VueRouter(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    });


export default router;