<template>
  <the-header></the-header>
  <slot></slot>
  <the-footer class="footer">FOOTER</the-footer>
</template>

<script setup>
import TheHeader from "@/layout/TheHeader.vue";
import TheFooter from "@/layout/TheFooter.vue";
</script>
