<template>
    <component :is="as" :class="$style.titleSection">
        <slot />
    </component>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'

export default class TitleSection extends Vue {
    @Prop({ type: String, default: 'h2' }) readonly as!: string
}
</script>

<style lang="scss" module>
.titleSection {
    position: relative;
    width: fit-content;

    color: var(--blue-200);

    user-select: none;

    &:after {
        position: absolute;
        left: 50%;
        bottom: 0;

        width: 60%;
        height: 2px;
        background-color: var(--blue-200);

        content: '';
    }
}
</style>
