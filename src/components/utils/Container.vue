<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Container extends Vue {}
</script>

<style lang="scss" module>
.container {
    margin: 0 auto;
    max-width: 1200px;
}
</style>
