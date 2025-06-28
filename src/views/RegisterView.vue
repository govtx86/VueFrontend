<script setup>
import { ref } from 'vue';
import axiosInstance from '@/services/axios';

const user = ref({
    username: "",
    email: "",
    password: "",
});

const errorMsg = ref(null);

const respMsg = ref(null);

const handleRegister = async () => {
    try{
        const response = await axiosInstance.post("/register", user.value)
        respMsg.value = response.data;
        errorMsg.value = null;
    } catch(error) {
        errorMsg.value = error;
    }
}
</script>

<template>
    This is the register page
    <div v-if="errorMsg">
        Error message: {{ errorMsg }}
    </div>
    <div v-if="respMsg">
        Response message: {{ respMsg }}
    </div>
    <form @submit.prevent="handleRegister">
        <label for="username">Username:</label>
        <input class="border-1" name="username" v-model="user.username" required type="text"/> <br>
        <label for="email">Email:</label>
        <input class="border-1" name="email" v-model="user.email" required type="text"/> <br>
        <label for="password">Password:</label>
        <input class="border-1" name="password" v-model="user.password" required type="password"/> <br>

        <button class="border-1" type="submit">Submit</button>
    </form>
</template>