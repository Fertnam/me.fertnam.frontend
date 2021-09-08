<template>
    <section :class="$style.aboutMe">
        <Container :class="$style.container">
            <TitleSection :class="$style.title">Обо мне</TitleSection>

            <div :class="$style.content">
                <div :class="$style.info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    atque commodi dolor eligendi eum, exercitationem facere
                    harum iste, modi nemo officiis possimus quam quas, sint sit
                    ut velit veritatis. Ab aperiam aut, autem cupiditate debitis
                    deserunt, earum eius enim hic illum nemo officia quasi
                    quibusdam sed voluptate? Accusantium at aut cupiditate
                    doloremque ducimus earum eos est ex expedita illo impedit
                    incidunt ipsum itaque laudantium magnam nam porro quae quam
                    qui, ratione reiciendis rerum sapiente sit tempora tempore
                    veniam voluptatem? Dolore fugit hic id ipsum labore
                    necessitatibus tempore temporibus ut vel voluptates!
                    Delectus distinctio hic ipsam magnam, modi quam voluptate
                    voluptates!
                </div>

                <div :class="$style.skills">
                    <Progress :class="$style.item" :value="90">
                        HTML / CSS
                    </Progress>

                    <Progress :class="$style.item" :value="80">
                        JavaScript
                    </Progress>

                    <Progress :class="$style.item" :value="70">
                        TypeScript
                    </Progress>

                    <Progress :class="$style.item" :value="80">
                        Vue.js
                    </Progress>

                    <Progress :class="$style.item" :value="75">
                        Nuxt.js
                    </Progress>

                    <Progress :class="$style.item" :value="30">
                        Node.js
                    </Progress>

                    <Progress :class="$style.item" :value="70"> PHP </Progress>

                    <Progress :class="$style.item" :value="50">
                        Laravel
                    </Progress>

                    <Progress :class="$style.item" :value="75">
                        Базы данных
                    </Progress>

                    <Progress :class="$style.item" :value="100">
                        Желание учиться
                    </Progress>
                </div>
            </div>
        </Container>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/utils/Container.vue'
import TitleSection from '@/components/utils/TitleSection.vue'
import Progress from '@/components/utils/Progress.vue'

export default defineComponent({
    name: 'AboutMe',
    components: {
        Container,
        TitleSection,
        Progress,
    },
})
</script>

<style lang="scss" module>
.aboutMe {
    padding: 40px 0 80px;
    min-height: 100vh;

    color: var(--pink-50);
    background-color: var(--purple-200);

    & > .container {
        & > .title {
            margin-bottom: 50px;
        }

        & > .content {
            display: flex;
            gap: 100px;

            & > .info {
                flex: 1 1 0;
                line-height: 1.5;
            }

            & > .skills {
                flex: 1 1 0;

                & > .item {
                    &:not(:last-child) {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
</style>
