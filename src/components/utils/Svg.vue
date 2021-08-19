<template>
    <svg />
</template>

<script>
export default {
    name: 'Svg',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.loadSrc()
    },
    methods: {
        async loadSrc() {
            if (!this.src) return false

            const svg = new DOMParser().parseFromString(
                (await this.$axios.get(this.src)).data,
                'image/svg+xml'
            ).documentElement

            ;[...this.$el.attributes].forEach((attribute) =>
                svg.setAttribute(attribute.nodeName, attribute.nodeValue)
            )

            this.$el.outerHTML = svg.outerHTML
        },
    },
}
</script>
