<template>
    <section :class="$style.workExperience">
        <TitleSection :class="$style.title">Опыт работы</TitleSection>

        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            doloribus, aspernatur quibusdam corrupti facere ex maxime quo
            temporibus, provident repellendus quasi. Vero perspiciatis nobis
            fuga saepe animi quaerat, exercitationem dolore hic inventore qui in
            at, ad aperiam veritatis consectetur iure minus ipsam earum natus
            nulla commodi quod. Ipsa eveniet mollitia distinctio labore harum
            tenetur numquam. Ratione libero reiciendis accusamus vero provident
            unde ex. Necessitatibus rem incidunt eveniet minus esse itaque saepe
            sint ullam recusandae fugiat! Officiis officia nisi facilis dolore
            illum possimus corrupti architecto explicabo cum odit! Quidem
            ducimus exercitationem deleniti molestiae perferendis, sit,
            voluptatem rerum, vel saepe molestias eaque eum quae obcaecati
            corrupti dolorum voluptatibus? Modi voluptates cupiditate nihil quo,
            eligendi harum dicta? Vero adipisci velit possimus in molestiae
            placeat eaque aperiam est illo, officia tempore voluptas. Blanditiis
            ipsa quia tempora necessitatibus culpa iure. Dolorum dolores sequi,
            nemo natus, sint aliquid debitis quas laboriosam reiciendis, atque
            corrupti! Ratione nihil id cupiditate minus voluptates nemo et
            minima illo, labore vitae distinctio officiis sed incidunt?
            Necessitatibus quae voluptates quisquam, molestiae mollitia eos!
            Cumque facere tempora ipsa, in accusantium modi facilis autem
            repudiandae laborum animi cupiditate numquam dicta blanditiis
            molestias excepturi quibusdam quasi soluta neque nihil, alias
            eligendi. Quidem unde sint quam nesciunt, est libero voluptates.
            Delectus, nihil impedit rem nostrum error provident excepturi neque
            cum necessitatibus eos atque laudantium sint qui ipsa asperiores
            alias ea eaque enim molestiae minima architecto ad. Molestias
            aspernatur pariatur quaerat officia dicta aliquam voluptates amet at
            reiciendis sunt ipsum tempora laudantium maxime facere repellat
            perspiciatis corporis nesciunt quis consequuntur exercitationem
            aliquid quasi, fugit rem. Consequuntur, tempora voluptatum laborum
            cum, amet culpa ipsam sapiente quidem necessitatibus ex, sit
            consectetur dolores ullam maxime. Tempore impedit officia ipsum
            error sit quae magni adipisci, exercitationem commodi sapiente,
            repudiandae natus suscipit recusandae optio sunt ad neque ipsam
            ratione facere voluptates? Magnam, aut nam ea dicta fugit quo cumque
            ipsa dignissimos ipsum pariatur officia voluptas ab, nihil similique
            omnis ratione ad. Dolorem similique expedita reprehenderit impedit,
            molestias quos, itaque, eligendi non facere doloremque commodi
            dolore? Assumenda, perferendis! Cupiditate error minima nisi, quae
            placeat sunt iure vel dicta perspiciatis doloribus ipsa incidunt
            obcaecati culpa nobis alias doloremque odio ad soluta eaque natus
            consequuntur veniam dolorum beatae. Consequuntur officia nemo non
            doloremque voluptates deleniti nulla neque ducimus rerum, asperiores
            tenetur ratione sit, distinctio atque dolorum. Ad, magni vel
            voluptate, numquam non deleniti explicabo iusto deserunt sit
            quisquam distinctio culpa. Amet perferendis architecto minus esse
            corporis fuga distinctio ab quis numquam, cumque debitis, quae aut
            cupiditate nihil. Voluptatem amet quia nihil praesentium nostrum,
            quos ex nulla veritatis nesciunt excepturi. Necessitatibus nostrum
            assumenda doloremque, aut laudantium qui enim eum, adipisci, dolor
            unde beatae rerum quos? Ea quos repudiandae, accusamus labore illum
            autem molestiae! Adipisci odio tempora quibusdam eos dignissimos
            enim aliquam culpa assumenda iste. Culpa qui quas dignissimos, enim
            a laboriosam delectus odio est voluptas laudantium! Natus totam rem
            molestias, eum ducimus asperiores molestiae. Vero et nisi facere
            nobis quos officiis in, quas quia ipsam perferendis quasi obcaecati,
            vel voluptate consequatur. Atque totam hic quibusdam eos!
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
export default class WorkExperience extends Vue {}
</script>

<style lang="scss" module>
.workExperience {
    & > .title {
        margin-bottom: 3rem;
    }
}
</style>
