<template>
    <div :class="$style.progress">
        <div :class="$style.header">
            <span :class="$style.title">
                <slot />
            </span>

            <span :class="$style.value" v-text="titleValue" />
        </div>

        <div :class="$style.scale">
            <div :class="$style.value" :style="`width: ${scaleValue}%`" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
    name: 'Progress',
})
export default class Progress extends Vue {
    @Prop({ type: Number, default: 0 }) readonly value!: number | null

    get isInfinite(): boolean {
        return this.value === null
    }

    get titleValue(): string {
        return this.isInfinite ? '∞' : `${this.value}%`
    }

    get scaleValue(): number {
        return this.isInfinite ? 100 : (this.value as number)
    }
}
</script>

<style lang="scss" module>
.progress {
    & > .header {
        display: flex;
        justify-content: space-between;

        margin-bottom: 10px;

        user-select: none;

        & > .title {
            font-weight: bold;
        }
    }

    & > .scale {
        height: 20px;

        background-color: var(--purple-300);
        border-radius: 10px;

        & > .value {
            height: 100%;

            background: linear-gradient(
                to right,
                var(--purple-50) 0%,
                var(--pink-100) 100%
            );

            border-radius: inherit;
        }
    }
}
</style>
