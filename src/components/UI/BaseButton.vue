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
  border: transparent;
  transition: 0.2s box-shadow ease-out;
}

.base_button:hover {
  background-color: #88e829;
  box-shadow: 0 0 5px #88e829, 0 0 25px #88e829;
}

.base_button:active {
  font-size: 17px;
}

slot {
  padding: 0 0;
}
</style>
