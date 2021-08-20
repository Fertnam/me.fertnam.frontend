<template>
    <header
        ref="parallax"
        :class="$style.header"
        @mousemove="parallax"
        @mouseleave="clear"
    >
        <div :class="$style.assets">
            <img
                ref="html"
                :class="[$style.html, $style.item]"
                src="/images/header/planets/html.svg"
                alt="HTML"
            />

            <img
                ref="css"
                :class="[$style.css, $style.item]"
                src="/images/header/planets/css.svg"
                alt="CSS"
            />

            <img
                ref="node"
                :class="[$style.node, $style.item]"
                src="/images/header/planets/node.svg"
                alt="Node"
            />

            <img
                ref="js"
                :class="[$style.js, $style.item]"
                src="/images/header/planets/js.svg"
                alt="JS"
            />

            <img
                ref="earth"
                :class="[$style.earth, $style.item]"
                src="/images/header/planets/earth.svg"
                alt="Земля"
            />

            <img
                ref="saturn"
                :class="[$style.saturn, $style.item]"
                src="/images/header/planets/saturn.svg"
                alt="Сатурн"
            />

            <img
                ref="jupiter"
                :class="[$style.jupiter, $style.item]"
                src="/images/header/planets/jupiter.svg"
                alt="Юпитер"
            />

            <img
                :class="[$style.surface, $style.item]"
                src="/images/header/surface.svg"
                alt="Поверхность"
            />
        </div>

        <div ref="info" :class="$style.info">
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
    methods: {
        parallax(event: MouseEvent): void {
            const parallax: HTMLElement = this.$refs.parallax as HTMLElement

            const info: HTMLElement = this.$refs.info as HTMLElement

            let x: number = (parallax.offsetWidth - event.pageX * 2) / 100
            let y: number = (parallax.offsetHeight - event.pageY * 5) / 100

            console.log(event.pageX, event.pageY)

            info.style.transform = `translateX(${x}px) translateY(${y}px)`

            const html: HTMLElement = this.$refs.html as HTMLElement

            x = (parallax.offsetWidth - event.pageX * 1.5) / 100
            y = (parallax.offsetHeight - event.pageY * 4) / 100

            html.style.transform = `translateX(${x}px) translateY(${y}px)`

            const css: HTMLElement = this.$refs.css as HTMLElement

            x = (parallax.offsetWidth - event.pageX * 1.2) / 100
            y = (parallax.offsetHeight - event.pageY * 2) / 100

            css.style.transform = `translateX(${x}px) translateY(${y}px)`

            const node: HTMLElement = this.$refs.node as HTMLElement

            x = (parallax.offsetWidth - event.pageX * 1.4) / 100
            y = (parallax.offsetHeight - event.pageY * 6) / 100

            node.style.transform = `translateX(${x}px) translateY(${y}px)`

            const js: HTMLElement = this.$refs.js as HTMLElement

            x = (parallax.offsetWidth - event.pageX * 1.3) / 100
            y = (parallax.offsetHeight - event.pageY * 3) / 100

            js.style.transform = `translateX(${x}px) translateY(${y}px)`

            const earth: HTMLElement = this.$refs.earth as HTMLElement

            x = (parallax.offsetWidth - event.pageX) / 100
            y = (parallax.offsetHeight - event.pageY) / 100

            earth.style.transform = `translateX(${x}px) translateY(${y}px)`

            const jupiter: HTMLElement = this.$refs.jupiter as HTMLElement

            x = (parallax.offsetWidth - event.pageX * -2) / 100
            y = (parallax.offsetHeight - event.pageY * -2) / 100

            jupiter.style.transform = `translateX(${x}px) translateY(${y}px)`

            const saturn: HTMLElement = this.$refs.saturn as HTMLElement

            x = (parallax.offsetWidth - event.pageX * 0.5) / 100
            y = (parallax.offsetHeight - event.pageY * 0.5) / 100

            saturn.style.transform = `translateX(${x}px) translateY(${y}px)`
        },
        clear(): void {
            // this.$refs.info.style.transform = 'translate(0)'
        },
    },
})
</script>

<style lang="scss" module>
.header {
    //@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background: linear-gradient(
        to bottom,
        rgba(51, 26, 48, 1) 0%,
        rgba(87, 99, 171, 1) 100%
    );

    overflow: hidden;

    & > .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        //font-family: 'Bungee Inline', cursive;
        font-family: 'Ranchers', cursive;
        letter-spacing: 5px;
        font-size: 3.5em;
        font-weight: bold;

        color: #fff;

        //will-change: transform;

        transition: transform 100ms linear;

        user-select: none;

        & > .name {
            margin-bottom: 10px;
        }
    }

    & > .assets {
        & > .item {
            position: absolute;

            pointer-events: none;
            user-select: none;

            will-change: transform;

            transition: transform 100ms linear;
        }

        & > .html {
            top: 8%;
            left: 4%;
        }

        & > .css {
            top: 48%;
            left: 18%;
        }

        & > .node {
            top: 14%;
            right: 7%;
        }

        & > .js {
            top: 55%;
            right: 20%;
        }

        & > .jupiter {
            top: 37%;
            left: 11%;
        }

        & > .earth {
            top: 20%;
            left: 33%;
        }

        & > .saturn {
            top: 28%;
            right: 33%;
        }

        & > .surface {
            bottom: 0;
            left: 0;

            width: 100%;
            height: 128px;
        }
    }
}
</style>
