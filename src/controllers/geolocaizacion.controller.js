// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'TU_CLAVE_DE_API_DE_GOOGLE_MAPS',
    libraries: 'places',
  },
});

// Configuración de Vue Router
import Home from './views/Home.vue';
import MapView from './views/MapView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: MapView },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// Configuración de Vuex
import store from './store';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

