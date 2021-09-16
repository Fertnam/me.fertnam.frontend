<template>
    <component :is="as" :class="$style.titleSection">
        <slot />
    </component>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
    name: 'TitleSection',
})
export default class TitleSection extends Vue {
    @Prop({ type: String, default: 'h2' }) readonly as!: string
}
</script>

<style lang="scss" module>
.titleSection {
    position: relative;
    padding-bottom: 15px;

    font-size: 2.5em;
    opacity: 80%;

    user-select: none;

    &:after {
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: var(--pink-50);

        content: '';
    }
}
</style>
