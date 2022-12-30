<template>
  <TheHeader></TheHeader>
  <slot></slot>
  <TheFooter class="footer">FOOTER</TheFooter>
</template>

<script setup>
   import TheHeader from '@/components/TheHeader.vue';
   import TheFooter from '@/components/TheFooter.vue';
</script>

