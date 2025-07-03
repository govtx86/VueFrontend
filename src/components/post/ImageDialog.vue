<script setup>
import { ref } from 'vue';
import ModalComponent from '../ModalComponent.vue';
import axiosInstance from '@/services/axios';

const { editor } = defineProps(['editor'])

const emit = defineEmits(['close']);

const url = ref("");
const buttonText = ref("Close");
const extraButtonText = ref("");

const errorMSG = ref("");

const onImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    axiosInstance.post(`${import.meta.env.VITE_IMAGE_UPLOAD_ROUTE}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((response) => {
        url.value = response.data.url;
        console.log(response.data.url);
        buttonText.value = "Save";
        extraButtonText.value = "Cancel";
    }).catch((error) => {
        errorMSG.value = error.message;
        console.log(error)
    });
}

const onSave = () => {
    console.log(url.value);
    if (url.value !== "") {
        editor.chain().focus().setImage({ src: url.value }).run()
    }
    emit('close');
}

</script>

<template>
    <ModalComponent @button-click="onSave" :buttonText="buttonText" :extraButtonText="extraButtonText"
        @extraButtonClick="emit('close')">
        <input type="file" @change="onImageUpload" class="overflow-ellipsis" accept="image/png, image/jpeg">
        <div v-if="errorMSG != ''">
            {{ errorMSG }}
        </div>
        <div v-if="url != ''">
            Preview:
            <img :src="url" alt="Image" class="w-[300px]">
        </div>
    </ModalComponent>
</template>