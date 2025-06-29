import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { config } from 'md-editor-v3'
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import mermaid from 'mermaid';
import screenfull from 'screenfull';
import highlight from 'highlight.js';
import 'highlight.js/styles/felipec.css';
config({
    editorExtensions: {
        cropper: {
            instance: Cropper
        },
        mermaid: {
            instance: mermaid
        },
        screenfull: {
            instance: screenfull
        },
        highlight: {
            instance: highlight
        }
    },
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
