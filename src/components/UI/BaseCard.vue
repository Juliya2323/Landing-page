<template>
    <li class="gallery_card">
        <div class="gallery_card_main">
            <div class="gallery_card_main_info">
                <img :src="Icon" alt="icon">
                <div class="gallery_card_main_info_title">{{author}}</div>
            </div>
            <img :src="Status" alt="status">
        </div>
        <img :src="imgLink" alt="card_img" class="gallery_card_img">
        <div class="gallery_card_description">
            <div class="gallery_card_description_name">{{ name }}</div>
            <div class="gallery_card_description_edition">{{ edition }}</div>
        </div>
        <div class="gallery_card_purchase">
            <div class="gallery_card_purchase_price">
                <base-icon></base-icon>
                <div class="gallery_card_purchase_price_info">
                    <div class="gallery_card_purchase_price_info_title">price</div>
                    <div class="gallery_card_purchase_price_info_subtitle">{{price}}</div>
                </div>
            </div>
            <base-button class="gallery_card_purchase_button">Place a bid</base-button>
        </div>
    </li>
</template>

<script setup>
import { defineProps} from 'vue';
import Icon from '@/assets/images/icon.png';
import Status from '@/assets/icons/status.svg'; 

const props = defineProps({
    'id': String,
    'author': String, 
    'imgLink': String, 
    'name': String,  
    'edition': String, 
    'price': String, 
})

   
    


</script>

<style scoped lang="scss">
    .gallery_card {
        max-width: 370px;
        max-height: 588px;  
        background-color: #1D1D1D;
        padding: 26px 22px;
        display: flex;
        flex-direction: column;
        gap: 25px;

        &_main {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &_info {
                display: flex;
                gap: 10px;
                align-items: center;

                &_title {
                    font-weight: 700;
                    font-size: 16.6127px;
                    line-height: 25px;
                }
            }
        }

        &_description {
            display: flex;
            gap: 4px;
            flex-direction: column;

            &_name {
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
            }

            &_edition {
                font-weight: 400;
                font-size: 13px;
                line-height: 19px;
                color: rgba(255, 255, 255, 0.6);
            }
        }

        &_purchase {

            display: flex;
            justify-content: space-between;

            &_button {
                padding: 12px 44px;
            }

            &_price {
                display: flex;
                gap: 13px;
                flex-grow: 1;

                &_info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                &_title {
                    font-weight: 400;
                    font-size: 11px;
                    line-height: 16px;
                    color: rgba(255, 255, 255, 0.6);
                }

                &_subtitle {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 27px;
                }
                }
            }
        }
    }

    
</style>