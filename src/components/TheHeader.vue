<template>
    <header class="header">
        <img src="" alt="" class="header_logo">
        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index"><a href=""></a></li>
            </ul>
        </nav>
    </header>

</template>

<script setup>
import { reactive } from "vue";

    const links = reactive(['#discover', '#marketplace', '#more']);
</script>