<template>
    <nav :class="$style.navigation">
        <Container :class="$style.menu">
            <div :class="$style.item">
                <fa-icon :class="$style.icon" icon="user" />
                <span :class="$style.value">Обо мне</span>
            </div>

            <div :class="$style.item">
                <fa-icon :class="$style.icon" icon="box-archive" />
                <span :class="$style.value">Портфолио</span>
            </div>

            <div :class="$style.item">
                <fa-icon :class="$style.icon" icon="download" />
                <span :class="$style.value">PDF</span>
            </div>
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
        user-select: none;

        & > .item {
            padding: 1.1rem 0.8rem;

            cursor: pointer;
            transition: background-color var(--transition-duration);

            &:last-child {
                margin-left: auto;
            }

            &:hover {
                background-color: var(--blue-300);
            }

            & > .icon {
                margin-right: 0.5rem;
            }
        }
    }
}
</style>
