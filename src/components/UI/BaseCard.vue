<template>
    <li class="gallery_card">
        <div class="card_main">
            <div class="main_info">
                <img :src="icon" alt="icon">
                <div class="info_title">{{author}}</div>
            </div>
            <img :src="status" alt="status">
        </div>
        <img :src="`${imgLink}`" alt="card_img" class="card_img">
        <div class="card_description">
            <div class="description_name">{{ name }}</div>
            <div class="description_edition">{{ edition }}</div>
        </div>
        <div class="card_purchase">
            <div class="purchase_price">
                <base-icon></base-icon>
                <div class="price_info">
                    <div class="price_title">price</div>
                    <div class="price_subtitle">{{price}}</div>
                </div>
            </div>
            <base-button class="purchase_button">Place a bid</base-button>
        </div>
    </li>
</template>

<script>

import Icon from '@/assets/icon.png';
import Status from '@/assets/status.png'; 

export default {
    props: ['id', 'author', 'imgLink', 'name', 'edition', 'price'],
    data() {
        return {
            icon: Icon,
            status: Status
        }
    }
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
        gap: 25px;
        .card_main {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .main_info {
                display: flex;
                gap: 10px;
                align-items: center;

                .ingo_title {
                    font-weight: 700;
                    font-size: 16.6127px;
                    line-height: 25px;
                }
            }
        }

        .card_description {
            display: flex;
            gap: 4px;
            flex-direction: column;

            .description_name {
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
            }

            .description_edition {
                font-weight: 400;
                font-size: 13px;
                line-height: 19px;
                color: rgba(255, 255, 255, 0.6);
            }
        }

        .card_purchase {

            display: flex;
            justify-content: space-between;
            .purchase_button {
                padding: 12px 44px;
            }

            .purchase_price {
                display: flex;
                gap: 13px;

                .price_info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .price_title {
                        font-weight: 400;
                        font-size: 11px;
                        line-height: 16px;
                        color: rgba(255, 255, 255, 0.6);
                    }

                    .price_subtitle {
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 27px;
                    }
                }
            }
        }
    }

    
</style>