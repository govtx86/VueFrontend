<script setup>
import MDEditorComponent from '@/components/MDEditorComponent.vue';
import MDViewComponent from '@/components/MDViewComponent.vue';
import { ref } from 'vue';

const value = ref("Test this is atest")

</script>

<template>
    <p>This is the editor page</p>
    <MDEditorComponent v-model="value"/>
    <MDViewComponent :content="value"/>
</template>