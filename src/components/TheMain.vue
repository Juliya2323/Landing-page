<template>
  <main id="primary">
    <primary-section></primary-section>
    <gallery-section id="gallery"></gallery-section>
    <creators-section id="creators"></creators-section>
    <join-section></join-section>
  </main>
</template>

<script setup>
import PrimarySection from "@/components/sections/primary-section/index.vue";
import GallerySection from "@/components/sections/gallery-section/index.vue";
import CreatorsSection from "@/components/sections/creators-section/index.vue";
import JoinSection from "@/components/sections/join-section/index.vue";
</script>
