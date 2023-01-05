<template>
      <footer class="footer">
            <div class="footer_main">
                  <nav class="footer_main_nav">
                        <base-logo class="footer_main_nav_logo"></base-logo>
                        <div class="footer_main_nav_content">
                              <div class="footer_main_nav_content_title">NFT Marketplace</div>
                              <ul class="footer_main_nav_content_list">
                                    <li v-for="(navItem, index) in navItems" :key="index" class="footer_main_nav_content_list_item"><a class="footer_main_nav_content_list_item_link" :href="`#${navItem}`">{{navItem}}</a></li>
                              </ul>
                        </div>
                  </nav>
                  <div class="footer_main_subscription">
                        <div class="footer_main_subscription_title">Join Newsletter</div>
                        <div class="footer_main_subscription_description">Subscribe to our newsletter to get the latest news and updates</div>
                        <div class="footer_main_subscription_input">
                              <input type="text" class="footer_main_subscription_input_field" placeholder="Enter your email">
                              <base-button class="footer_main_subscription_input_button">Subscribe</base-button>
                        </div>
                  </div>
            </div>
            <div class="footer_additional">
                  <div class="footer_additional_info">Copyright @ 2022. All rights reserved</div>
                  <ul class="footer_additional_list">
                        <li v-for="listItem in listItems" class="footer_additional_list_item"><img :src="listItem" alt="svg"></li>
                  </ul>
            </div>
      </footer>  
</template>

<script setup>
import {reactive} from "vue";
import instagramIcon from '@/assets/icons/instagram.svg';
import facebookIcon from '@/assets/icons/facebook.svg';
import twitterIcon from '@/assets/icons/twitter.svg';

const navItems = reactive(['Explorer', 'FAQ', 'About us', 'Privacy', 'Contact us', 'Terms of service']);
const listItems = reactive([instagramIcon, facebookIcon, twitterIcon]);
</script>


<style scoped lang="scss">

.footer {
      background-color: #242424;

      &_main{
            padding: 73px 10% 75px;
            display: flex;
            justify-content: space-between;
            font-family: 'Arial';
            font-style: normal;
            color: #FFFFFF;


            &_nav {
                  display: flex;
                  justify-content: space-between;
                  gap: 45px;

                  &_logo {
                        border-right: 1px solid #333333;
                        padding-right: 91px;
                        margin: 0;
                  }

                  &_content {
                        display: flex;
                        flex-direction: column;
                        gap: 37px;
                        padding-left: 61px;

                        &_title {
                        font-weight: 700;
                        font-size: 32px;
                        line-height: 37px;
                  }

                  &_list {
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        gap: 51px;
                        max-height: 185px;
                        flex-wrap: wrap; 
                        margin: 0;
                        padding: 0;


                        &_item_link {
                              font-weight: 400;
                              font-size: 22px;
                              line-height: 25px;
                              color: #FFFFFF;
                              text-decoration: none;
                        }
                  }
                  }
            }

            &_subscription {
                  display: flex;
                  flex-direction: column;
                  gap: 38px;
                  width: 495px;

                  &_title {
                        font-weight: 700;
                        font-size: 32px;
                        line-height: 37px;
                  }

                  &_description {
                        font-weight: 400;
                        font-size: 22px;
                        line-height: 29px;
                  }

                  &_input {
                        display: flex;
                        overflow: hidden;

                        &_field {
                              display: block;
                              width: 100%;
                              padding: 22px 39px;
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
                              padding: 22px 39px;
                              font-weight: 400;
                              font-size: 20px;
                              line-height: 23px;
                        }
                  }
            }

      }

      &_additional {
            padding: 29px 10% 37px;
            border-top: 1px solid #333333;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &_info {
                  font-weight: 700;
                  font-size: 10px;
                  line-height: 15px;
                  color: rgba(255, 255, 255, 0.6);
            }

            &_list {
                  display: flex;
                  justify-content: space-between;
                  align-items:center;
                  gap: 36px;
                  list-style: none;
                  margin: 0;
                  padding: 0;
            }
      }
}
</style>