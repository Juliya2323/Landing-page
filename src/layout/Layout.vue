<template>
  <TheHeader></TheHeader>
  <slot></slot>
  <TheFooter class="footer">FOOTER</TheFooter>
</template>

<script setup>
   import TheHeader from '@/layout/TheHeader.vue';
   import TheFooter from '@/layout/TheFooter.vue';
</script>

