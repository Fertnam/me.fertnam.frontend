<template>
    <nav :class="$style.navigation">
        <Container :class="$style.menu">
            <div :class="$style.item">About me</div>
            <div :class="$style.item">Portfolio</div>
            <div :class="$style.item">Work Experience</div>
            <div :class="$style.item">PDF</div>
        </Container>
    </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'

@Options({
    components: {
        Container,
    },
})
export default class Navigation extends Vue {}
</script>

<style lang="scss" module>
.navigation {
    color: var(--white);
    background-color: var(--blue-200);

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    & > .menu {
        display: flex;

        & > .item {
            padding: 25px 15px;

            cursor: pointer;
            transition: background-color var(--transition-duration);

            &:last-child {
                margin-left: auto;
            }

            &:hover {
                background-color: var(--blue-300);
            }
        }
    }
}
</style>
