<script setup>
import { watchEffect } from 'vue';

const { title } = defineProps(['title']);
watchEffect(() => {
    document.title = title
})
</script>