import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import EventList from '@/views/EventList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'EventList',
    component: EventList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
