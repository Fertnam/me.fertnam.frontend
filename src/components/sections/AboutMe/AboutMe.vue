<template>
    <section :class="$style.aboutMe">
        <Container :class="$style.container">
            <TitleSection :class="$style.title">Обо мне</TitleSection>

            <div :class="$style.content">
                <AboutMeInfo :class="$style.info" />
                <AboutMeSkills :class="$style.skills" />
            </div>
        </Container>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/utils/Container.vue'
import TitleSection from '@/components/utils/TitleSection.vue'
import AboutMeInfo from '@/components/sections/AboutMe/AboutMeInfo.vue'
import AboutMeSkills from '@/components/sections/AboutMe/AboutMeSkills.vue'

export default defineComponent({
    name: 'AboutMe',
    components: {
        Container,
        TitleSection,
        AboutMeInfo,
        AboutMeSkills,
    },
})
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

            & > .info,
            & > .skills {
                flex: 1 1 0;
            }
        }
    }
}
</style>
