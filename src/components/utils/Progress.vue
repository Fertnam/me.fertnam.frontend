<template>
    <div :class="$style.progress">
        <div :class="$style.header">
            <span :class="$style.title">
                <slot />
            </span>

            <span :class="$style.value">{{ value }}%</span>
        </div>

        <div :class="$style.scale">
            <div :class="$style.value" :style="`width: ${value}%`" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Progress',
    props: {
        value: {
            type: Number,
            default: 0,
        },
    },
})
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
