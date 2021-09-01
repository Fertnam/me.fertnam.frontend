<template>
    <section :class="$style.feedback">
        <Container :class="$style.container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            culpa deleniti facere id, impedit ipsum itaque molestiae optio quae
            quaerat quidem quis quisquam saepe sint temporibus totam voluptas
            voluptatum! Consequatur cumque, eius esse harum hic ipsa quas
            ratione recusandae? Ab accusantium adipisci aliquid assumenda cumque
            dolores enim eos fugiat illum laudantium libero magnam nisi,
            officiis porro quae quasi recusandae reprehenderit, tempore
            veritatis vitae. Aspernatur blanditiis cupiditate dicta minima
            nesciunt, quibusdam quis recusandae tempore ut. Ab aspernatur atque
            aut beatae debitis deserunt eos et explicabo fugiat illum in
            laborum, molestiae nam necessitatibus nulla quam quisquam
            recusandae, reiciendis repudiandae sit totam voluptatibus.
            <!--            <div :class="$style.form">-->
            <!--                <div :class="$style.item">-->
            <!--                    <input :class="$style.input" type="text" required />-->
            <!--                    <span :class="$style.label">Имя:</span>-->
            <!--                    <span :class="$style.line" />-->
            <!--                </div>-->
            <!--            </div>-->
        </Container>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/utils/Container.vue'

export default defineComponent({
    name: 'Feedback',
    components: {
        Container,
    },
})
</script>

<style lang="scss" module>
.feedback {
    padding: 30px;
    height: 100vh;

    background-color: var(--blue);

    & > .container {
        & > .form {
            padding: 60px;

            width: 100%;

            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);

            border-radius: 15px;

            & > .item {
                position: relative;
                height: 40px;

                & > .label {
                    position: absolute;
                    top: 0;
                    left: 0;

                    padding: 0 10px;

                    font-size: 18px;
                    line-height: 40px;

                    transition: top 350ms, left 350ms;

                    pointer-events: none;
                }

                & > .input {
                    position: absolute;
                    top: 0;
                    left: 0;

                    z-index: 1;

                    padding: 0 10px;

                    width: 100%;
                    height: 100%;

                    border: none;
                    outline: none;
                    background: transparent;

                    &:valid,
                    &:focus {
                        & ~ .label {
                            top: -35px;
                            left: -10px;
                        }

                        & ~ .line {
                            height: 100%;
                        }
                    }
                }

                & > .line {
                    position: absolute;
                    bottom: 0;

                    width: 100%;
                    height: 2px;

                    background-color: #fff;

                    transition: height 350ms;

                    pointer-events: none;
                }
            }
        }
    }
}
</style>
