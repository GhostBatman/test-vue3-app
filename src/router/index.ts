import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FormView from '@/views/FormView.vue';
import SuccessView from '@/views/SuccessView.vue';
import FailView from '../views/FailView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'HomeView',
        },
        {
            path: '/form',
            component: FormView,
            name: 'FormView',
        },
        {
            path: '/success',
            component: SuccessView,
            name: 'SuccessView',
        },
        {
            path: '/fail',
            component: FailView,
            name: 'FailView',
        },
    ],
});
export default router;
