<template>
    <footer :class="$style.footer">
        <Container :class="$style.container">Fertnam 2021</Container>
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
    padding: 80px 0;

    background-color: var(--blue-200);

    color: var(--white);
    text-align: center;
}
</style>
