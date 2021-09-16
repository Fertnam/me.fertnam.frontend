<template>
    <div :class="$style.skills">
        <Progress
            v-for="item in skills"
            :key="item.id"
            :class="$style.item"
            :value="item.progress"
        >
            {{ item.name }}
        </Progress>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Inject } from 'vue-property-decorator'
import Progress from '@/components/utils/Progress.vue'
import Skill from '@/types/Skill'

@Options({
    name: 'AboutMeSkills',
    components: {
        Progress,
    },
})
export default class AboutMeSkills extends Vue {
    @Inject() skills!: Skill[]
}
</script>

<style lang="scss" module>
.skills {
    & > .item:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
