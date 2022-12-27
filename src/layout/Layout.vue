<template>
  <Header></Header>
  <slot></slot>
  <Footer class="footer">FOOTER</Footer>
</template>

<script setup>
   import Header from '@/components/Header.vue';
   import Footer from '@/components/Footer.vue';
</script>

