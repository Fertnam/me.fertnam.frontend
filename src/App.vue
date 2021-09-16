<template>
    <Header />
    <AboutMe />
    <Footer />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Header from '@/components/sections/Header.vue'
import AboutMe from '@/components/sections/AboutMe/AboutMe.vue'
import Footer from '@/components/sections/Footer.vue'

@Options({
    name: 'App',
    components: {
        Header,
        AboutMe,
        Footer,
    },
})
export default class App extends Vue {}
</script>
