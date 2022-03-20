<template>
    <section :class="$style.aboutMe">
        <TitleSection :class="$style.title">Обо мне</TitleSection>

        <div :class="$style.content">
            <AboutMeInfo :class="$style.info" />
            <AboutMeSkills :class="$style.skills" />
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import TitleSection from '@/components/utils/TitleSection.vue'
import AboutMeInfo from '@/components/sections/Main/AboutMe/AboutMeInfo.vue'
import AboutMeSkills from '@/components/sections/Main/AboutMe/AboutMeSkills.vue'

@Options({
    components: {
        TitleSection,
        AboutMeInfo,
        AboutMeSkills,
    },
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss" module>
.aboutMe {
    & > .title {
        margin-bottom: 3rem;
    }

    & > .content {
        display: flex;

        flex-wrap: wrap;
        align-items: flex-start;

        gap: 3rem;

        & > .info,
        & > .skills {
            flex: 1 1 45%;
        }
    }
}
</style>
