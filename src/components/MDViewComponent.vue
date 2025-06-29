<script setup>
import { ref } from 'vue';
import { MdPreview } from 'md-editor-v3';
// import 'md-editor-v3/lib/preview.css';

const props = defineProps(['content'])

</script>

<template>
    <MdPreview previewTheme="xxx" :modelValue="props.content" />
</template>