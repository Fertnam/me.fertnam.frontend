<template>
    <section :class="$style.aboutMe">
        <Container :class="$style.container">
            <h2 :class="$style.title">Обо мне</h2>

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
                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">HTML / CSS</span>
                            <span :class="$style.value">30%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 30%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">JavaScript</span>
                            <span :class="$style.value">50%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 50%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">TypeScript</span>
                            <span :class="$style.value">40%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 40%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">Vue.js</span>
                            <span :class="$style.value">60%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 60%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">PHP</span>
                            <span :class="$style.value">70%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 70%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">Node.js</span>
                            <span :class="$style.value">80%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 80%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">Желание учиться</span>
                            <span :class="$style.value">∞</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 100%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">Laravel</span>
                            <span :class="$style.value">20%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 20%" />
                        </div>
                    </div>

                    <div :class="$style.item">
                        <div :class="$style.header">
                            <span :class="$style.title">Базы данных</span>
                            <span :class="$style.value">75%</span>
                        </div>

                        <div :class="$style.scale">
                            <div :class="$style.value" style="width: 75%" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/utils/Container.vue'

export default defineComponent({
    name: 'AboutMe',
    components: {
        Container,
    },
})
</script>

<style lang="scss" module>
.aboutMe {
    padding: 40px 0;
    min-height: 100vh;

    background-color: var(--purple);
    color: var(--white);

    & > .container {
        & > .title {
            margin-bottom: 50px;
            font-size: 2.5em;
        }

        & > .content {
            display: flex;
            gap: 100px;

            & > .info {
                flex: 1 1 50%;
                line-height: 1.5;
            }

            & > .skills {
                flex: 1 1 50%;

                & > .item {
                    //border-radius: 8px;
                    //overflow: hidden;

                    &:not(:last-child) {
                        margin-bottom: 15px;
                    }

                    & > .header {
                        display: flex;
                        justify-content: space-between;

                        margin-bottom: 10px;

                        & > .title {
                            font-weight: bold;
                        }
                    }

                    & > .scale {
                        height: 35px;
                        background-color: #21081e;

                        border-radius: 5px;
                        overflow: hidden;

                        & > .value {
                            background-color: #728597;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
