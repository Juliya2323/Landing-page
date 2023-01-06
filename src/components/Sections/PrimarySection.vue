<template>
    <section class="primary">
        <div class="primary_info">
            <h2 class="primary_info_title"> <span class="primary_info_subtitle">Discover</span> Rare Collection of Digital Art <span class="primary_info_subtitle">and</span> NFT</h2>
            <div class="primary_info_description">Digital marketplace for crypto assets and non fungible tokens (NFT)</div>
            <div class="primary_info_gallery">
                <ul class="primary_info_gallery_pictures">
                    <li v-for="img in imgs" :key="img"><img :src="img" alt="img"></li>
                </ul>
                <div class="primary_info_gallery_description">
                    <div class="primary_info_gallery_description_number">100+</div>
                    <div class="primary_info_gallery_description_text">The best designers</div>
                </div>
            </div>
            <div class="primary_info_details">Discover latest Artworks</div>
        </div>
        <div class="primary_gallery">
            <div class="primary_gallery_card">
                <div class="primary_gallery_card_source">
                    <div class="primary_gallery_card_source_collection">Troy Ape collection</div>
                    <div class="primary_gallery_card_source_author">@tonyti</div>
                </div>
                <img :src="monkeyImg" alt="card" class="primary_gallery_card_img">
                <div class="primary_gallery_card_info">
                    <div class="primary_gallery_card_info_time">
                        <div class="primary_gallery_card_info_time_main">23h : 41m : 11s </div>
                        <div class="primary_gallery_card_info_time_additional">Remaining time</div>
                    </div>
                    <div class="primary_gallery_card_info_cost">
                        <div class="primary_gallery_card_info_cost_main">23.09 ETH</div>
                        <div class="primary_gallery_card_info_cost_additional">Highest bid</div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="primary_statistics_list">
            <li class="primary_statistics_list_item" v-for="listItem in listItems" :key="listItem">
                <div class="primary_statistics_list_item_main_info">{{ listItem.main }}</div>
                <div class="primary_statistics_list_item_additional_info">{{ listItem.additional }}</div>
            </li>
        </ul>
    </section>
</template>

<script setup>
    import { reactive } from "vue";
    import Img1 from '@/assets/images/main1.png';
    import Img2 from '@/assets/images/main2.png';
    import Img3 from '@/assets/images/main3.png';
    import monkeyImg from '@/assets/images/monkey.png';
    const imgs = reactive([Img1, Img2, Img3]);
    const listItems = [
        {
            main: '10.1k+',
            additional: 'Art Work'
        },
        {
            main: '1.1M',
            additional: 'Artists'
        },
        {
            main: '38k',
            additional: 'Sales'
        },
    ]
</script>

