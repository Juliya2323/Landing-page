import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseTransparentButton from '@/components/UI/BaseTransparentButton.vue';
import BaseButton from '@/components/UI/BaseButton.vue'; 
import BaseIcon from '@/components/UI/BaseIcon.vue';


const app = createApp(App);
app.component('base-logo', BaseLogo);
app.component('base-tramsparent-button', BaseTransparentButton);
app.component('base-button', BaseButton); 
app.component('base-icon', BaseIcon);
app.mount('#app');
