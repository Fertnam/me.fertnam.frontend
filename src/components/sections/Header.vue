<template>
    <KinesisContainer tag="header" :class="$style.header">
        <div :class="$style.assets">
            <KinesisElement
                :class="[$style.stars, $style.bottom, $style.item]"
                :strength="5"
                :offset-coefficient="120"
            />

            <KinesisElement
                :class="[$style.stars, $style.middle, $style.item]"
                :strength="8"
                :offset-coefficient="100"
            />

            <KinesisElement
                :class="[$style.stars, $style.top, $style.item]"
                :strength="11"
                :offset-coefficient="80"
            />

            <KinesisElement
                :class="[$style.html, $style.item]"
                :strength="25"
                :offset-coefficient="7"
            />

            <KinesisElement
                :class="[$style.css, $style.item]"
                :strength="25"
                :offset-coefficient="5"
                :gravity-y="1.6"
            />

            <KinesisElement
                :class="[$style.node, $style.item]"
                :strength="25"
                :offset-coefficient="7"
            />

            <KinesisElement
                :class="[$style.js, $style.item]"
                :strength="25"
                :offset-coefficient="4.2"
                :gravity-y="2"
            />

            <KinesisElement
                :class="[$style.earth, $style.item]"
                :strength="15"
                :offset-coefficient="2.5"
                :gravity-y="2"
            />

            <KinesisElement
                :class="[$style.saturn, $style.item]"
                :strength="15"
                :offset-coefficient="1.5"
                :gravity-y="2.5"
            />

            <KinesisElement
                :class="[$style.uranus, $style.item]"
                :strength="15"
                :offset-coefficient="1.5"
                :gravity-y="2"
            />

            <KinesisElement
                :class="[$style.surface, $style.top, $style.item]"
                :strength="15"
                :offset-coefficient="15"
            />

            <KinesisElement
                :class="[$style.surface, $style.bottom, $style.item]"
                :strength="20"
                :offset-coefficient="10"
            />
        </div>

        <KinesisElement
            :class="$style.info"
            :strength="30"
            :offset-coefficient="7"
        >
            <span :class="$style.name">Fertnam</span>
            <span :class="$style.position">Web Developer</span>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { defineComponent } from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default defineComponent({
    name: 'Header',
    components: {
        KinesisContainer,
        KinesisElement,
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
