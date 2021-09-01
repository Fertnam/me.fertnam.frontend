<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Container',
})
</script>

<style lang="scss" module>
.container {
    margin: 0 auto;
    max-width: 1200px;
}
</style>
