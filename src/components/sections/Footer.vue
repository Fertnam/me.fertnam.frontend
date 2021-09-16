<template>
    <footer :class="$style.footer">
        <Container :class="$style.container">
            <div :class="$style.copyright">Fertnam © 2021</div>
        </Container>
    </footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'

@Options({
    name: 'Footer',
    components: { Container },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" module>
.footer {
    padding: 60px 0;
    background-color: var(--purple-100);

    & > .container {
        & > .copyright {
            font-size: 1.1em;
            text-align: center;

            color: var(--pink-50);
        }
    }
}
</style>
