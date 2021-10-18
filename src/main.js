import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(router).use(VueSmoothScroll).mount('#app')
