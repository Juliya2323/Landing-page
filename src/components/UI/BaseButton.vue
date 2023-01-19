<template>
  <button class="base_button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.base_button {
  background-color: #5ba300;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  border: transparent;
  transition: 0.2s all ease-out;
  cursor: pointer;

  
}

.base_button:hover {
  background-color: #5ba300;
  box-shadow: 0 0 10px #5ba300;
}

.base_button:active {
  background-color: #84c436;
}

slot {
  padding: 0 0;
}
</style>
