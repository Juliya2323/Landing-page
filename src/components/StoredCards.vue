<template>
    <div class="cards">
        <div class="cards_description">
            <div class="cards_description_title">Auctions</div>
            <div class="cards_description_subtitle">View all</div>
        </div>
        <div class="cards_container">
            <ul class="cards_container_action_cards">
                <base-card  
                    v-for="ActionCard in ActionCards"
                    :key="ActionCard.id"
                    :id="ActionCard.id"
                    :author="ActionCard.author"
                    :imgLink="ActionCard.imgLink"
                    :name="ActionCard.name"
                    :edition="ActionCard.edition"
                    :price="ActionCard.price"
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
                    v-for="EditorCard in EditorCards"
                    :key="EditorCard.id"
                    :id="EditorCard.id"
                    :author="EditorCard.author"
                    :imgLink="EditorCard.imgLink"
                    :name="EditorCard.name"
                    :edition="EditorCard.edition"
                    :price="EditorCard.price"
                    >
                </base-card>
            </ul>
        </div>
    </div>
</template>

<script>

import gallery1 from '@/assets/gallery1.png';
import gallery2 from '@/assets/gallery2.png';
import gallery3 from '@/assets/gallery3.png';
import gallery4 from '@/assets/gallery4.png';
import gallery5 from '@/assets/gallery5.png';
import gallery6 from '@/assets/gallery6.png';
    
export default {
    
    data() {
        return {
            ActionCards: [
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
            ],
            EditorCards: [
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
            ]
        }
    }
}
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
                content: url(@/assets/arrow-right.png);
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

    
</style>