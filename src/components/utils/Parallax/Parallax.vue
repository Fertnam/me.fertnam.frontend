<template>
    <component :is="tag" @mousemove="updatePointer">
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Parallax',
    provide() {
        return {
            pointer: this.pointer,
        }
    },
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        speed: {
            type: Number,
            default: 0.5,
        },
    },
    data() {
        return {
            pointer: {
                x: 0,
                y: 0,
            },
        }
    },
    methods: {
        updatePointer({ pageX, pageY }) {
            const sceneWidth = this.$el.offsetWidth
            const sceneHeight = this.$el.offsetHeight

            const distX =
                ((pageX - sceneWidth / 2) / sceneWidth) * 100 - this.pointer.x

            const distY =
                ((pageY - sceneHeight / 2) / sceneHeight) * 100 - this.pointer.y

            this.pointer.x += distX * this.speed
            this.pointer.y += distY * this.speed
        },
    },
})
</script>
