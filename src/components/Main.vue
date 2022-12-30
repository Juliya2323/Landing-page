<template>
    <div class="main_wrapper">
        <div class="main_info">
            <div class="main_info_header"> <span>Discover</span> Rare Collection of Digital Art <span>and</span> NFT</div>
            <div class="main_info_description">Digital marketplace for crypto assets and non fungible tokens (NFT)</div>
            <div class="main_info_gallery">
                <div class="gallery_img">
                    <div class="img_wrapper">
                        <img src="@/assets/main1.png" alt="img">
                    </div>
                    <div class="img_wrapper">
                        <img src="@/assets/main2.png" alt="img">
                    </div>
                    <div class="img_wrapper">
                        <img src="@/assets/main3.png" alt="img">
                    </div>
                </div>
                <div class="gallery_description">
                    <div class="description_number">100+</div>
                    <div class="description_text">The best designers</div>
                </div>
            </div>
            <div class="main_info_details">
                <div class="details_text">Discover latest Artworks</div>
                <div class="details_arrow"></div>
            </div>
        </div>
        <div class="main_gallery">
            <div class="gallery_card">
                <div class="card_source">
                    <div class="card_source_collection">Troy Ape collection</div>
                    <div class="card_source_author">@tonyti</div>
                </div>
                <div class="img_wrapper">
                    <img src="@/assets/monkey.png" alt="card">
                </div>
                <div class="card_info">
                    <div class="card_time">
                        <div class="card_time_main">23h : 41m : 11s </div>
                        <div class="card_time_additional">Remaining time</div>
                    </div>
                    <div class="card_cost">
                        <div class="card_cost_main">23.09 ETH</div>
                        <div class="card_cost_additional">Highest bid</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_statistics">
            <div class="statistics-item">
                <div class="item_main_info">10.1k+</div>
                <div class="item_additional_info">Art Work</div>
            </div>
            <div class="statistics-item">
                <div class="item_main_info">1.1M</div>
                <div class="item_additional_info">Artists</div>
            </div>
            <div class="statistics-item">
                <div class="item_main_info">38k</div>
                <div class="item_additional_info">Sales</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .main_wrapper {
        padding: 0 10% 10%;
        background-color: #131313;
        font-family: 'Arial';   
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
    }

    .main_info {
        display: flex;
        flex-direction: column;
        gap: 42px;
        max-width: 400px;
    }

    .main_info_header {
        font-weight: 700;
        font-size: 55px;
        line-height: 79px;
        letter-spacing: 0.015em;
    }

    .main_info_description {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    }

    span {
        font-weight: 400;
        font-size: 55px;
        line-height: 63px;
    }

    .main_info_gallery {
        display: flex;
        justify-content: space-between;
    }

    .gallery_img {
        display: flex;
    }

    .gallery_description {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .description_number {
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
    }

    .description_text {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.6);
    }

    .main_info_details {
        position: relative;
    }

    .details_text {
        font-weight: 700;
        font-size: 24px;
        line-height: 36%;
    }

    .details_text::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 37px;
        width: 63px;
        height: 2px;
        background-color: #5BA300;
    }

    .details_text::after {
        content: url(@/assets/arrow-right.png);
        display: inline-block;
        position: absolute;
        top: -7px;
        right: 75px;
    }

    .main_gallery {
        position: relative;
        z-index: 2;
    }

    .gallery_card {
        background-color: #131313;
        border: 1px solid #5BA300;
        padding: 31px 22px;
        display: flex;
        flex-direction: column;
        gap: 14px;

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

    .card_source {
        display: flex;
        justify-content: space-between;
    }

    .card_source_collection {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
    }

    .card_source_author {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.6);
    }

    .card_info {
        display: flex;
        justify-content: space-between;
    }

    .card_time,
    .card_cost {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4px;
    }

    .card_time_main,
    .card_cost_main {
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;
    }

    .card_time_additional,
    .card_cost_additional {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: rgba(255, 255, 255, 0.6);
    }

    .main_statistics {
        display: flex;
        flex-direction: column;
        gap: 36px;
        max-width: 130px;
        justify-content: flex-end;
    }

    .statistics-item {
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    .item_main_info {
        font-weight: 700;
        font-size: 36px;
        line-height: 41px;
    }

    .item_additional_info {
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: rgba(255, 255, 255, 0.6);
    }

    


  



</style>