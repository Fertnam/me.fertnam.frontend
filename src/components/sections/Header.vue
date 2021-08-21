<template>
    <header ref="header" :class="$style.header">
        <div :class="$style.assets">
            <img
                :class="[$style.html, $style.item]"
                src="/images/header/planets/html.svg"
                alt="Планета HTML"
                data-speed="8"
            />

            <img
                :class="[$style.css, $style.item]"
                src="/images/header/planets/css.svg"
                alt="Планета CSS"
                data-speed="10"
            />

            <img
                :class="[$style.node, $style.item]"
                src="/images/header/planets/node.svg"
                alt="Планета Node"
                data-speed="9"
            />

            <img
                :class="[$style.js, $style.item]"
                src="/images/header/planets/js.svg"
                alt="Планета JS"
                data-speed="11"
            />

            <img
                :class="[$style.earth, $style.item]"
                src="/images/header/planets/earth.svg"
                alt="Планета Земля"
                data-speed="15"
            />

            <img
                :class="[$style.saturn, $style.item]"
                src="/images/header/planets/saturn.svg"
                alt="Планета Сатурн"
                data-speed="18"
            />

            <img
                :class="[$style.jupiter, $style.item]"
                src="/images/header/planets/jupiter.svg"
                alt="Планета Юпитер"
                data-speed="20"
            />

            <img
                :class="[$style.surface, $style.top, $style.item]"
                src="/images/header/surfaces/top.svg"
                alt="Верхняя часть поверхности"
                data-speed="25"
            />

            <img
                :class="[$style.surface, $style.bottom, $style.item]"
                src="/images/header/surfaces/bottom.svg"
                alt="Нижняя часть поверхности"
                data-speed="15"
            />
        </div>

        <div :class="$style.info" data-speed="8">
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parallax from '@/classes/Parallax'

const parallax = {
    speed: 1,
    position: {
        x: 0,
        y: 0,
    },
    coordinate: {
        x: 0,
        y: 0,
    },
    coefficients: {
        info: 8,
        html: 8,
        css: 10,
        node: 9,
        js: 11,
        earth: 15,
        jupiter: 18,
        saturn: 20,
        surface: {
            top: 25,
            bottom: 15,
        },
    },
}

export default defineComponent({
    name: 'Header',
    data() {
        return {
            parallax,
        }
    },
    mounted() {
        new Parallax(this.$refs.header)
    },
})
</script>

<style lang="scss" module>
.header {
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

        font-family: 'Ranchers', cursive;
        letter-spacing: 5px;
        font-size: 3.5em;
        font-weight: bold;

        color: #fff;

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
            bottom: -2%;
            left: -10%;

            width: 120%;

            &.top {
                height: 140px;
            }

            &.bottom {
                height: 80px;
            }
        }
    }
}
</style>
