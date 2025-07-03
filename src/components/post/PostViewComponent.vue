<script setup>
import { Editor, EditorContent } from '@tiptap/vue-3';
import getEditorExtensions from '@/services/editor';
import { ref, watch } from 'vue';

const props = defineProps(['content']);

const editor = ref(null);

editor.value = new Editor({
    content: props.content,
    extensions: getEditorExtensions(),
    editable: false,
});

watch(() => props.content, (newValue) => {
    if (newValue !== editor.value.getHTML()) {
        editor.value.commands.setContent(newValue, false);
    }
});
</script>

<template>

    <editor-content :editor="editor"/>

</template>

<style scoped>
:deep(img) {
    width: 500px;
    object-fit: cover;
}

:deep(blockquote) {
    border-left: 3px solid #c1c1c1;
    margin: 1.5rem 0;
    padding-left: 1rem;
}

:deep(pre) {
    background: black;
    border-radius: 0.5rem;
    color: white;
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
        background: none;
        color: inherit;
        font-size: 0.8rem;
        padding: 0;
    }

    /* Code styling */
    .hljs-comment,
    .hljs-quote {
        color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
        color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
        color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
        color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
        color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #70cff8;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }
}

:deep(.ProseMirror) {
    min-height: 150px;
}

:deep(.ProseMirror:focus) {
    outline: none;
}
</style>