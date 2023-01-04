<template>
    <button class="base_button">
        <slot></slot>
    </button>
</template>

<style scoped>
    .base_button {
        background-color: #5BA300;
        font-weight: 400;
        font-size: 18px;
        color: #fff;
    }

    slot {
        padding: 0 0;
    }
</style>