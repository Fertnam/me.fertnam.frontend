<template>
    <Header />
    <AboutMe />
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/sections/Header.vue'
import AboutMe from '@/components/sections/AboutMe/AboutMe.vue'
import Footer from '@/components/sections/Footer.vue'

export default defineComponent({
    name: 'App',
    components: {
        Header,
        AboutMe,
        Footer,
    },
})
</script>
