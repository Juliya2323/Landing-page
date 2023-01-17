<template>
  <div class="header_header">
    <header class="header">
    <div class="header_wrapper">
      <base-logo class="header_wrapper_logo"></base-logo>
      <nav class="header_wrapper_nav" :class="{ open: isOpen }">
        <ul class="header_wrapper_nav_list">
          <li v-for="link in links" :key="link.id">
            <router-link to="navigateTo" class="header_wrapper_nav_list_item">
            {{link.name}}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header_container">
      <img :src="Search" alt="search" class="header_container_search" />
      <base-transparent-button class="header_container_button"></base-transparent-button>
      <img :src="Download" alt="download" class="header_container_download" />
      <button class="header_container_burger" v-on:click="switchNav">
        <img :src="Burger" alt="burger_button" class="burger"/>
      </button>
    </div>
  </header>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Search from "@/assets/icons/search.svg";
import Download from "@/assets/icons/arrow.svg";
import Burger from "@/assets/icons/burger.svg";
const links = reactive([{name: "Discover", id: "Discover"}, {name: "Marketplace", id: "Marketplace"}, {name: "More", id: "More"}]);
const isOpen = ref(false);

function switchNav() {
  isOpen.value = !isOpen.value;
}

function navigateTo() {
  
}
</script>

<style scoped lang="scss">
$bgc: #131313;

.header_header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 7;
}

.header {
  background-color: $bgc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 50px 45px;
  }

  @media (min-width: 1440px) {
    padding: 63px 88px 63px 66px;
  }

  &_wrapper {
    display: flex;
    align-items: center;
    gap: 25px;
    position: relative;

    &_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    @media (min-width: 768px) {
      gap: 40px;
    }

    

    &_nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      transform: translate(-130%, 0);
      transition: transform 0.2s ease-out;
      cursor: pointer;

      @media (min-width: 768px) {
        transform: none;
        position: relative;
      }

      &.open {
        transform: translate(-3%, 0);
        flex-direction: column;
        background-color: #131313;
        padding-top: 30px;
        width: 100vw;
        border: 0.3px solid transparent;
      }

      &_list {
        display: flex;
        flex-direction: column;
        gap: 30px;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;

        @media (min-width: 768px) {
        flex-direction: row;
      }

        &_item {
          font-family: "Arial";
          font-weight: 400;
          line-height: 25px;
          font-size: 22px;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }

  &_container {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      gap: 20px;
    }

    &_burger {
      z-index: 10;
    }
    
    &_search {
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
      }
    }

    &_download {
      background-color: #5ba300;
      padding: 14px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
      background-color: #5ba300;
      box-shadow: 0 0 5px #5ba300;
      transform: translateY(-5px);
    }

    &:active {
      background-color: #84c436;
    }
    }

    &_button {
      display: none;

      @media (min-width: 800px) {
        display: block;
        cursor: pointer;
      }
    }


    &_burger {
      background-color: $bgc;
      border: none;
      padding: 0;
      margin: 0;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
