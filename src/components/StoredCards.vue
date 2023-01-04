<template>
    <div class="cards_wrapper">
        <div class="cards_description">
            <div class="description_title"></div>
            <div class="description_subtitle"></div>
        </div>
        <div class="cards_container">
            <BaseCard></BaseCard>
        </div>
    </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue';
</script>

<style scoped lang="scss">
    .cards_wrapper {
        padding: 0 10% 10%;
        background-color: #131313;
        font-family: 'Arial';   
        color: #FFFFFF;
        display: flex;
        flex-direction: column;

        .cards_description {

        }
    }
</style>