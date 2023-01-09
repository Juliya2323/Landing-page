<template>
  <button class="base_button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base_button {
  background-color: #5ba300;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}

.base_button:hover {
  background-color: #7CFC00;
  box-shadow: 0 0 5px #7CFC00, 0 0 25px #7CFC00, 0 0 50px #7CFC00, 0 0 100px #7CFC00;
}

slot {
  padding: 0 0;
}
</style>
