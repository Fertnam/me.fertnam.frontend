<template>
    <component
        :is="tag"
        :style="`transform: translate3d(${translate.x}%, ${translate.y}%, 0); transition: transform ${duration}ms ${timing}`"
        style="will-change: transform"
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
        duration: {
            type: Number,
            default: 100,
        },
        timing: {
            type: String,
            default: 'cubic-bezier(0.23, 1, 0.32, 1)',
        },
        gravityX: {
            type: Number,
            default: 1,
        },
        gravityY: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        translate() {
            return {
                x: this.pointer.x / (this.offsetCoefficient * this.gravityX),
                y: this.pointer.y / (this.offsetCoefficient * this.gravityY),
            }
        },
    },
})
</script>
