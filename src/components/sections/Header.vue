<template>
    <header ref="parallax" :class="$style.header" @mousemove="parallax">
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
    data() {
        return {
            speed: 0.5,
            position: {
                x: 0,
                y: 0,
            },
            coordinatePercent: {
                x: 0,
                y: 0,
            },
            coefficients: {
                info: 8,
                html: 20,
                css: 25,
                node: 20,
                js: 20,
                earth: 30,
                jupiter: 30,
                saturn: 35,
            },
        }
    },
    methods: {
        parallax(event: MouseEvent): void {
            const parallax: HTMLElement = this.$refs.parallax as HTMLElement

            const parallaxWidth = parallax.offsetWidth
            const parallaxHeight = parallax.offsetHeight

            const coordinateX = event.pageX - parallaxWidth / 2
            const coordinateY = event.pageY - parallaxHeight / 2

            this.coordinatePercent.x = (coordinateX / parallaxWidth) * 100
            this.coordinatePercent.y = (coordinateY / parallaxHeight) * 100

            const info: HTMLElement = this.$refs.info as HTMLElement
            const html: HTMLElement = this.$refs.html as HTMLElement
            const css: HTMLElement = this.$refs.css as HTMLElement
            const node: HTMLElement = this.$refs.node as HTMLElement
            const js: HTMLElement = this.$refs.js as HTMLElement
            const earth: HTMLElement = this.$refs.earth as HTMLElement
            const jupiter: HTMLElement = this.$refs.jupiter as HTMLElement
            const saturn: HTMLElement = this.$refs.saturn as HTMLElement

            const distX: number = this.coordinatePercent.x - this.position.x
            const distY: number = this.coordinatePercent.y - this.position.y

            this.position.x += distX * this.speed
            this.position.y += distY * this.speed

            info.style.transform = `translate(${
                this.position.x / this.coefficients.info
            }%, ${this.position.y / this.coefficients.info}%)`

            html.style.transform = `translate(${
                this.position.x / this.coefficients.html
            }%, ${this.position.y / this.coefficients.html}%)`

            css.style.transform = `translate(${
                this.position.x / this.coefficients.css
            }%, ${this.position.y / this.coefficients.css}%)`

            node.style.transform = `translate(${
                this.position.x / this.coefficients.node
            }%, ${this.position.y / this.coefficients.node}%)`

            js.style.transform = `translate(${
                this.position.x / this.coefficients.js
            }%, ${this.position.y / this.coefficients.js}%)`

            earth.style.transform = `translate(${
                this.position.x / this.coefficients.earth
            }%, ${this.position.y / this.coefficients.earth}%)`

            jupiter.style.transform = `translate(${
                this.position.x / this.coefficients.jupiter
            }%, ${this.position.y / this.coefficients.jupiter}%)`

            saturn.style.transform = `translate(${
                this.position.x / this.coefficients.saturn
            }%, ${this.position.y / this.coefficients.saturn}%)`
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
