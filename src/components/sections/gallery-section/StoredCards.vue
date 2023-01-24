<template>
  <div class="cards">
    <div class="cards_description">
      <div class="cards_title">Actions</div>
      <button class="cards_subtitle">
        <div class="cards_text">View all</div>
        <div class="cards_arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
    </div>
    <div class="cards_container">
      <ul class="cards_container_action-cards">
        <base-card
          v-for="actionCard in actionCards"
          :key="actionCard.id"
          :id="actionCard.id"
          :author="actionCard.author"
          :imgLink="actionCard.imgLink"
          :name="actionCard.name"
          :edition="actionCard.edition"
          :price="actionCard.price"
        >
        </base-card>
      </ul>
    </div>
  </div>
  <div class="cards">
    <div class="cards_description">
      <div class="cards_title">Editor’s Pick</div>
      <button class="cards_subtitle">
        <div class="cards_text">View all</div>
        <div class="cards_arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
    </div>
    <div class="cards_container">
      <ul class="cards_container_editor-cards">
        <base-card
          v-for="editorCard in editorCards"
          :key="editorCard.id"
          :id="editorCard.id"
          :author="editorCard.author"
          :imgLink="editorCard.imgLink"
          :name="editorCard.name"
          :edition="editorCard.edition"
          :price="editorCard.price"
        >
        </base-card>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import gallery5 from "@/assets/images/gallery5.png";
import gallery6 from "@/assets/images/gallery6.png";
import BaseCard from "@/components/UI/BaseCard.vue";

const actionCards = reactive([
  {
    id: "1",
    author: "Mark Ross",
    imgLink: gallery1,
    name: "Silver Age Astronaut",
    edition: "Edition 1 of 5",
    price: "1.5 ETH",
  },
  {
    id: "2",
    author: "Rose Edinburgh",
    imgLink: gallery2,
    name: "Mr Abstract",
    edition: "Edition 1 of 3",
    price: "2.11 ETH",
  },
  {
    id: "3",
    author: "Eve Lillith",
    imgLink: gallery3,
    name: "Golden Cheetah",
    edition: "Edition 1 of 5",
    price: "1.0 ETH",
  },
]);
const editorCards = reactive([
  {
    id: "4",
    author: "Mark Ross",
    imgLink: gallery4,
    name: "The Last Dream",
    edition: "Edition 1 of 5",
    price: "1.1 ETH",
  },
  {
    id: "5",
    author: "Rose Edinburgh",
    imgLink: gallery5,
    name: "Old Man Paul",
    edition: "Only Edition",
    price: "2.1 ETH",
  },
  {
    id: "6",
    author: "Eve Lillith",
    imgLink: gallery6,
    name: "Hand of god",
    edition: "Edition 1 of 2",
    price: "1.0 ETH",
  },
]);
</script>

<style scoped lang="scss">
.cards {
  background-color: #131313;
  font-family: "Arial";
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;

  @media (min-width: 1024px) {
    padding-bottom: 96px;
    gap: 43px;
  }

  &_description {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  &_title {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;

      @media (min-width: 1024px) {
        font-size: 36px;
        line-height: 54px;
      }
    }
    &_subtitle {
      padding: 0;
      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      white-space:nowrap;
      background-color: transparent;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease-out;
      gap: 20px;
      display: flex;
      justify-content: space-between;
      align-items:center;

      &:hover {
        color: #5ba300;
        svg {
          path {
            stroke:#5ba300;
          }
        }
      }

      @media (min-width: 1024px) {
        font-size: 24px;
        line-height: 36px;
        padding-left: 36px;
      }
    
    }

    &_arrow {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  &_container {
    overflow-x: scroll;

    @media (min-width: 1440px) {
      overflow-x:visible;
      }

    &_action-cards,
    &_editor-cards {
      display: flex;
      gap: 25px;
      justify-content: space-between;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  
}
</style>
