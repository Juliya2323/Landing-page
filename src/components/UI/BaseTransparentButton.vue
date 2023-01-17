<template>
  <button class="transparent_button">Connect wallet</button>
</template>

<style scoped lang="scss">
.transparent_button {
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: #5ba300;
  background-color: #131313;
  border: 1px solid #5ba300;
  border-radius: 24px;
  padding: 27px 19px;
  cursor: pointer;
  transition: 0.2s color ease-out;
}

.transparent_button:hover {
  color: white;
  transform: translateY(-5px);
}
</style>
