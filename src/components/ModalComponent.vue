<script setup>
const emit = defineEmits(['buttonClick', 'extraButtonClick']);

const { buttonText, extraButtonText } = defineProps(['buttonText', 'extraButtonText'])
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                class="modal-mask fixed z-[9998] w-full h-full bg-[rgba(0,0,0,0.5)] flex transition-opacity duration-[0.3s] ease-[ease] left-0 top-0">
                <div
                    class="modal-container w-[300px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.33)] transition-all duration-[0.3s] ease-[ease] m-auto px-[30px] py-5 rounded-sm">
                    <slot></slot>
                    <div>
                        <button v-if="extraButtonText" class="modal-extra-button float-left border-1 rounded-[3px]"
                            @click="emit('extraButtonClick')">{{
                                extraButtonText }}</button>
                        <button class="modal-default-button float-right border-1 rounded-[3px]"
                            @click="emit('buttonClick')">{{
                                buttonText }}</button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>