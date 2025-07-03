<script setup>
import MDEditorComponent from '@/components/post/EditorComponent.vue';
import axiosInstance from '@/services/axios';
import { ref } from 'vue';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const title = ref("");
const content = ref('<p>Hello World!</p>');
const errMsg = ref("");
const respMsg = ref("");



const onSave = async () => {
    try {
        const response = await axiosInstance.post("/posts/new", {
            title: title.value,
            content: content.value,
        })
        respMsg.value = capitalize(response.data);
        errMsg.value = null;
    } catch (error) {
        errMsg.value = error.message;
        console.log(error);
        respMsg.value = null;
    }
}


// When creating a new post, send request to get the post id, and open a edit post view with the id
// Make a bool in the post tabel for published or draft
// When editing a post, send request to get the post id, and open a edit post view with the id

</script>

<template>
    <form @submit.prevent="onSave">

        <div class="m-[10px]">
            <label for="title">Title: </label>
            <input v-model="title" required class="w-[350px] rounded-[0px] p-[5px] outline-hidden" type="text"
                name="title" id="postTitle">
            <button class="float-right" type="submit">Save</button>
        </div>
        <div v-if="errMsg != ''"> {{ errMsg }}</div>
        <div v-if="respMsg != ''"> {{ respMsg }}</div>
        <MDEditorComponent v-model:model-value="content"></MDEditorComponent>
    </form>
</template>