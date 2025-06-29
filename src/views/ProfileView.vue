<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore()

const errorMsg = ref(null);
const respMsg = ref(null);

const handleLogout = async () => {
    try{
        const response = await authStore.logout()
        respMsg.value = response.data;
        errorMsg.value = null;
    } catch(error) {
        errorMsg.value = error;
    }
}
</script>

<template>
    This is the profile page <br>
    <div v-if="!authStore.isAuthenticated">
        You are not logged in!
    </div>
    <div v-if="authStore.user.username">
        Username: {{ authStore.user.username }}
    </div>
    <div v-if="authStore.user.email">
        Email: {{ authStore.user.email }}
    </div>
    <div v-if="errorMsg">
        Error message: {{ errorMsg }}
    </div>
    <div v-if="respMsg">
        Response message: {{ respMsg }}
    </div>
    <div>
        <button class="border-1" @click="handleLogout">Logout!!</button>
    </div>
</template>
