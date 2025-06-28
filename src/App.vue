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
    <div>
      <p v-if="authStore.isAuthenticated">Logged in!</p>
      <p v-else>Not Logged in!</p>
    </div>
    <nav class="text-[25px] flex justify-between w-[800px]">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/messages">Messages</RouterLink>
      <RouterLink to="/messages/new">New Message</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/protected">Protected</RouterLink>
    </nav>
  </HeaderComponent>

  <main class="m-[15px]">
    <div>
      <p v-if="authStore.csrfToken">{{ authStore.csrfToken }}</p>
      <p v-else>Not CSRF Token!</p>
    </div>
    <RouterView />
  </main>
</template>

<style scoped></style>
