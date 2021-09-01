<template>
    <Header />
    <AboutMe />
    <Feedback />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/sections/Header.vue'
import AboutMe from '@/components/sections/AboutMe.vue'
import Feedback from '@/components/sections/Feedback.vue'

export default defineComponent({
    name: 'App',
    components: {
        Header,
        AboutMe,
        Feedback,
    },
})
</script>
