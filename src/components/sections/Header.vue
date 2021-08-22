<template>
    <Parallax tag="header" :class="$style.header">
        <div :class="$style.assets">
            <img
                :class="[$style.stars, $style.item]"
                src="/images/header/stars_3.png"
                alt="Планета Юпитер"
                data-parallax="150"
            />

            <img
                :class="[$style.stars, $style.item]"
                src="/images/header/stars_2.png"
                alt="Планета Юпитер"
                data-parallax="100"
            />

            <!--            <img-->
            <!--                :class="[$style.stars, $style.item]"-->
            <!--                src="/images/header/stars.png"-->
            <!--                alt="Планета Юпитер"-->
            <!--                data-parallax="150"-->
            <!--            />-->

            <img
                :class="[$style.html, $style.item]"
                src="/images/header/planets/html.svg"
                alt="Планета HTML"
                data-parallax="3"
            />

            <img
                :class="[$style.css, $style.item]"
                src="/images/header/planets/css.svg"
                alt="Планета CSS"
                data-parallax="2"
            />

            <img
                :class="[$style.node, $style.item]"
                src="/images/header/planets/node.svg"
                alt="Планета Node"
                data-parallax="2.5"
            />

            <img
                :class="[$style.js, $style.item]"
                src="/images/header/planets/js.svg"
                alt="Планета JS"
                data-parallax="2"
            />

            <img
                :class="[$style.earth, $style.item]"
                src="/images/header/planets/earth.svg"
                alt="Планета Земля"
                data-parallax="6.5"
            />

            <img
                :class="[$style.saturn, $style.item]"
                src="/images/header/planets/saturn.svg"
                alt="Планета Сатурн"
                data-parallax="8"
            />

            <img
                :class="[$style.jupiter, $style.item]"
                src="/images/header/planets/jupiter.svg"
                alt="Планета Юпитер"
                data-parallax="7"
            />

            <img
                :class="[$style.surface, $style.top, $style.item]"
                src="/images/header/surfaces/top.svg"
                alt="Верхняя часть поверхности"
                data-parallax="9"
            />

            <img
                :class="[$style.surface, $style.bottom, $style.item]"
                src="/images/header/surfaces/bottom.svg"
                alt="Нижняя часть поверхности"
                data-parallax="7"
            />
        </div>

        <div :class="$style.info" data-parallax="5">
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </div>
    </Parallax>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parallax from '@/components/utils/Parallax.vue'

export default defineComponent({
    name: 'Header',
    components: {
        Parallax,
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
        position: relative;

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

        & > .stars {
            object-fit: cover;

            top: -10%;
            left: -10%;

            width: 120%;
            height: 120%;
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
