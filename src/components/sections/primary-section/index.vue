<template>
  <section class="primary">
    <div class="primary_info">
      <h2 class="primary_info_title">
        <span class="primary_info_subtitle">Discover</span> Rare Collection of
        Digital Art <span class="primary_info_subtitle">and</span> NFT
      </h2>
      <div class="primary_info_description">
        Digital marketplace for crypto assets and non fungible tokens (NFT)
      </div>
      <div class="primary_info_gallery">
        <ul class="primary_info_gallery_pictures">
          <li v-for="img in imgs" :key="img"><img :src="img" alt="img" /></li>
        </ul>
        <div class="primary_info_gallery_description">
          <div class="primary_info_gallery_description_number">100+</div>
          <div class="primary_info_gallery_description_text">
            The best designers
          </div>
        </div>
      </div>
      <div class="primary_info_details">Discover latest Artworks</div>
    </div>
    <div class="primary_gallery">
      <div class="primary_gallery_card">
        <div class="primary_gallery_card_source">
          <div class="primary_gallery_card_source_collection">
            Troy Ape collection
          </div>
          <div class="primary_gallery_card_source_author">@tonyti</div>
        </div>
        <img :src="monkeyImg" alt="card" class="primary_gallery_card_img" />
        <div class="primary_gallery_card_info">
          <div class="primary_gallery_card_info_time">
            <div class="primary_gallery_card_info_time_main">
              23h : 41m : 11s
            </div>
            <div class="primary_gallery_card_info_time_additional">
              Remaining time
            </div>
          </div>
          <div class="primary_gallery_card_info_cost">
            <div class="primary_gallery_card_info_cost_main">23.09 ETH</div>
            <div class="primary_gallery_card_info_cost_additional">
              Highest bid
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="primary_statistics_list">
      <li
        class="primary_statistics_list_item"
        v-for="listItem in listItems"
        :key="listItem"
      >
        <div class="primary_statistics_list_item_main_info">
          {{ listItem.main }}
        </div>
        <div class="primary_statistics_list_item_additional_info">
          {{ listItem.additional }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import Img1 from "@/assets/images/main1.png";
import Img2 from "@/assets/images/main2.png";
import Img3 from "@/assets/images/main3.png";
import monkeyImg from "@/assets/images/monkey.png";
const imgs = reactive([Img1, Img2, Img3]);
const listItems = [
  {
    main: "10.1k+",
    additional: "Art Work",
  },
  {
    main: "1.1M",
    additional: "Artists",
  },
  {
    main: "38k",
    additional: "Sales",
  },
];
</script>

<style scoped lang="scss">
$grayPrint: rgba(255, 255, 255, 0.6);

.primary {
  padding: 20px 7% 10%;
  background-color: #131313;
  font-family: "Arial";
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  justify-content: center;

  

  &_info {
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 400px;

    &_title {
      font-weight: 700;
      font-size: 42px;
      line-height: 55px;
      letter-spacing: 0.015em;
      margin: 0;
    }

    &_subtitle {
      font-weight: 400;
      font-size: 42px;
      line-height: 49px;
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
      gap: 20px;

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
          font-size: 14px;
          line-height: 17px;
          color: $grayPrint;
        }
      }
    }

    &_details {
      position: relative;
      font-weight: 700;
      font-size: 22px;
      line-height: 38%;
    }

    &_details::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 28px;
      width: 63px;
      height: 2px;
      background-color: #5ba300;
    }

    &_details::after {
      content: url(@/assets/icons/arrow-right.svg);
      display: none;
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
      border: 1px solid #5ba300;
      padding: 27px 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;

      &_img {
        width: 260px;
        height: auto;
      }

      &_source {
        display: flex;
        justify-content: space-between;

        &_collection {
          font-weight: 700;
          font-size: 17px;
          line-height: 30px;
        }

        &_author {
          font-weight: 400;
          font-size: 16px;
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
            font-size: 17px;
            line-height: 33px;
          }

          &_additional {
            font-weight: 400;
            font-size: 16px;
            line-height: 27px;
            color: $grayPrint;
          }
        }
      }
    }

    &_card::after {
      content: "";
      display: inline-block;
      top: 13px;
      left: 10px;
      position: absolute;
      width: 298px;
      height: 493px;
      border: 1px solid #5ba300;
      z-index: -1;
    }
  }

  &_statistics_list {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin: 0;
    padding: 0;

    &_item {
      display: flex;
      flex-direction: column;
      gap: 9px;

      &_main_info {
        font-weight: 700;
        font-size: 30px;
        line-height: 29px;
      }

      &_additional_info {
        font-weight: 700;
        font-size: 17px;
        line-height: 26px;
        color: $grayPrint;
      }
    }
  }
}


</style>
