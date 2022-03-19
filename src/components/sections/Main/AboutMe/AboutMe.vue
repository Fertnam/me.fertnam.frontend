<template>
    <section :class="$style.aboutMe">
        <TitleSection :class="$style.title">Обо мне</TitleSection>

        <div :class="$style.content">
            <div :class="$style.info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                autem dignissimos distinctio dolorem ducimus eaque enim eos et
                exercitationem id illo illum, laboriosam laudantium maiores
                maxime mollitia natus neque nihil optio quae quam quidem quod
                reprehenderit similique sunt tempore tenetur totam velit
                voluptates voluptatibus! A autem beatae commodi dicta dolorem
                dolores ex facere illum in iste iusto molestias, nam, nostrum
                perferendis perspiciatis quae totam ut vitae? Ab aliquam animi
                consequatur doloremque dolores earum eos et labore molestiae
                nihil nobis obcaecati quae, quam rem sunt suscipit, tempore.
                Atque esse, laudantium! Ab aliquid architecto ea eligendi nihil
                perspiciatis praesentium vel? Saepe, sit?
            </div>

            <div :class="$style.skills">
                <div :class="$style.item">HTML / CSS</div>
                <div :class="$style.item">JavaScript</div>
                <div :class="$style.item">TypeScript</div>
                <div :class="$style.item">Vue.js</div>
                <div :class="$style.item">Nuxt.js</div>
                <div :class="$style.item">Node.js</div>
                <div :class="$style.item">Express</div>
                <div :class="$style.item">PHP</div>
                <div :class="$style.item">Laravel</div>
                <div :class="$style.item">SQL</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import TitleSection from '@/components/utils/TitleSection.vue'

@Options({
    components: {
        TitleSection,
    },
})
export default class AboutMe extends Vue {}
</script>

<style lang="scss" module>
.aboutMe {
    & > .title {
        margin-bottom: 3rem;
    }

    & > .content {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        gap: 3rem;

        & > .info,
        & > .skills {
            flex: 1 1 45%;
        }

        & > .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;

            & > .item {
                padding: 0.6rem 1.5rem;

                color: var(--white);
                white-space: nowrap;

                background-color: var(--blue-100);

                user-select: none;
            }
        }
    }
}
</style>
