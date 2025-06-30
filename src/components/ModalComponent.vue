<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()


const onSave = () => {
    if (route.query.redirect) {
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
                    <slot></slot>
                    <button class="modal-default-button float-right border-1 rounded-[3px]"
                        @click="onSave">Close</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>