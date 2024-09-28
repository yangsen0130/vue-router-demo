// ./src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemDetails from '../views/ItemDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/item/:id',
    name: 'item-details',  // 修改了路由名称
    component: ItemDetails
  }
]

const router = createRouter({
  history: createWebHistory(),  // 使用 HTML5 历史模式
  routes
})

export default router