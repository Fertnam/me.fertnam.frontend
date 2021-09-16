<template>
    <div :class="$style.personal">
        <div :class="$style.avatar">
            <img :class="$style.img" :src="personal.avatar" alt="Аватар" />
        </div>

        <div :class="$style.description" v-text="personal.description" />
    </div>
</template>

<script lang="ts">
import { Vue, Options, Inject } from 'vue-property-decorator'
import Personal from '@/models/Personal'

@Options({
    name: 'AboutMePersonal',
})
export default class AboutMePersonal extends Vue {
    @Inject() personal!: Personal
}
</script>

<style lang="scss" module>
.personal {
    text-align: center;

    & > .avatar {
        margin-bottom: 20px;
        height: 280px;

        user-select: none;
        pointer-events: none;

        & > .img {
            width: 100%;
            height: 100%;

            object-fit: contain;
        }
    }

    & > .description {
        line-height: 1.5;
    }
}
</style>
