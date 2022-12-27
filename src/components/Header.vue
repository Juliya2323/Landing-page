<template>
    <div class="header_wrapper">
        <div class="header_info_wrapper">
            <Logo></Logo>
            <nav>
                <ul>
                    <li v-for="(link, index) in links" :key="index"><a href="#">{{ link }}</a></li>
                </ul>
            </nav>
        </div>
        <div class="details_wrapper">
            <div class="details_search">
                <img src="@/assets/search.png" alt="search">
            </div>
            <div class="deatils_button_wrapper">
                <MoreButton></MoreButton>
            </div>
            <div class="details_download">
                <img src="@/assets/arrow.png" alt="download">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from "vue";
    import Logo from '@/components/Logo.vue';
    import MoreButton from '@/components/MoreButton.vue';
    const links = reactive(['Discover', 'Marketplace', 'More']);
</script>

<style scoped>
  .header_wrapper {
      background-color: #131313;
      display: flex;
      justify-content:space-between;
      align-items: center;
      padding: 80px 88px 124px 66px;
  }

  .header_info_wrapper {
    display: flex;
    gap: 100px;
  }

  a {
    font-family: 'Arial';
    font-weight: 400;
    line-height: 25px;
    font-size: 22px;
    color: #FFFFFF;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 63px;
  }

  .details_wrapper {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;
  }

  .details_download {
    background-color: #5BA300;
    padding: 14px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
</style>