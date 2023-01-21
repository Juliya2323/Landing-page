<template>
  <section class="creators">
    <div class="creators_title">Top Creators</div>
    <div class="creators_board">
      <ul class="creators_board_list">
        <base-item
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :imgLink="item.imgLink"
          :wallet="item.wallet"
        ></base-item>
      </ul>
    </div>
    <base-transparent-button class="creators_button"
      >View ranking</base-transparent-button
    >
  </section>
</template>

<script setup>
import BaseItem from "@/components/ui/BaseItem.vue";
import imgLink1 from "@/assets/images/item1.png";
import imgLink2 from "@/assets/images/item2.png";
import imgLink3 from "@/assets/images/item3.png";
import imgLink4 from "@/assets/images/item4.png";
import imgLink5 from "@/assets/images/item5.png";
import imgLink6 from "@/assets/images/item6.png";
import imgLink7 from "@/assets/images/item7.png";
import imgLink8 from "@/assets/images/item8.png";
import imgLink9 from "@/assets/images/item9.png";
import { reactive } from "vue";

const items = reactive([
  {
    id: "1",
    name: "Lydra",
    imgLink: imgLink1,
    wallet: "191.200 ETH",
  },
  {
    id: "2",
    name: "Clipguy21",
    imgLink: imgLink2,
    wallet: "751.180 ETH",
  },
  {
    id: "3",
    name: "Lydia",
    imgLink: imgLink3,
    wallet: "600.50 ETH",
  },
  {
    id: "4",
    name: "Alan",
    imgLink: imgLink4,
    wallet: "200.10 ETH",
  },
  {
    id: "5",
    name: "Alanactra",
    imgLink: imgLink5,
    wallet: "399.110 ETH",
  },
  {
    id: "6",
    name: "MistressQ",
    imgLink: imgLink6,
    wallet: "870.10 ETH",
  },
  {
    id: "7",
    name: "Daboss",
    imgLink: imgLink7,
    wallet: "876.200 ETH",
  },
  {
    id: "8",
    name: "Ellen87",
    imgLink: imgLink8,
    wallet: "450.19 ETH",
  },
  {
    id: "9",
    name: "Lonewalker",
    imgLink: imgLink9,
    wallet: "1120.75 ETH",
  },
]);
</script>

<style scoped lang="scss">
.creators {
  background-color: #131313;
  padding: 100px 7% 70px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: center;
  font-family: "Arial";
  color: #ffffff;

  @media (min-width: 1024px) {
    padding: 20px 10% 70px;
  }

  @media (min-width: 1440px) {
    padding: 110px 10% 160px;
  }

  &_title {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }

  &_board {
    max-height: 400px;
    overflow-y: scroll;

    @media (min-width: 1440px) {
      overflow-y: visible;
      max-height: 100%;
    }

    &_list {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      justify-content: center;
      gap: 28px;
      margin: 0;
      padding: 0;
    }
  }

  &_button {
    margin-top: 30px;
  }
}
</style>
