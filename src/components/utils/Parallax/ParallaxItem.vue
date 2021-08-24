<template>
    <component
        :is="tag"
        :style="`transform: ${transform}`"
        style="transition: transform 100ms linear; will-change: transform"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ParallaxItem',
    inject: ['pointer'],
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        offsetCoefficient: {
            type: Number,
            required: true,
        },
    },
    computed: {
        transform() {
            const translateX = this.pointer.x / this.offsetCoefficient
            const translateY = this.pointer.y / this.offsetCoefficient

            return `translate3d(${translateX}%, ${translateY}%, 0)`
        },
    },
})
</script>
