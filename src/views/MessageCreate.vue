<script setup>
import axiosInstance from '@/services/axios';
import { ref } from 'vue';

const message = ref({
    msg: "",
})
const respMsg = ref(null);

const errorMsg = ref(null);

const handleNewMessage = async () => {
    try {
    const response = await axiosInstance.post("/messages", message.value)
    respMsg.value = response.data
    } catch(error) {
        errorMsg.value = error;
    }
}

</script>

<template>
    This is the message create page
    <div v-if="respMsg">
        Msg Created: {{ respMsg.message.msg }}
    </div>
    <div v-if="errorMsg">
        Error message: {{ errorMsg }}
    </div>
    <form @submit.prevent="handleNewMessage">
        <label for="msg">Msg:</label>
        <input class="border-1" name="msg" v-model="message.msg" required type="text"/><br>
        <button class="border-2" type="submit">Submit</button>
    </form>
</template>