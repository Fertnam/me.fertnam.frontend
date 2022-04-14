<template>
    <section :class="$style.portfolio">
        <TitleSection :class="$style.title">Портфолио</TitleSection>

        <div :class="$style.cards">
            <PortfolioCard
                v-for="(card, index) in cards"
                :key="index"
                :background="card.background"
            >
                {{ card.title }}
            </PortfolioCard>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import TitleSection from '@/components/utils/TitleSection.vue'
import PortfolioCard from '@/components/sections/Main/Portfolio/PortfolioCard.vue'

@Options({
    components: {
        TitleSection,
        PortfolioCard,
    },
})
export default class Portfolio extends Vue {
    private cards = [
        {
            title: 'Агентство недвижимости "Аском"',
            background: '/images/askom.png',
        },
        {
            title: 'Агентство недвижимости "Аском"',
            background: '/images/askom.png',
        },
        {
            title: 'Агентство недвижимости "Аском"',
            background: '/images/askom.png',
        },
    ]
}
</script>

<style lang="scss" module>
.portfolio {
    & > .title {
        margin-bottom: 3rem;
    }

    & > .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
