import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AddView from '../views/AddView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'status',
      component: HomeView
    },
    {
      path: '/add',
      name: 'add-status',
      component: AddView
    }
  ]
})

export default router
