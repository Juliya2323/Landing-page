<template>
  <header class="header">
    <div class="header_wrapper">
      <base-logo class="header_wrapper_logo"></base-logo>
      <button class="header_wrapper_button" v-on:click="switchNav">
        <img :src="Burger" alt="burger_button"/>
      </button>
      <nav class="header_wrapper_nav" :class="{ open: isOpen }">
        <ul class="header_wrapper_nav_list">
          <li v-for="(link, index) in links" :key="index">
            <a :href="`#${link}`" class="header_wrapper_nav_list_item">{{
              link
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header_container">
      <img :src="Search" alt="search" class="header_container_search" />
      <base-transparent-button
        class="header_container_button"
      ></base-transparent-button>
      <img :src="Download" alt="download" class="header_container_download" />
    </div>
  </header>
</template>

<script setup>
import { reactive, ref } from "vue";
import Search from "@/assets/icons/search.svg";
import Download from "@/assets/icons/arrow.svg";
import Burger from "@/assets/icons/burger.svg";
const links = reactive(["Discover", "Marketplace", "More"]);
const isOpen = ref(false);

function switchNav() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss">
$bgc: #131313;

.header {
  background-color: $bgc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;

  &_wrapper {
    display: flex;
    gap: 25px;
    position: relative;

    &_button {
      background-color: $bgc;
      border: none;
      padding: 0;
      margin: 0;
    }

    &_nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      transform: translate(-100%, 75%);
      transition: transform 0.2s ease-out;

      &.open {
        transform: translate(79%, 75%);
      }

      &_list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;

        &_item {
          font-family: "Arial";
          font-weight: 400;
          line-height: 25px;
          font-size: 22px;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }

  &_container {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;

    &_download {
      background-color: #5ba300;
      padding: 14px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &_button {
      display: none;
    }
  }
}
</style>
