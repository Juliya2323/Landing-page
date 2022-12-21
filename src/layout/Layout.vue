<template>
  <the-header></the-header>
  <slot></slot>
  <footer class="footer">FOOTER</footer>
</template>

<script setup>
   import TheHeader from '@/components/TheHeader.vue';
</script>