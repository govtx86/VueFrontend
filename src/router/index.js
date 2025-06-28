import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MessageList from '@/views/MessageList.vue'
import MessageCreate from '@/views/MessageCreate.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProtectedView from '@/views/ProtectedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessageList,
    },
    {
      path: '/messages/new',
      name: 'messagenew',
      component: MessageCreate,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/protected',
      name: 'protected',
      component: ProtectedView,
    },
  ],
})

export default router
