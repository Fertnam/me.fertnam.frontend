<template>
    <main :class="$style.main">
        <Container>
            <TitleSection> About Me </TitleSection>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium autem delectus esse est, explicabo illum ipsum molestiae
            nisi saepe sed. Asperiores, corporis cum distinctio exercitationem
            illum labore laudantium maxime obcaecati omnis quo temporibus veniam
            vitae, voluptas. Asperiores dolore labore soluta ut. Beatae fuga
            laborum magni nesciunt perspiciatis saepe ut? Ex, iure qui. Ad
            adipisci alias asperiores aut culpa cum cumque, dignissimos dolor
            dolorem dolorum eaque enim error ex, explicabo facere facilis fuga
            ipsa laudantium magni neque provident quae quasi quidem quo
            recusandae reiciendis repellendus repudiandae soluta veritatis
            voluptatum. Blanditiis, officiis temporibus? Dolor expedita fugit
            molestias sint? Adipisci dicta illum nisi.
        </Container>
    </main>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import Container from '@/components/utils/Container.vue'
import TitleSection from '@/components/utils/TitleSection.vue'

@Options({
    components: { Container, TitleSection },
})
export default class Main extends Vue {}
</script>

<style lang="scss" module>
.main {
    height: 100vh;
    background-color: var(--blue-50);
}
</style>
