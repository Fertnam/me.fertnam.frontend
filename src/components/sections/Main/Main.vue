<template>
    <main :class="$style.main">
        <Container :class="$style.container">
            <AboutMe :class="$style.section" />
            <Portfolio :class="$style.section" />
            <WorkExperience v-if="false" :class="$style.section" />
        </Container>
    </main>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'
import AboutMe from '@/components/sections/Main/AboutMe/AboutMe.vue'
import Portfolio from '@/components/sections/Main/Portfolio/Porfolio.vue'
import WorkExperience from '@/components/sections/Main/WorkExperience/WorkExperience.vue'

@Options({
    components: {
        Container,
        AboutMe,
        Portfolio,
        WorkExperience,
    },
})
export default class Main extends Vue {}
</script>

<style lang="scss" module>
.main {
    padding: 5rem 0;

    color: var(--blue-300);
    background-color: var(--blue-50);

    & > .container {
        & > .section {
            &:not(:last-child) {
                margin-bottom: 5rem;
            }
        }
    }
}
</style>
