<!--suppress JSUnresolvedVariable -->
<template>
    <KinesisContainer :class="$style.header" tag="header" :duration="650">
        <div :class="$style.assets">
            <KinesisElement
                :class="[$style.stars, $style.bottom]"
                :strength="4"
            />

            <KinesisElement
                :class="[$style.stars, $style.middle]"
                :strength="7"
            />

            <KinesisElement
                :class="[$style.stars, $style.top]"
                :strength="10"
            />

            <KinesisElement :class="$style.html" :strength="25" />

            <KinesisElement :class="$style.css" :strength="20" />

            <KinesisElement :class="$style.node" :strength="25" />

            <KinesisElement :class="$style.js" :strength="18" />

            <KinesisElement :class="$style.earth" :strength="17" />

            <KinesisElement :class="$style.saturn" :strength="15" />

            <KinesisElement :class="$style.uranus" :strength="14" />

            <KinesisElement
                :class="[$style.surface, $style.top]"
                :strength="10"
            />

            <KinesisElement
                :class="[$style.surface, $style.bottom]"
                :strength="13"
            />
        </div>

        <KinesisElement :class="$style.info" :strength="30">
            <div :class="$style.name">Fertnam</div>
            <div :class="$style.position">Web Developer</div>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { Vue, Options } from 'vue-property-decorator'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

@Options({
    name: 'Header',
    components: {
        KinesisContainer,
        KinesisElement,
    },
})
export default class Header extends Vue {}
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
        var(--purple-100) 0%,
        var(--blue) 100%
    );

    user-select: none;
    overflow: hidden;

    & > .info {
        position: relative;

        font-family: 'Ranchers', cursive;
        font-size: 2.5em;

        text-align: center;
        letter-spacing: 5px;

        color: var(--white);

        opacity: 95%;

        @include lg {
            font-size: 3.5em;
        }

        & > .name {
            margin-bottom: 10px;
        }
    }

    & > .assets {
        & > .stars {
            position: absolute;

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

        & > .surface {
            position: absolute;

            bottom: -3%;
            left: -10%;

            width: 120%;

            background-repeat: no-repeat;
            background-size: 100%;

            &.top {
                height: 120px;
                background-image: url('/images/header/surfaces/top.svg');
            }

            &.bottom {
                height: 75px;
                background-image: url('/images/header/surfaces/bottom.svg');
            }
        }

        @include lg {
            & > .html {
                position: absolute;

                top: 8%;
                left: 4%;

                &:before {
                    content: url('/images/header/planets/html.svg');
                }
            }

            & > .css {
                position: absolute;

                top: 58%;
                left: 18%;

                &:before {
                    content: url('/images/header/planets/css.svg');
                }
            }

            & > .node {
                position: absolute;

                top: 14%;
                right: 7%;

                &:before {
                    content: url('/images/header/planets/node.svg');
                }
            }

            & > .js {
                position: absolute;

                top: 55%;
                right: 20%;

                &:before {
                    content: url('/images/header/planets/js.svg');
                }
            }

            & > .uranus {
                position: absolute;

                top: 42%;
                left: 11%;

                &:before {
                    content: url('/images/header/planets/uranus.svg');
                }
            }

            & > .earth {
                position: absolute;

                top: 20%;
                left: 33%;

                &:before {
                    content: url('/images/header/planets/earth.svg');
                }
            }

            & > .saturn {
                position: absolute;

                top: 28%;
                right: 33%;

                &:before {
                    content: url('/images/header/planets/saturn.svg');
                }
            }
        }
    }
}
</style>
