<template>
    <header :class="$style.header">
        <img :class="$style.moon" src="/images/header/moon.svg" alt="Луна" />

        <img
            :class="$style.ringPlanet"
            src="/images/header/ring_planet.svg"
            alt="Планета с кольцами"
        />

        <img
            :class="$style.surface"
            src="/images/header/surface.svg"
            alt="Поверхность"
        />

        <div :class="$style.info">
            <div :class="$style.name">Fertnam</div>
            <div :class="$style.position">Web Developer</div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Header extends Vue {}
</script>

<style lang="scss" module>
.header {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background: linear-gradient(to bottom, #333c88, #466ea6);

    user-select: none;
    overflow: hidden;

    & > .info {
        font-family: 'Ranchers', cursive;
        font-size: 3.5em;

        text-align: center;

        letter-spacing: 5px;

        color: var(--white);

        opacity: 0.95;

        text-shadow: 3px 3px 3px var(--blue-300);

        & > .name {
            margin-bottom: 10px;
        }
    }

    & > .ringPlanet {
        position: absolute;
        top: 13%;
        left: 10%;
    }

    & > .moon {
        position: absolute;
        top: 20%;
        right: 12%;

        filter: drop-shadow(0 0 100px #7982c5);
    }

    & > .surface {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;

        filter: drop-shadow(0 0 100px #333c88);
    }
}
</style>
