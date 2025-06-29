<script setup>
import axiosInstance from '@/services/axios';
import { ref } from 'vue';

const errorMsg = ref(null);
const respMsg = ref(null);

const handleData = async () => {
    try{
        const response = await axiosInstance.get("/protected")
        respMsg.value = response.data;
        errorMsg.value = null;
    } catch(error) {
        errorMsg.value = error;
    }
}
</script>

<template>
    This is the protected page
    <div v-if="errorMsg">
        Error message: {{ errorMsg }}
    </div>
    <div v-if="respMsg">
        Response message: {{ respMsg }}
    </div>
    <div>
        <button class="border-1" @click="handleData">Get data!!</button>
    </div>
</template>