<style scoped lang="scss">

    $grayPrint: rgba(255, 255, 255, 0.6);

    .primary {
        padding: 0 10% 10%;
        background-color: #131313;
        font-family: 'Arial';   
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;

        &_info {
            display: flex;
            flex-direction: column;
            gap: 42px;
            max-width: 400px;

            &_title {
                font-weight: 700;
                font-size: 55px;
                line-height: 79px;
                letter-spacing: 0.015em;
            }

            &_subtitle {
                    font-weight: 400;
                    font-size: 55px;
                    line-height: 63px;
                }

            &_description {
                font-weight: 400;
                font-size: 22px;
                line-height: 33px;
            }

            &_gallery {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 5px;

                &_pictures {
                    display: flex;
                    justify-content: space-between;
                    list-style-type: none;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    padding-inline-start: 0;
                }

                &_description {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    &_number {
                        font-weight: 700;
                        font-size: 22px;
                        line-height: 33px;
                    }

                    &_text {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 27px;
                        color: $grayPrint;
                    }
                }
            }

            &_details {
                position: relative;
                font-weight: 700;
                font-size: 24px;
                line-height: 36%;
            }

            &_details::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 37px;
                    width: 63px;
                    height: 2px;
                    background-color: #5BA300;
            }

            &_details::after {
                content: url(@/assets/icons/arrow-right.svg);
                display: inline-block;
                position: absolute;
                top: -7px;
                right: 75px;
            }

        }

        &_gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;

            &_card {
                background-color: #131313;
                border: 1px solid #5BA300;
                padding: 31px 22px;
                display: flex;
                flex-direction: column;
                gap: 14px;

                &_source {
                    display: flex;
                    justify-content: space-between;

                    &_collection {
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30px;
                    }

                    &_author {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 27px;
                        color: $grayPrint;
                    }
                }

                &_info {
                    display: flex;
                    justify-content: space-between;

                    &_time,
                    &_cost {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 4px;

                        &_main {
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 33px;
                        }

                        &_additional {
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 27px;
                            color: $grayPrint;
                        }
                    }

                
                }
            }

            &_card::after {
                content: "";
                display: inline-block;
                top: 25px;
                left: 42px;
                position: absolute;
                width: 445px;
                height: 679px;
                border: 1px solid #5BA300;
                z-index: -1;
            }

            

        }

        &_statistics_list {
            display: flex;
            flex-direction: column;
            gap: 36px;
            max-width: 130px;
            justify-content: flex-end;

            &_item {
                display: flex;
                flex-direction: column;
                gap: 9px;

                &_main_info {
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 41px;
                }

                &_additional_info {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;
                    color: $grayPrint;
                }
            }
        }
    }

    @media screen and (max-width: 1336px) {
        .primary_info {
            max-width: 350px;
        }

        .primary_gallery {
            align-items: flex-end;
        }

        .primary_gallery_card::after {
            top: 78px;
        }

        .primary_info_details::after {
            right: 30px;
        }
    }

    @media screen and (max-width: 1230px) {
        .primary_gallery_card::after {
            left: 20px;
            top: 96px;
        }

        .primary_info {
            max-width: 300px;

            &_title {
                font-size: 51px;
                line-height: 65px;
            }

            &_details::after {
                right: -6px;
            }
        }
    }

    @media screen and (max-width: 1185px) {

        .primary_info_title {
            margin: 0;
        }

        .primary_gallery_card::after {
            top: 17px;
        }

        
    }

    @media screen and (max-width: 1163px) {
        .primary_gallery_card_img {
            width: 290px;
            height: auto;
        }

        .primary_gallery_card::after {
            top: 151px;
            width: 336px;
            height: 537px;
        }
    }

    @media screen and (max-width: 1000px) {

        .primary_info {
            max-width: 260px;

            &__title {
                font-size: 30px;
                line-height: 56px;

                &_subtitle {
                    font-size: 30px;
                }
            }

            &_details {
                line-height: 115%;
            }

            &_details::after {
                display: none;
            }

            &_details::before {
                top: -12px;
            }

            &_gallery {
                justify-content: space-around;
            }

            &_gallery_pictures {
                flex-direction: column;
            }
        }
        
        .primary_gallery_card::after {
            top: 310px;
        }

        
    }

    @media screen and (max-width: 930px) {
        .primary {
            flex-wrap: wrap;
            gap: 20px;

            &_info {
                max-width: 300px;

                &_gallery_pictures {
                    flex-direction: row;
                }
            }

            &_gallery {
                align-items: flex-start;

                &_card::after {
                    top: 24px;
                }
            }

            &_statistics_list {
                flex-direction: row;
                justify-content: center;
                margin: 20px 0;
                padding: 0;
                gap: 33px;
                max-width: 100%;
            }
        }
            
    }

    @media screen and (max-width: 820px) {
        .primary {
            gap: 35px;

            &_info {
                max-width: 600px;

                &_gallery {
                    justify-content: flex-start;
                    gap: 50px;
                }
            }

            &_gallery_card::after {
                top: 21px;
            }

            &_statistics_list {
                flex-direction: column;
                justify-content: flex-end;
                margin: 0;
                gap: 33px;
                max-width: 100%;
            }
        }
    }

    @media screen and (max-width: 602px) {
        .primary_statistics_list {
            flex-direction: row;
            padding-top: 30px;
        }
    }

    @media screen and (max-width: 426px) {

        .primary_info_gallery {
            gap: 30px;
        }
        .primary_gallery_card_img {
            width: 220px;
        }

        .primary_gallery_card::after {
            width: 301px;
            height: 452px;
            top: 21px;
        }
    }

    @media screen and (max-width: 381px) {

        .primary_info {
            max-width: 250px;

            &_title {
                font-size: 45px;
                line-height: 50px;
            }

            &_subtitle {
                font-size: 45px;
                line-height: 50px;
            }

            &_gallery {
                gap: 25px;
            }

            &_gallery {
                flex-wrap: wrap;
            }
        }

        

        .primary_gallery_card {
            padding: 25px 18px;
            gap: 12px;

            &_img {
                width: 210px;
            }

            &_source_collection {
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
            }

            &_source_author {
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
            }

            &_info_time_main, 
            &_info_cost_main {
                font-size: 16px;
                line-height: 20px;
            }

            &_info_time_additional, 
            &_info_cost_additional {
                font-size: 15px;
                line-height: 20px;
            }
        }
        

        .primary_gallery_card::after {
            width: 248px;
            height: 394px;
            top: 21px;
            left: 6px;
        }

        .primary_statistics_list {
            gap: 22px;

            &_item_main_info {
                font-size: 30px;
                line-height: 30px;
            }
        }

        
    }

    

</style>