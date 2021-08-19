<template>
    <header :class="$style.header">
        <div :class="$style.assets">
            <img
                :class="[$style.html, $style.item]"
                src="/images/header/planets/html.svg"
                alt="HTML"
            />

            <img
                :class="[$style.css, $style.item]"
                src="/images/header/planets/css.svg"
                alt="CSS"
            />

            <img
                :class="[$style.node, $style.item]"
                src="/images/header/planets/node.svg"
                alt="Node"
            />

            <img
                :class="[$style.js, $style.item]"
                src="/images/header/planets/js.svg"
                alt="JS"
            />

            <img
                :class="[$style.earth, $style.item]"
                src="/images/header/planets/earth.svg"
                alt="Земля"
            />

            <img
                :class="[$style.saturn, $style.item]"
                src="/images/header/planets/saturn.svg"
                alt="Сатурн"
            />

            <img
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

        <div :class="$style.info">
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
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

        font-family: Arial, sans-serif;
        font-size: 3.5em;
        font-weight: bold;

        color: #fff;

        & > .name {
            margin-bottom: 10px;
        }
    }

    & > .assets {
        & > .item {
            position: absolute;

            pointer-events: none;
            user-select: none;
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
