<template>
    <li class="gallery_card">
        <BaseCard>
            <div class="card_tite">
                <img :src="Icon" alt="icon">
                <div class="title_text">{{author}}</div>
                <img :src="Status" alt="status">
            </div>
            <img :src="`${imgLink}`" alt="card_img">
        </BaseCard>
    </li>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import Icon from '@/assets/icon.png';
import Status from '@/assets/status.png';
export default {
  props: ['id', 'author', 'imgLink', 'name', 'edition', 'price'],

}

</script>

<style scoped lang="scss">
    .gallery_card {
        max-width: 370px;
        max-height: 588px;  
        background-color: #1D1D1D;
        padding: 26px 22px;
        display: flex;
        flex-direction: column;
        .card_tite {
        display: flex;
        justify-content: space-between;

        .title_text {
            
        }
    }
    }

    
</style>