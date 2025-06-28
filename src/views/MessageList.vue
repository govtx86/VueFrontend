<script setup>
import { ref } from 'vue';

import axiosInstance from '@/services/axios';

const messages = ref([]);
const error = ref(null);

const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get('/messages');
    messages.value = response.data.message;
    error.value = null;
  } catch (err) {
    console.error('Error fetching messages:', err);
    error.value = 'Failed to fetch messages. Please try again later.';
  }
};
</script>

<template>
  <p>This is the message list page</p>
  <div>
    <button @click="fetchMessages">Get Messages</button>
  </div>
  <div class="messages-container">
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else>
      <h2>Messages:</h2>
      <ul class="message-list">
        <li v-for="message in messages" :key="message.id" class="message-item">
          {{ message.id }} {{ message.msg }}
        </li>
      </ul>
    </div>
  </div>
</template>