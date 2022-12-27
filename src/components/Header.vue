<template>
    <div class="header_wrapper">
        <img src="./assets/Logo.png" alt="logo" class="header_logo">
        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index"><a href="#">{{ link }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { reactive } from "vue";
    const links = reactive(['discover', 'marketplace', 'more']);
</script>

<style scoped>
  .header_wrapper {
      background-color: #131313;
      display: flex;
      flex-wrap: wrap;
      gap: 100px;
  }
</style>