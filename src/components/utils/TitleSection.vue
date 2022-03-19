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
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: fit-content;

    color: var(--blue-200);
    font-size: 2rem;

    user-select: none;

    &:after {
        margin-top: 0.6rem;

        width: 60%;
        height: 5px;

        background-color: var(--blue-200);

        content: '';
    }
}
</style>
