<template>
    <footer :class="$style.footer">
        <Container :class="$style.container">
            <div :class="$style.copyright">Fertnam © 2021</div>
        </Container>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/utils/Container.vue'

export default defineComponent({
    name: 'Footer',
    components: {
        Container,
    },
})
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
