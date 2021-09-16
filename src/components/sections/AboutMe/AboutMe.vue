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
import { Vue, Options, Provide } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'
import TitleSection from '@/components/utils/TitleSection.vue'
import AboutMePersonal from '@/components/sections/AboutMe/AboutMePersonal.vue'
import AboutMeSkills from '@/components/sections/AboutMe/AboutMeSkills.vue'
import Personal from '@/models/Personal'
import Skill from '@/models/Skill'

@Options({
    name: 'AboutMe',
    components: {
        Container,
        TitleSection,
        AboutMePersonal,
        AboutMeSkills,
    },
})
export default class AboutMe extends Vue {
    @Provide({ reactive: true }) personal = {} as Personal
    @Provide({ reactive: true }) skills = [] as Skill[]

    // noinspection JSUnusedGlobalSymbols
    async beforeCreate(): Promise<void> {
        try {
            this.personal = await this.$services.personal.get()
            this.skills = await this.$services.skills.all()
        } catch (error) {
            console.error(error)
        }
    }
}
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
            flex-wrap: wrap;

            gap: 50px 100px;

            @include md {
                flex-wrap: nowrap;
            }

            & > .personal,
            & > .skills {
                flex: 1 1 0;
            }
        }
    }
}
</style>
