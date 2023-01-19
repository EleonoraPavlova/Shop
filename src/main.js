import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/fonts.css'
import "./assets/normalize.css";
import store from './store'

createApp(App).use(store).use(router).mount('#app')
