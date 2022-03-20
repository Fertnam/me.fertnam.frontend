<template>
    <div :class="$style.skill">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Skill extends Vue {}
</script>

<style lang="scss" module>
.skill {
    padding: 0.6rem 1.5rem;

    color: var(--white);
    white-space: nowrap;

    background-color: var(--blue-100);

    user-select: none;
}
</style>
