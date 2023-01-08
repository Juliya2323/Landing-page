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
  background-color: #c1e19a;
  border: 2px solid #fff;
}

.base_button:active {
  background-color: #639a21;
}

slot {
  padding: 0 0;
}
</style>
