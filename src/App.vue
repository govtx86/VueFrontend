<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import { useAuthStore } from './stores/auth';
import PageTitle from './components/PageTitle.vue';

const authStore = useAuthStore()
authStore.initialize()

</script>

<template>
  <PageTitle title="My App"/>
  <HeaderComponent>
    <h1 class="text-[30px]">MyApp</h1>
    <nav class="text-[25px] flex justify-between w-[550px]">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <RouterLink to="/protected">Protected</RouterLink>
    </nav>
  </HeaderComponent>
  <main class="m-[15px]">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style scoped></style>
