<template>
  <li class="item">
    <img :src="imgLink" alt="img" class="item_img" />
    <div class="item_info">
      <div class="item_info_title">
        <div class="item_info_title_name">{{ name }}</div>
        <base-button class="item_info_title_button">+ Follow</base-button>
      </div>
      <div class="item_info_wallet">
        <img :src="walletIcon" alt="png" class="item_info_wallet_icon" />
        <div class="item_info_wallet_summ">{{ wallet }}</div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
import walletIcon from "@/assets/icons/baseIcon.svg";

const props = defineProps({
  id: String,
  name: String,
  imgLink: String,
  wallet: String,
});
</script>

<style scoped lang="scss">
.item {
  padding: 12px 12px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap: 16px;
  border-radius: 30px;

  @media (min-width: 1024px) {
    padding: 14px 36px;
  }

  @media (min-width: 1440px) {
    padding: 22px 37px;
  }

  &_img {
    width: 65px;
    height: 65px;

    @media (min-width: 1440px) {
      width: 85px;
    height: 85px;
  }
  }

  &_info {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &_title {
      display: flex;
      justify-content: space-between;
      width: 210px;
      align-items: center;

      @media (min-width: 1440px) {
          width: 242px;
  }

      &_name {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;

        @media (min-width: 1440px) {
          font-size: 20px;
  }
      }

      &_button {
        padding: 9px 22px;
        border-radius: 17px;
      }
    }

    &_wallet {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 11px;

      &_summ {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #5ba300;
      }
    }
  }
}
</style>
