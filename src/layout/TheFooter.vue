<template>
  <footer class="footer">
    <div class="footer_main">
      <nav class="footer_main_nav">
        <base-logo class="footer_main_nav_logo"></base-logo>
        <div class="footer_main_nav_content">
          <div class="footer_main_nav_content_title">NFT Marketplace</div>
          <ul class="footer_main_nav_content_list">
            <li
              v-for="(navItem, index) in navItems"
              :key="index"
              class="footer_main_nav_content_list_item"
            >
              <a
                class="footer_main_nav_content_list_item_link"
                :href="`#${navItem}`"
                >{{ navItem }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div class="footer_main_subscription">
        <div class="footer_main_subscription_title">Join Newsletter</div>
        <div class="footer_main_subscription_description">
          Subscribe to our newsletter to get the latest news and updates
        </div>
        <div class="footer_main_subscription_input">
          <input
            type="text"
            class="footer_main_subscription_input_field"
            placeholder="Enter your email"
          />
          <base-button class="footer_main_subscription_input_button"
            >Subscribe</base-button
          >
        </div>
      </div>
    </div>
    <div class="footer_additional">
      <div class="footer_additional_info">
        Copyright @ 2022. All rights reserved
      </div>
      <ul class="footer_additional_list">
        <li v-for="listItem in listItems" class="footer_additional_list_item">
          <img :src="listItem" alt="svg" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from "vue";
import instagramIcon from "@/assets/icons/instagram.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";

const navItems = reactive([
  "Explorer",
  "FAQ",
  "About us",
  "Privacy",
  "Contact us",
  "Terms of service",
]);
const listItems = reactive([instagramIcon, facebookIcon, twitterIcon]);
</script>

<style scoped lang="scss">
.footer {
  background-color: #242424;

  &_main {
    padding: 43px 7%;
    display: flex;
    gap: 35px;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Arial";
    font-style: normal;
    color: #ffffff;

    &_nav {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      &_logo {
        border-right: 1px solid #333333;
        padding-right: 20px;
        margin: 0;
      }

      &_content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-left: 5px;

        &_title {
          font-weight: 700;
          font-size: 26px;
          line-height: 37px;
        }

        &_list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: hidden;;
          margin: 0;
          padding: 0;

          &_item_link {
            font-weight: 400;
            font-size: 18px;
            line-height: 25px;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }

    &_subscription {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;

      &_title {
        font-weight: 700;
        font-size: 26px;
        line-height: 37px;
      }

      &_description {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }

      &_input {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        justify-content: center;

        &_field {
          display: block;
          padding: 18px 26px;
          background-color: #131313;
          border: none;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          color: rgba(255, 255, 255, 0.6);
        }

        &_button {
          display: block;
          float: right;
          padding: 18px 26px;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
        }
      }
    }
  }

  &_additional {
    padding: 29px 7%;
    border-top: 1px solid #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &_info {
      font-weight: 700;
      font-size: 10px;
      line-height: 15px;
      color: rgba(255, 255, 255, 0.6);
    }

    &_list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
