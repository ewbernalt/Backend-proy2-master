import { createRouter, createWebHistory } from 'vue-router';
import Chatbot from './views/Chatbot.vue';

const routes = [
  {
    path: '/',
    name: 'Chatboot',
    component: Chatboot,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
