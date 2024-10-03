/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, setActivePinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './registerServiceWorker'
import i18n from '@/utils/i18n';
import router from './router'
import store from './store'
const pinia = createPinia()
setActivePinia(pinia)
const app = createApp(App)
app.use(pinia).use(router).use(ElementPlus).use(i18n).mount('#app')
