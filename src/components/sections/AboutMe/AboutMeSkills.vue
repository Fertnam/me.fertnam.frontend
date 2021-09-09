<template>
    <div :class="$style.skills">
        <Progress :class="$style.item" :value="90"> HTML / CSS </Progress>

        <Progress :class="$style.item" :value="80">JavaScript</Progress>

        <Progress :class="$style.item" :value="65">TypeScript</Progress>

        <Progress :class="$style.item" :value="80">Vue.js</Progress>

        <Progress :class="$style.item" :value="75">Nuxt.js</Progress>

        <Progress :class="$style.item" :value="30">Node.js</Progress>

        <Progress :class="$style.item" :value="70">PHP</Progress>

        <Progress :class="$style.item" :value="50">Laravel</Progress>

        <Progress :class="$style.item" :value="75">Базы данных</Progress>

        <Progress :class="$style.item" :value="100">Желание учиться</Progress>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Progress from '@/components/utils/Progress.vue'

export default defineComponent({
    name: 'AboutMeSkills',
    components: {
        Progress,
    },
})
</script>

<style lang="scss" module>
.skills {
    & > .item:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
