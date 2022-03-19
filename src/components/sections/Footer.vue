<template>
    <footer :class="$style.footer">
        <Container :class="$style.container">Fertnam © 2022</Container>
    </footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'

@Options({
    components: {
        Container,
    },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" module>
.footer {
    padding: 4rem 0;

    color: var(--white);
    text-align: center;

    background-color: var(--blue-200);
}
</style>
