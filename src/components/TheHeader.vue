<template>
    <header class="header">
        <div class="header_wrapper">
            <Logo></Logo>
            <nav class="header_nav">
                <ul class="header_nav_list">
                    <li v-for="(link, index) in links" :key="index"><a :href="`#${link}`" class="header_nav_list_item">{{ link }}</a></li>
                </ul>
            </nav>
        </div>
        <div class="header_container">
                <img :src="Search" alt="search" class="header_search">
                <BaseTransparentButton class="header_button"></BaseTransparentButton>
                <img src="@/assets/arrow.png" alt="download" class="header_download">
        </div>
      </header>
</template>

<script setup>
    import { reactive } from "vue";
    import Search from '@/assets/search.png';
    import Logo from '@/components/Logo.vue';
    import BaseTransparentButton from '@/components/BaseTransparentButton.vue';
    const links = reactive(['Discover', 'Marketplace', 'More']);

</script>

<style scoped lang="scss">

  $bgc: #131313;

  .header {
    background-color: $bgc;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 80px 88px 124px 66px;

      &_wrapper {
          display: flex;
          gap: 100px;
      }

      &_nav_list {
            display: flex;
            flex-wrap: wrap;
            gap: 63px;
            list-style-type: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;

            &_item {
              font-family: 'Arial';
              font-weight: 400;
              line-height: 25px;
              font-size: 22px;
              color: #FFFFFF;
              text-decoration: none;
            }
      }

      &_container {
        display: flex;
        gap: 28px;
        justify-content: center;
        align-items: center;
      }

      &_download {
        background-color: #5BA300;
        padding: 14px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &_nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
         
  
</style>