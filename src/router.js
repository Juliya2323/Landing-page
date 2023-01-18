import { createRouter, createWebHistory } from 'vue-router';

import PrimarySection from "@/components/sections/primary-section/index.vue";
import GallerySection from "@/components/sections/gallery-section/index.vue";
import CreatorsSection from "@/components/sections/creators-section/index.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/primary', component: PrimarySection},
        {path: '/gallery', component: GallerySection},
        {path: '/creators', component: CreatorsSection},
    ]
})