<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore()
authStore.initialize()
</script>

<template>
  <HeaderComponent>
    <h1 class="text-[30px]">MyApp</h1>
    <nav class="text-[25px] flex justify-between w-[650px] [&>a]:text-inherit [&>a]:no-underline">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/editor">Editor</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/protected">Protected</RouterLink>
    </nav>
  </HeaderComponent>
  <main class="m-[15px]">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="PostListView,PostView">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <router-view name="modal"></router-view>

  </main>
</template>

<style scoped></style>
