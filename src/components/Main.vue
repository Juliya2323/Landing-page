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
        <div class="main_gallery"></div>
        <div class="main_statistics"></div>
    </div>
</template>

<style scoped>

    .main_wrapper {
        padding: 0 10% 10%;
        background-color: #131313;
        font-family: 'Arial';   
        color: #FFFFFF;
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


  



</style>