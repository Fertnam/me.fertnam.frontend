<template>
    <component :is="tag" ref="scene" @mousemove="onMouseMove">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Parallax',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        speed: {
            type: Number,
            default: 0.5,
        },
        attribute: {
            type: String,
            default: 'data-parallax',
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
    computed: {
        sceneItems(): HTMLElement[] {
            return this.$refs.scene.querySelectorAll(`[${this.attribute}]`)
        },
    },
    methods: {
        onMouseMove({ pageX, pageY }: MouseEvent): void {
            const sceneWidth: number = this.$refs.scene.offsetWidth
            const sceneHeight: number = this.$refs.scene.offsetHeight

            const distX: number =
                ((pageX - sceneWidth / 2) / sceneWidth) * 100 - this.pointer.x

            const distY: number =
                ((pageY - sceneHeight / 2) / sceneHeight) * 100 - this.pointer.y

            this.pointer.x += distX * this.speed
            this.pointer.y += distY * this.speed

            this.updateSceneItemsOffset()
        },

        updateSceneItemsOffset(): void {
            this.sceneItems.forEach((item) => {
                const offsetCoefficient: number = parseInt(
                    item.getAttribute(this.attribute) as string
                )

                const translateX: number = this.pointer.x / offsetCoefficient
                const translateY: number = this.pointer.y / offsetCoefficient

                item.style.transform = `translate3d(${translateX}%, ${translateY}%, 0)`
            })
        },
    },
})
</script>
