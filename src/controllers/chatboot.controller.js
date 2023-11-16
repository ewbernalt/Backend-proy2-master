import { createApp } from 'vue';
import Chatboot from './components/Chatboot.vue';

const app = createApp({});
app.component('chatbot', Chatboot);
app.mount('#app');

