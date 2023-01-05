<template>
    <div class="decoration"></div>
    <section class="gallery">
        <div class="gallery_title">Trending</div>
        <stored-cards></stored-cards>
    </section>
</template>



<script setup>
import StoredCards from '@/components/StoredCards.vue';

</script>



<style scoped lang="scss">
    .gallery {
        background-color: #131313;
        padding: 39px 10% 182px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: "Arial";
        color: #FFFFFF;

       &_title {
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
       }
    }

    .decoration {
        content: '';
        background-color: #242424;
        width: 100%;
        height: 330px;
        position: absolute;
        top: 2100px;
        left: 0px;
        z-index: 1;
    }
</style>