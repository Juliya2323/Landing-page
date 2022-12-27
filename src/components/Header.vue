<template>
        <p>header</p>
        <img src="" alt="" class="header_logo">
        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index"><a href=""></a></li>
            </ul>
        </nav>
</template>

<script setup>
import { reactive } from "vue";

    const links = reactive(['#discover', '#marketplace', '#more']);
</script>