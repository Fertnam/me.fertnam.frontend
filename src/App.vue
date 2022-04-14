<template>
    <Header />

    <div :class="$style.content">
        <Navigation :class="$style.navigation" />
        <Main :class="$style.main" />
    </div>

    <Footer />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Header from '@/components/sections/Header.vue'
import Navigation from '@/components/sections/Navigation.vue'
import Main from '@/components/sections/Main/Main.vue'
import Footer from '@/components/sections/Footer.vue'

@Options({
    components: {
        Header,
        Navigation,
        Main,
        Footer,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss" module>
.content {
    & > .navigation {
        position: sticky;
        top: 0;

        z-index: 10;
    }
}
</style>
