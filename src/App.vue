<template>
    <Header :class="$style.inner" />

    <section :class="$style.section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex magnam nemo
        nisi odio officiis sit voluptate. A aliquid cumque cupiditate earum
        eveniet fugiat minima obcaecati reprehenderit soluta, unde. Alias
        aliquam aliquid asperiores, corporis culpa cum dignissimos ducimus
        exercitationem, facere illum impedit ipsum iure maiores maxime modi
        molestiae officiis pariatur possimus recusandae ut veritatis voluptas
        voluptate voluptatem! Animi atque, dolores, eos facere ipsa ipsam magnam
        necessitatibus nesciunt nobis perferendis possimus sit. Adipisci amet,
        animi at aut dolores doloribus eaque esse eum fugit maxime minus
        molestiae molestias mollitia nulla obcaecati odio officia optio
        quisquam, repellat repellendus sapiente similique sint soluta unde
        veritatis.
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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Knewave&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');

body {
}

.section {
    height: 100vh;
    background-color: rebeccapurple;
    position: relative;
}
</style>
