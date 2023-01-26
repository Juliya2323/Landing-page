<template>
  <li class="card">
    <div class="card_main">
      <div class="card_info">
        <img :src="Icon" alt="icon" />
        <div class="card_title">{{ author }}</div>
      </div>
      <button class="card_status" @click="activateStatus">
        <svg
        class="card_status_svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="card_status_img"
          d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
          stroke="white"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="{status: statusIsActive}"
        />
      </svg>
      </button>
    </div>
    <img :src="imgLink" alt="card_img" class="card_img" />
    <div class="card_description">
      <div class="description_name">{{ name }}</div>
      <div class="description_edition">{{ edition }}</div>
    </div>
    <div class="card_purchase">
      <div class="card_price">
        <base-icon></base-icon>
        <div class="price_info">
          <div class="info_title">price</div>
          <div class="info_subtitle">
            {{ price }}
          </div>
        </div>
      </div>
      <base-button class="card_button">Place a bid</base-button>
    </div>
  </li>
</template>

<script setup>
import { defineProps, ref } from "vue";
import Icon from "@/assets/images/icon.png";

const props = defineProps({
  id: String,
  author: String,
  imgLink: String,
  name: String,
  edition: String,
  price: String,
});
const statusIsActive = ref(false);
function activateStatus() {
  statusIsActive.value = !statusIsActive.value;
  console.log('wwworks!!')
}
</script>

<style scoped lang="scss">
.card {
  max-width: 370px;
  max-height: 588px;
  background-color: #1d1d1d;
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  gap: 13px;

  &_img {
    display: flex;
    width: 260px;
    width: fit-content;
    height: auto;

    @media (min-width: 1024px) {
      width: 325px;
      height: 332px;
    }
  }

  &_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_info {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &_title {
    font-weight: 700;
    font-size: 16.6127px;
    line-height: 25px;
  }

  &_status {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    box-sizing: border-box;

    &:hover {
      path {
        stroke: #6c9f2d;
      }
    }

    .status {
        stroke: #6c9f2d;
        fill: #6c9f2d;
    }
  }

  &_description {
    display: flex;
    gap: 4px;
    flex-direction: column;
  }
  .description_name {
    font-weight: 700;
    font-size: 17px;
    line-height: 26px;

    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  .description_edition {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);

    @media (min-width: 1024px) {
      font-size: 13px;
      line-height: 19px;
    }
  }

  &_purchase {
    display: flex;
    justify-content: space-between;
  }

  &_price {
    display: flex;
    gap: 13px;
    flex-grow: 1;
  }

  &_button {
    padding: 10px 20px;

    @media (min-width: 1024px) {
      padding: 12px 44px;
    }
  }
  .price_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info_title {
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    .info_subtitle {
      font-weight: 700;
      font-size: 16px;
      line-height: 27px;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
}
</style>
