<template>
    <div :class="$style.info">
        <div :class="$style.avatar">
            <img
                :class="$style.img"
                src="/images/about_me/avatar.png"
                alt="Аватар"
            />
        </div>

        <div :class="$style.description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque
            commodi dolor eligendi eum, exercitationem facere harum iste, modi
            nemo officiis possimus quam quas, sint sit ut velit veritatis. Ab
            aperiam aut, autem cupiditate debitis deserunt, earum eius enim hic
            illum nemo officia quasi quibusdam sed voluptate? Accusantium at aut
            cupiditate doloremque ducimus earum eos est ex expedita illo impedit
            incidunt ipsum itaque laudantium magnam nam porro quae quam qui,
            ratione reiciendis rerum sapiente sit tempora tempore veniam
            voluptatem? Dolore fugit hic id ipsum labore necessitatibus tempore
            temporibus ut vel voluptates! Delectus distinctio hic ipsam magnam,
            modi quam voluptate voluptates!
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AboutMeInfo',
})
</script>

<style lang="scss" module>
.info {
    text-align: center;

    & > .avatar {
        margin-bottom: 20px;
        height: 280px;

        user-select: none;
        pointer-events: none;

        & > .img {
            width: 100%;
            height: 100%;

            object-fit: contain;
        }
    }

    & > .description {
        line-height: 1.5;
    }
}
</style>
