<script setup>
import { ref } from 'vue';
import ImageDialog from './ImageDialog.vue';

const { editor } = defineProps(['editor'])

const imgDialogShown = ref(false);

</script>

<template>
    <div v-if="editor" class="menu-bar flex justify-between items-center">
        <div class="menu-left flex gap-[5px] flex-wrap mb-2.5">
            <button type="button" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }"
                title="Bold">
                <i class="ri-bold"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }" title="Italic">
                <i class="ri-italic"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }" title="Strike">
                <i class="ri-strikethrough"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleUnderline().run()"
                :class="{ 'is-active': editor.isActive('underline') }" title="Underline">
                <i class="ri-underline"></i>
            </button>

            <div class="h-[30px] border-l-3 rounded-[2px] border-gray-400 mx-[5px]"></div>

            <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" title="H1">
                <i class="ri-h-1"></i>
            </button>

            <div class="h-[30px] border-l-3 rounded-[2px] border-gray-400 mx-[5px]"></div>

            <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }" title="Code">
                <i class="ri-code-line"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }" title="BlockQuote">
                <i class="ri-double-quotes-l"></i>
            </button>

            <div class="h-[30px] border-l-3 rounded-[2px] border-gray-400 mx-[5px]"></div>

            <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }" title="Bullet List"> <i
                    class="ri-list-unordered"></i>
            </button>
            <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }" title="Ordered List">
                <i class="ri-list-ordered"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setHorizontalRule().run()" title="Horizontal Rule">
                <i class="ri-separator"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setHardBreak().run()" title="Break Line">
                <i class="ri-corner-down-left-line"></i>
            </button>

        </div>

        <div class="menu-center flex gap-[5px] flex-wrap mb-2.5">
            <button type="button" @click="editor.chain().focus().setTextAlign('left').run()"
                :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" title="Align Left">
                <i class="ri-align-left"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setTextAlign('center').run()"
                :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" title="Align Center">
                <i class="ri-align-center"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setTextAlign('right').run()"
                :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" title="Alignt Right">
                <i class="ri-align-right"></i>
            </button>
            <button type="button" @click="editor.chain().focus().setTextAlign('justify').run()"
                :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }" title="Justify">
                <i class="ri-align-justify"></i>
            </button>
        </div>

        <div class="menu-right flex gap-[5px] flex-wrap mb-2.5">

            <button type="button" @click="imgDialogShown = true" title="Image">
                <i class="ri-image-add-line"></i>
            </button>
            <ImageDialog v-if="imgDialogShown" @close="imgDialogShown = false" :editor="editor"></ImageDialog>

            <div class="h-[30px] border-l-3 rounded-[2px] border-gray-400 mx-[5px]"></div>

            <button type="button" @click="editor.chain().focus().undo().run()" title="Undo">
                <i class="ri-arrow-go-back-line"></i>
            </button>

            <button type="button" @click="editor.chain().focus().redo().run()" title="Redo">
                <i class="ri-arrow-go-forward-line"></i>
            </button>
        </div>
    </div>
</template>

<style>
button {
    background: #f5f5f5;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background: #e9e9e9;
}

button.is-active {
    background: #ddd;
}
</style>