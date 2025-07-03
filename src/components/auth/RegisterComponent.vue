<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import axiosInstance from '@/services/axios';

const user = ref({
    username: "",
    password: "",
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const errorMsg = ref(null);
const respMsg = ref(null);

const handleRegister = async () => {
    try {
        const response = await axiosInstance.post("/register", user.value)
        respMsg.value = capitalize(response.data);
        errorMsg.value = null;
    } catch (error) {
        errorMsg.value = capitalize(error.response.data.error);
    }
}

const router = useRouter()

const onSave = () => {
    router.go(-1)
}
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                class="modal-mask fixed z-[9998] w-full h-full bg-[rgba(0,0,0,0.5)] flex transition-opacity duration-[0.3s] ease-[ease] left-0 top-0">
                <div
                    class="modal-container w-[300px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.3s] ease-[ease] m-auto px-[30px] py-5 rounded-sm">
                    <p>Register:</p>
                    <div v-if="errorMsg" class="bg-red-500 rounded-[5px]">
                        {{ errorMsg }}
                    </div>
                    <div v-if="respMsg">
                        {{ respMsg }}
                    </div>
                    <form @submit.prevent="handleRegister">
                        <label for="username">Username:</label>
                        <input class="border-1" name="username" v-model="user.username" required type="text" /> <br>
                        <label for="email">Email:</label>
                        <input class="border-1" name="email" v-model="user.email" required type="text" /> <br>
                        <label for="password">Password:</label>
                        <input class="border-1" name="password" v-model="user.password" required type="password" /> <br>

                        <button class="border-1" type="submit">Submit</button>
                    </form>
                    <button class="modal-default-button float-right border-1 rounded-[3px]"
                        @click="onSave">Close</button>
                </div>
            </div>
        </Transition>
    </Teleport>

</template>