<template>
    <header :class="$style.header" />
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Header extends Vue {}
</script>

<style lang="scss" module>
.header {
    height: 100vh;
    background-color: #060e19;
}
</style>
