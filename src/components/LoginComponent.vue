<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router'

const user = ref({
    username: "",
    password: "",
});

const authStore = useAuthStore()
const errorMsg = ref(null);
const respMsg = ref(null);

let shouldContinue = false;

const handleLogin = async () => {
    try {
        const response = await authStore.login(user.value)
        respMsg.value = response.data;
        if (response.status == 200) {
            shouldContinue = true;
        }
        errorMsg.value = null;
    } catch (error) {
        errorMsg.value = error;
    }
}

const route = useRoute()
const router = useRouter()

const onSave = () => {
    if (shouldContinue && route.query.redirect) {
        router.push(route.query.redirect)
    } else {
        router.push("/")
    }
}
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                class="modal-mask fixed z-[9998] w-full h-full bg-[rgba(0,0,0,0.5)] flex transition-opacity duration-[0.3s] ease-[ease] left-0 top-0">
                <div
                    class="modal-container w-[300px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.3s] ease-[ease] m-auto px-[30px] py-5 rounded-sm">
                    <p>Login:</p>
                    <div v-if="errorMsg">
                        Error message: {{ errorMsg }}
                    </div>
                    <div v-if="respMsg">
                        Response message: {{ respMsg }}
                    </div>
                    <form @submit.prevent="handleLogin">
                        <label for="username">Username:</label>
                        <input class="border-1" name="username" v-model="user.username" required type="text" /> <br>
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