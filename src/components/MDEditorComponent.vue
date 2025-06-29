<script setup>
import axiosInstance from '@/services/axios';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const content = defineModel()

const toolbarsExclude = ['save', 'prettier', 'katex', 'github'];

const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
        files.map((file) => {
            return new Promise((rev, rej) => {
                const form = new FormData();
                form.append('file', file);

                axiosInstance.post('/images/upload', form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    .then((res) => rev(res))
                    .catch((error) => rej(error));
            });
        })
    );
    callback(res.map((item) => item.data.url));
};

const onSave = () => {
    console.log(content.value);
};
</script>

<template>
    <div><button class="border-3 rounded-[3px] p-[5px] px-[10px]" @click="onSave">Save</button></div>
    <MdEditor v-model="content" language="en-US" @onUploadImg="onUploadImg" @onSave="onSave"
        :toolbars-exclude="toolbarsExclude" />
</template>

<style>
svg.md-editor-icon {
    height: 20px;
    width: 20px;
}

.md-editor {
    --md-border-color: #949494 !important;
}
</style>