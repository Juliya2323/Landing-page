<template>
    <div class="cards">
        <div class="cards_description">
            <div class="cards_description_title">Actions</div>
            <div class="cards_description_subtitle">View all</div>
        </div>
        <div class="cards_container">
            <ul class="cards_container_action_cards">
                <base-card  
                    v-for="actionCard in actionCards"
                    :key="actionCard.id"
                    :id="actionCard.id"
                    :author="actionCard.author"
                    :imgLink="actionCard.imgLink"
                    :name="actionCard.name"
                    :edition="actionCard.edition"
                    :price="actionCard.price"
                    >
                </base-card>
            </ul>
        </div>
    </div>
    <div class="cards">
        <div class="cards_description">
            <div class="cards_description_title">Editor’s Pick</div>
            <div class="cards_description_subtitle">View all</div>
        </div>
        <div class="cards_container">
            <ul class="cards_container_editor_cards">
                <base-card 
                    v-for="editorCard in editorCards"
                    :key="editorCard.id"
                    :id="editorCard.id"
                    :author="editorCard.author"
                    :imgLink="editorCard.imgLink"
                    :name="editorCard.name"
                    :edition="editorCard.edition"
                    :price="editorCard.price"
                    >
                </base-card>
            </ul>
    </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import gallery1 from '@/assets/images/gallery1.png';
import gallery2 from '@/assets/images/gallery2.png';
import gallery3 from '@/assets/images/gallery3.png';
import gallery4 from '@/assets/images/gallery4.png';
import gallery5 from '@/assets/images/gallery5.png';
import gallery6 from '@/assets/images/gallery6.png';
import BaseCard from '@/components/UI/BaseCard.vue';
    
        
const actionCards = reactive([
    {
        id: '1',
        author: 'Mark Ross',
        imgLink: gallery1,
        name: 'Silver Age Astronaut',
        edition: 'Edition 1 of 5',
        price: '1.5 ETH'
    },
    {
        id: '2',
        author: 'Rose Edinburgh',
        imgLink: gallery2,
        name: 'Mr Abstract',
        edition: 'Edition 1 of 3',
        price: '2.11 ETH'
    },
    {
        id: '3',
        author: 'Eve Lillith',
        imgLink: gallery3,
        name: 'Golden Cheetah',
        edition: 'Edition 1 of 5',
        price: '1.0 ETH'
    },
])
const editorCards = reactive([
    {
        id: '4',
        author: 'Mark Ross',
        imgLink: gallery4,
        name: 'The Last Dream',
        edition: 'Edition 1 of 5',
        price: '1.1 ETH'
    },
    {
        id: '5',
        author: 'Rose Edinburgh',
        imgLink: gallery5,
        name: 'Old Man Paul',
        edition: 'Only Edition',
        price: '2.1 ETH'
    },
    {
        id: '6',
        author: 'Eve Lillith',
        imgLink: gallery6,
        name: 'Hand of god',
        edition: 'Edition 1 of 2',
        price: '1.0 ETH'
    },
])
        
    

</script>

<style scoped lang="scss">
    .cards {
        background-color: #131313;
        font-family: 'Arial';   
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        gap: 43px;
        padding-bottom: 150px;

        &_description {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &_title{
                font-weight: 700;
                font-size: 36px;
                line-height: 54px;
            }
            &_subtitle{
                font-weight: 700;
                font-size: 24px;
                line-height: 36px;
                padding-right: 32px;
                position: relative;
            }

            &_subtitle::after{
                content: url(@/assets/icons/arrow-right.svg);
                position: absolute;
                top: 4px;
                left: 100px;
            }
        }

        &_container_action_cards,
        &_container_editor_cards {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

    }

    @media screen and (max-width: 1425px) {
        .cards_container_action_cards,
        .cards_container_editor_cards {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }

    }

    @media screen and (max-width: 1300px) {
        .cards {
            gap: 35px;
            padding-bottom: 110px;
        }
    }

    @media screen and (max-width: 1200px) {
        .cards_container_action_cards,
        .cards_container_editor_cards {
            overflow-x: scroll;
            flex-wrap: nowrap;
        }

    }

    
</style>