// ./src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 导入路由

const app = createApp(App)
app.use(router)  // 使用路由
app.mount('#app')