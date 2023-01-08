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
  padding: 25px 7% 30px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-family: "Arial";
  color: #ffffff;

  &_title {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
