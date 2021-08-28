<template>
    <Header />

    <section :class="$style.section">
        <div :class="$style.form">
            <div :class="$style.item">
                <input :class="$style.input" type="text" required />
                <span :class="$style.label">Имя:</span>
                <span :class="$style.line" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/sections/Header.vue'

export default defineComponent({
    name: 'App',
    components: {
        Header,
    },
})
</script>

<style lang="scss" module>
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');

* {
    box-sizing: border-box;
}

.section {
    padding: 30px;
    height: 100vh;

    background-color: #3c273a;
    color: #fff;

    & > .form {
        padding: 60px;

        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);

        border-radius: 15px;

        & > .item {
            position: relative;

            width: 300px;
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
</style>
