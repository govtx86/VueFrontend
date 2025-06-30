<script setup>
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const props = defineProps(['content'])

</script>

<template>
    <MdPreview :modelValue="props.content" />
</template>