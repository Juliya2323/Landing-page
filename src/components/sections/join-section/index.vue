<template>
  <div class="join">
    <ul class="join_sections">
      <li class="join_sections_item">
        <img
          :src="firstLineImg"
          alt="img"
          v-for="firstLineImg in firstLineImgs"
        />
      </li>
      <li class="join_sections_item center">
        <div class="join_sections_item_img">
          <img :src="imgLink3" alt="img" />
        </div>
        <div class="join_sections_item_info">
          <div class="join_sections_item_info_title">Join our</div>
          <div class="join_sections_item_info_subtitle">Community</div>
          <div class="join_sections_item_info_description">
            Meet the Omise community,artists and collectors for platform
            update,announcements and more...
          </div>
          <base-button class="join_sections_item_info_button">
            <img
              class="join_sections_item_info_button_icon"
              :src="Discord"
              alt="svg"
            />
            <div class="join_sections_item_info_button_text">
              Launch Discord
            </div>
          </base-button>
        </div>
        <div class="join_sections_item_img">
          <img :src="imgLink4" alt="img" />
        </div>
      </li>
      <li class="join_sections_item">
        <img
          :src="thirdLineImg"
          alt="img"
          v-for="thirdLineImg in thirdLineImgs"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import imgLink1 from "@/assets/images/item1.png";
import imgLink2 from "@/assets/images/item2.png";
import imgLink3 from "@/assets/images/item3.png";
import imgLink4 from "@/assets/images/item4.png";
import imgLink5 from "@/assets/images/item5.png";
import imgLink6 from "@/assets/images/item6.png";
import Discord from "@/assets/icons/discord.svg";

const firstLineImgs = [imgLink1, imgLink2];
/* const secondLinImgs = [imgLink3, imgLink4]; */
const thirdLineImgs = [imgLink5, imgLink6];
</script>

<style scoped lang="scss">
.join {
  padding: 20px 7% 80px;
  background-color: #131313;
  font-family: "Arial";
  font-style: normal;
  color: #ffffff;
  position: relative;

  &_sections {
    list-style: none;
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding: 0;
    margin: 0;

    &_item {
      display: flex;
      justify-content: space-around;

      &_img {
        display: none;
      }

      &_info {
        display: flex;
        flex-direction: column;
        align-items: center;

        &_title {
          font-weight: 400;
          font-size: 32px;
          line-height: 41px;
          margin-bottom: 5px;
        }

        &_subtitle {
          font-weight: 700;
          font-size: 32px;
          line-height: 41px;
          color: #5ba300;
          margin-bottom: 31px;
        }

        &_description {
          font-weight: 400;
          font-size: 19px;
          line-height: 27px;
          width: 70%;
          text-align: center;
          margin-bottom: 50px;
        }

        &_button {
          display: flex;
          align-items: center;
          padding: 17px 21px;
          gap: 12px;

          &_text {
            font-weight: 400;
            font-size: 14.0373px;
            line-height: 16px;
          }
        }
      }
    }

    &_item.center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
