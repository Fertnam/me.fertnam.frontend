<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

@Options({
    name: 'Container',
})
export default class Container extends Vue {}
</script>

<style lang="scss" module>
.container {
    margin: 0 auto;
    max-width: 1200px;
}
</style>
