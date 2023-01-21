<template>
  <section class="gallery">
    <div class="gallery_title">Trending</div>
    <stored-cards></stored-cards>
  </section>
</template>

<script setup>
import StoredCards from "@/components/sections/gallery-section/StoredCards.vue";
</script>

<style scoped lang="scss">
.gallery {
  background-color: #131313;
  padding: 25px 7% 10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-family: "Arial";
  color: #ffffff;

  @media (min-width: 1024px) {
    padding: 25px 10% 30px;
  }

  @media (min-width: 1440px) {
    padding: 39px 10% 30px;
  }

  &_title {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
