import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProtectedView from '@/views/ProtectedView.vue'
import NotFound from '@/views/NotFound.vue'
import { useAuthStore } from '@/stores/auth'
import EditorView from '@/views/EditorView.vue'
import PostListView from '@/views/PostListView.vue'
import PostView from '@/views/PostView.vue'

function keepDefaultView(to, from) {
  if (from.matched.length) {
    to.matched[0].components.default = from.matched[0].components.default;
  } else {
    to.matched[0].components.default = HomeView;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      props: true,
    },
    {
      path: '/register',
      name: 'register',
      components: {
        modal: RegisterView,
      },
      beforeEnter: [keepDefaultView],
    },
    {
      path: '/login',
      name: 'login',
      components: {
        modal: LoginView,
      },
      beforeEnter: [keepDefaultView],
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    await authStore.initialize()
    if (!authStore.isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
