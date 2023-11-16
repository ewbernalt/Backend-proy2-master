// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import MapView from './views/MapView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: MapView },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
``