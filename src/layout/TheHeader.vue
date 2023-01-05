<template>
    <header class="header">
        <div class="header_wrapper">
            <base-logo class="header_wrapper_logo"></base-logo>
            <nav class="header_wrapper_nav">
                <ul class="header_wrapper_nav_list">
                    <li v-for="(link, index) in links" :key="index"><a :href="`#${link}`" class="header_wrapper_nav_list_item">{{ link }}</a></li>
                </ul>
            </nav>
        </div>
        <div class="header_container">
                <img :src="Search" alt="search" class="header_container_search">
                <base-tramsparent-button class="header_container_button"></base-tramsparent-button>
                <img src="@/assets/arrow.png" alt="download" class="header_container_download">
        </div>
      </header>
</template>

<script setup>
    import { reactive } from "vue";
    import Search from '@/assets/search.png';
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

          
        &_nav {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &_list {
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

          
      }

      }

      &_container {
        display: flex;
        gap: 28px;
        justify-content: center;
        align-items: center;

        &_download {
          background-color: #5BA300;
          padding: 14px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

      }

      
    }
         
    
    @media screen and (max-width: 1090px) {
      .header {
        padding: 70px 70px 80px 60px;

          &_wrapper {
            gap: 80px;
          }

          &_nav_list {
            gap: 50px;
          }

          &_container {
            gap: 28px;
          }
      }
    }

    @media screen and (max-width: 1000px) {
      .header {
        padding: 60px 60px 70px 50px;

          &_wrapper {
            gap: 70px;
          }

          &_nav_list {
            gap: 40px;
          }

          &_container {
            gap: 25px;
          }
      }
    }

    @media screen and (max-width: 940px) {
      .transparent_button {
        display: none;
      }
    }

    @media screen and (max-width: 760px) {
      
    }

    @media screen and (max-width: 670px) {
      
    }

    @media screen and (max-width: 455px) {
      
    }


  
</style>