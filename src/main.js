import '@/assets/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import BaseLogo from '@/components/ui/BaseLogo.vue';
import BaseTransparentButton from '@/components/ui/BaseTransparentButton.vue';
import BaseButton from '@/components/ui/BaseButton.vue'; 
import BaseIcon from '@/components/ui/BaseIcon.vue';
import {router} from '@/router.js';


const app = createApp(App);
app.component('base-logo', BaseLogo);
app.component('base-transparent-button', BaseTransparentButton);
app.component('base-button', BaseButton); 
app.component('base-icon', BaseIcon);
app.use(router);
app.mount('#app');
