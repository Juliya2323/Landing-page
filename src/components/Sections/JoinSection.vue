<template>
    <div class="join">
        <div class="join_background">
            <ul class="join_background_lines">
                <li class="join_background_lines_item">
                    <img :src="firstLineImg" alt="img" v-for="firstLineImg in firstLineImgs">
                </li>
                <li class="join_background_lines_item center">
                    <img :src="secondLinImg" alt="img" v-for="secondLinImg in secondLinImgs">
                </li>
                <li class="join_background_lines_item">
                    <img :src="thirdLineImg" alt="img" v-for="thirdLineImg in thirdLineImgs">
                </li>
            </ul>
        </div>
        <div class="join_info">
            <div class="join_info_title">Join our</div>
            <div class="join_info_subtitle">Community</div>
            <div class="join_info_description">Meet the Omise community,artists and collectors for platform update,announcements and more...</div>
            <base-button class="join_info_button">
                <img class="join_info_button_icon" :src="Discord" alt="svg">
                <div class="join_info_button_text">Launch Discord</div>
            </base-button>
        </div>
    </div>
</template>

<script setup>
import imgLink1 from '@/assets/images/item1.png';
import imgLink2 from '@/assets/images/item2.png';
import imgLink3 from '@/assets/images/item3.png';
import imgLink4 from '@/assets/images/item4.png';
import imgLink5 from '@/assets/images/item5.png';
import imgLink6 from '@/assets/images/item6.png';
import Discord from '@/assets/icons/discord.svg';


const firstLineImgs = [imgLink1, imgLink2];
const secondLinImgs = [imgLink3, imgLink4];
const thirdLineImgs = [imgLink5, imgLink6];

</script>

<style scoped lang="scss">
    .join {
        padding: 30px 25% 232px;
        background-color: #131313;
        font-family: 'Arial';
        font-style: normal;
        color: #FFFFFF;
        position: relative;

        &_background {

            &_lines {
                list-style: none;
                display: flex;
                flex-direction: column;
                padding: 0;
                margin: 0;
                gap: 125px;

                &_item {
                    display: flex;
                    justify-content: space-around;
                }

                &_item.center {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        &_info {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            left: 24%;
            top: 19%;


            &_title {
                font-weight: 400;
                font-size: 36px;
                line-height: 41px;
                margin-bottom: 5px;
            }

            &_subtitle {
                font-weight: 700;
                font-size: 36px;
                line-height: 41px;
                color: #5BA300;
                margin-bottom: 31px;
            }

            &_description {
                font-weight: 400;
                font-size: 22px;
                line-height: 29px;
                width: 70%;
                text-align: center;
                margin-bottom: 67px;
            }

            &_button {

                display: flex;
                align-items:center;
                padding: 20px 29px;
                gap: 12px;

                &_text {
                    font-weight: 400;
                    font-size: 14.0373px;
                    line-height: 16px;
                }
            }
        }
    }
</style>