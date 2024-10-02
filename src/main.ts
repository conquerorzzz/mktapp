/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
const pinia = createPinia()
setActivePinia(pinia)
const app = createApp(App)
app.use(pinia).use(router).use(ElementPlus).mount('#app')
