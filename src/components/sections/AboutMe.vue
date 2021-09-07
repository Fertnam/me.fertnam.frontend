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
                        <template #title>HTML / CSS</template>
                    </Progress>

                    <Progress :class="$style.item" :value="80">
                        <template #title>JavaScript</template>
                    </Progress>

                    <Progress :class="$style.item" :value="70">
                        <template #title>TypeScript</template>
                    </Progress>

                    <Progress :class="$style.item" :value="80">
                        <template #title>Vue.js</template>
                    </Progress>

                    <Progress :class="$style.item" :value="75">
                        <template #title>Nuxt.js</template>
                    </Progress>

                    <Progress :class="$style.item" :value="30">
                        <template #title>Node.js</template>
                    </Progress>

                    <Progress :class="$style.item" :value="70">
                        <template #title>PHP</template>
                    </Progress>

                    <Progress :class="$style.item" :value="50">
                        <template #title>Laravel</template>
                    </Progress>

                    <Progress :class="$style.item" :value="75">
                        <template #title>Базы данных</template>
                    </Progress>

                    <Progress :class="$style.item" :value="100">
                        <template #title>Желание учиться</template>
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

    background-color: #291627;
    color: #edcce9;

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
