<template>
    <div :class="$style.portfolioCard" @click="sayHello">
        <div
            :class="$style.background"
            :style="{ backgroundImage: `url(${background})` }"
        />

        <div :class="$style.info">
            <div :class="$style.title">
                <slot />
            </div>

            <div v-if="false" :class="$style.more">Подробнее</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'

export default class PortfolioCard extends Vue {
    @Prop({ type: String, required: true })
    readonly background!: string

    public sayHello(): void {
        // alert('Hello')
    }
}
</script>

<style lang="scss" module>
.portfolioCard {
    position: relative;
    height: 400px;

    &:hover {
        & > .background {
            opacity: 0;
        }

        & > .info {
            & > .title,
            & > .more {
                transform: translateY(0);
                opacity: 0.8;
            }
        }
    }

    & > .background,
    & > .info {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
    }

    & > .background {
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        background-color: #f5f5f5;

        transition: opacity 300ms ease-out;
    }

    & > .info {
        display: flex;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        cursor: pointer;

        & > .title,
        & > .more {
            opacity: 0;

            will-change: transform;
            transition: opacity 200ms ease-out, transform 200ms ease-out;
        }

        & > .title {
            margin-bottom: 1.6rem;
            width: 60%;

            font-size: 1.3rem;
            text-align: center;
            line-height: 1.3;

            transform: translateY(-1rem);
        }

        & > .more {
            padding: 0.8rem 1.5rem;
            border: 2px solid var(--blue-100);

            text-transform: uppercase;

            transform: translateY(1rem);
        }
    }
}
</style>
