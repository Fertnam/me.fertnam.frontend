<template>
    <component :is="as" :class="$style.titleSection">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TitleSection',
    props: {
        as: {
            type: String,
            default: 'h2',
        },
    },
})
</script>

<style lang="scss" module>
.titleSection {
    position: relative;
    padding-bottom: 15px;

    font-size: 2.5em;

    &:after {
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: #edcce9;

        content: '';
    }
}
</style>
