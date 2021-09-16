<template>
    <section :class="$style.aboutMe">
        <Container :class="$style.container">
            <TitleSection :class="$style.title">Обо мне</TitleSection>

            <div :class="$style.content">
                <AboutMePersonal :class="$style.personal" />
                <AboutMeSkills :class="$style.skills" />
            </div>
        </Container>
    </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'
import TitleSection from '@/components/utils/TitleSection.vue'
import AboutMePersonal from '@/components/sections/AboutMe/AboutMePersonal.vue'
import AboutMeSkills from '@/components/sections/AboutMe/AboutMeSkills.vue'

@Options({
    name: 'AboutMe',
    components: {
        Container,
        TitleSection,
        AboutMePersonal,
        AboutMeSkills,
    },
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss" module>
.aboutMe {
    padding: 50px 0;
    min-height: 100vh;

    color: var(--pink-50);
    background-color: var(--purple-200);

    & > .container {
        & > .title {
            margin-bottom: 50px;
        }

        & > .content {
            display: flex;
            gap: 100px;

            & > .personal,
            & > .skills {
                flex: 1 1 0;
            }
        }
    }
}
</style>
