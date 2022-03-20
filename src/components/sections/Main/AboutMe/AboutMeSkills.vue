<template>
    <div :class="$style.aboutMeSkills">
        <Skill :class="$style.item">HTML / CSS</Skill>
        <Skill :class="$style.item">JavaScript</Skill>
        <Skill :class="$style.item">TypeScript</Skill>
        <Skill :class="$style.item">Vue.js</Skill>
        <Skill :class="$style.item">Nuxt.js</Skill>
        <Skill :class="$style.item">Node.js</Skill>
        <Skill :class="$style.item">Express</Skill>
        <Skill :class="$style.item">PHP</Skill>
        <Skill :class="$style.item">Laravel</Skill>
        <Skill :class="$style.item">SQL</Skill>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Skill from '@/components/utils/Skill.vue'

@Options({
    components: {
        Skill,
    },
})
export default class AboutMeSkills extends Vue {}
</script>

<style lang="scss" module>
.aboutMeSkills {
    display: flex;

    flex-wrap: wrap;
    gap: 1rem;
}
</style>
