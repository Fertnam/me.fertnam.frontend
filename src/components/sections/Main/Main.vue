<template>
    <main :class="$style.main">
        <Container :class="$style.container">
            <AboutMe :class="$style.section" />
        </Container>
    </main>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'
import AboutMe from '@/components/sections/Main/AboutMe/AboutMe.vue'

@Options({
    components: {
        Container,
        AboutMe,
    },
})
export default class Main extends Vue {}
</script>

<style lang="scss" module>
.main {
    padding: 5rem 0;
    background-color: var(--blue-50);
}
</style>
