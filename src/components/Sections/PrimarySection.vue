<template>
    <section class="primary">
        <div class="primary_info">
            <h2 class="info_title"> <span class="info_subtitle">Discover</span> Rare Collection of Digital Art <span class="info_subtitle">and</span> NFT</h2>
            <div class="info_description">Digital marketplace for crypto assets and non fungible tokens (NFT)</div>
            <div class="info_gallery">
                <ul class="gallery_pictures">
                    <li v-for="img in imgs" :key="img"><img :src="img" alt="img"></li>
                </ul>
                <div class="gallery_description">
                    <div class="description_number">100+</div>
                    <div class="description_text">The best designers</div>
                </div>
            </div>
            <div class="info_details">Discover latest Artworks</div>
        </div>
        <div class="primary_gallery">
            <div class="gallery_card">
                <div class="card_source">
                    <div class="card_source_collection">Troy Ape collection</div>
                    <div class="card_source_author">@tonyti</div>
                </div>
                <img :src="monkeyImg" alt="card" class="card_img">
                <div class="card_info">
                    <div class="info_time">
                        <div class="time_main">23h : 41m : 11s </div>
                        <div class="time_additional">Remaining time</div>
                    </div>
                    <div class="info_cost">
                        <div class="cost_main">23.09 ETH</div>
                        <div class="cost_additional">Highest bid</div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="primary_statistics_list">
            <li class="statistics_list_item" v-for="listItem in listItems" :key="listItem">
                <div class="item_main_info">{{ listItem.main }}</div>
                <div class="item_additional_info">{{ listItem.additional }}</div>
            </li>
        </ul>
    </section>
</template>

<script setup>
    import { reactive } from "vue";
    import Img1 from '@/assets/main1.png';
    import Img2 from '@/assets/main2.png';
    import Img3 from '@/assets/main3.png';
    import monkeyImg from '@/assets/monkey.png';
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

            .info_title {
                font-weight: 700;
                font-size: 55px;
                line-height: 79px;
                letter-spacing: 0.015em;

                .info_subtitle {
                    font-weight: 400;
                    font-size: 55px;
                    line-height: 63px;
                }
            }

            .info_description {
                font-weight: 400;
                font-size: 22px;
                line-height: 33px;
            }

            .info_gallery {
                display: flex;
                justify-content: space-between;

                .gallery_pictures {
                    display: flex;
                    justify-content: space-between;
                    list-style-type: none;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    padding-inline-start: 0;
                }

                .gallery_description {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    .description_number {
                        font-weight: 700;
                        font-size: 22px;
                        line-height: 33px;
                    }

                    .description_text {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 27px;
                        color: $grayPrint;
                    }
                }
            }

            .info_details {
                position: relative;
                font-weight: 700;
                font-size: 24px;
                line-height: 36%;
            }
            .info_details::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 37px;
                    width: 63px;
                    height: 2px;
                    background-color: #5BA300;
                }

                .info_details::after {
                    content: url(@/assets/arrow-right.png);
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

            .gallery_card {
                background-color: #131313;
                border: 1px solid #5BA300;
                padding: 31px 22px;
                display: flex;
                flex-direction: column;
                gap: 14px;

                .card_source {
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

                .card_info {
                    display: flex;
                    justify-content: space-between;

                    .info_time,
                    .info_cost {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        gap: 4px;

                        .time_main,
                        .cost_main {
                            font-weight: 400;
                            font-size: 22px;
                            line-height: 33px;
                        }

                        .time_additional,
                        .cost_additional {
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 27px;
                            color: $grayPrint;
                        }
                    }
                }
            }

            .gallery_card::after {
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

            .statistics_list_item {
                display: flex;
                flex-direction: column;
                gap: 9px;

                .item_main_info {
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 41px;
                }

                .item_additional_info {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;
                    color: $grayPrint;
                }
            }
        }
    }

    @media screen and (max-width: 1390px) {
        .primary_info {
            max-width: 350px;
        }

        
        .primary_gallery {
            align-items: flex-end;

            .card_img {
                max-width: 350px;
                height: auto;
            }

            .gallery_card::after {
                top: 107px;
                max-width: 396px;
                max-height: 609px;
            }
        }

        

    }

    @media screen and (max-width: 1165px) {
        .primary {
            flex-direction: column;
            position: relative;
            gap: 58px;
            &_info {
            min-width: 70%;
            gap: 30px;

                .info_title {
                    margin: 5px 0;
                }

                .info_gallery {
                    justify-content: flex-start;
                    gap: 25px;
                }

                .info_details::after {
                    right: 317px;
                }
            }

            &_gallery {
                justify-content: center;

                .gallery_card::after {
                    top: 40px;
                    left: 220px;
                    max-width: 396px;
                    max-height: 609px;
                }  
            }

            &_statistics_list {
                position: absolute;
                bottom: 56px;
                left: 80px;
                padding-left: 0;
            }
        }

        @media screen and (max-width: 1115px) {
            .primary_info .info_details::after {
                display: none;
            }
        }

        @media screen and (max-width: 820px) {
            .primary {
                gap: 100px;

                .primary_gallery .gallery_card[data-v-3fa90f43]::after {
                    left: 172px;
                }

                &_statistics_list {
                    position: relative;
                    align-items: center;
                    justify-content: center;
                    bottom: 0; 
                    left: 0; 
                }
            }
            
        }

        @media screen and (max-width: 714px) {
            .primary {
                gap: 90px;

                .primary_gallery .gallery_card[data-v-3fa90f43]::after {
                    left: 118px;
                }
            }
        }

        @media screen and (max-width: 632px) {
            .primary {
                gap: 90px;

                .primary_gallery .gallery_card[data-v-3fa90f43]::after {
                    left: 98px;
                }
            }
        }

    }

</style>