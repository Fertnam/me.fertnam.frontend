<template>
    <Parallax tag="header" :class="$style.header">
        <div :class="$style.assets">
            <ParallaxItem
                :class="[$style.stars, $style.bottom, $style.item]"
                :offset-coefficient="120"
            />

            <ParallaxItem
                :class="[$style.stars, $style.middle, $style.item]"
                :offset-coefficient="100"
            />

            <ParallaxItem
                :class="[$style.stars, $style.top, $style.item]"
                :offset-coefficient="80"
            />

            <ParallaxItem
                :class="[$style.html, $style.item]"
                :offset-coefficient="7"
            />

            <ParallaxItem
                :class="[$style.css, $style.item]"
                :offset-coefficient="5"
                :gravity-y="1.6"
            />

            <ParallaxItem
                :class="[$style.node, $style.item]"
                :offset-coefficient="7"
            />

            <ParallaxItem
                :class="[$style.js, $style.item]"
                :offset-coefficient="4.2"
                :gravity-y="2"
            />

            <ParallaxItem
                :class="[$style.earth, $style.item]"
                :offset-coefficient="2.5"
                :gravity-y="2"
            />

            <ParallaxItem
                :class="[$style.saturn, $style.item]"
                :offset-coefficient="1.5"
                :gravity-y="2.5"
            />

            <ParallaxItem
                :class="[$style.uranus, $style.item]"
                :offset-coefficient="1.5"
                :gravity-y="2"
            />

            <ParallaxItem
                :class="[$style.surface, $style.top, $style.item]"
                :offset-coefficient="15"
            />

            <ParallaxItem
                :class="[$style.surface, $style.bottom, $style.item]"
                :offset-coefficient="10"
            />
        </div>

        <ParallaxItem :class="$style.info" :offset-coefficient="7">
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </ParallaxItem>
    </Parallax>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parallax from '@/components/utils/Parallax/Parallax.vue'
import ParallaxItem from '@/components/utils/Parallax/ParallaxItem.vue'

export default defineComponent({
    name: 'Header',
    components: {
        Parallax,
        ParallaxItem,
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
        rgb(51, 26, 48) 0%,
        rgb(58, 66, 114) 100%
    );

    user-select: none;
    overflow: hidden;

    & > .info {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Ranchers', cursive;
        font-size: 3.5em;
        letter-spacing: 5px;

        color: #fff;

        & > .name {
            margin-bottom: 10px;
        }
    }

    & > .assets {
        & > .item {
            position: absolute;
        }

        & > .stars {
            top: -10%;
            left: -10%;

            width: 120%;
            height: 120%;

            background-size: cover;

            &.bottom {
                background-image: url('/images/header/stars/bottom.png');
            }

            &.middle {
                background-image: url('/images/header/stars/middle.png');
            }

            &.top {
                background-image: url('/images/header/stars/top.png');
            }
        }

        & > .html {
            top: 8%;
            left: 4%;

            &:before {
                content: url('/images/header/planets/html.svg');
            }
        }

        & > .css {
            top: 58%;
            left: 18%;

            &:before {
                content: url('/images/header/planets/css.svg');
            }
        }

        & > .node {
            top: 14%;
            right: 7%;

            &:before {
                content: url('/images/header/planets/node.svg');
            }
        }

        & > .js {
            top: 55%;
            right: 20%;

            &:before {
                content: url('/images/header/planets/js.svg');
            }
        }

        & > .uranus {
            top: 42%;
            left: 11%;

            &:before {
                content: url('/images/header/planets/uranus.svg');
            }
        }

        & > .earth {
            top: 20%;
            left: 33%;

            &:before {
                content: url('/images/header/planets/earth.svg');
            }
        }

        & > .saturn {
            top: 28%;
            right: 33%;

            &:before {
                content: url('/images/header/planets/saturn.svg');
            }
        }

        & > .surface {
            bottom: -2%;
            left: -10%;

            width: 120%;

            &.top {
                height: 120px;
                background-image: url('/images/header/surfaces/top.svg');
            }

            &.bottom {
                height: 70px;
                background-image: url('/images/header/surfaces/bottom.svg');
            }
        }
    }
}
</style>
