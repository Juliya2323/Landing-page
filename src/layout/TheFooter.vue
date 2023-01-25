<template>
  <footer class="footer">
    <div class="footer_main">
      <nav class="footer_container">
        <base-logo class="footer_logo"></base-logo>
        <div class="footer_nav">
          <h2 class="footer_title">NFT Marketplace</h2>
          <ul class="footer_list">
            <li
              v-for="(navItem, index) in navItems"
              :key="index"
              class="footer_list_item"
            >
              <a class="footer_text green" :href="`#${navItem}`">{{
                navItem
              }}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="footer_subscription">
        <h2 class="footer_title">Join Newsletter</h2>
        <h3 class="footer_text">
          Subscribe to our newsletter to get the latest news and updates
        </h3>
        <div class="footer_input">
          <input
            type="text"
            class="footer_input_field"
            placeholder="Enter your email"
          />
          <base-button class="footer_input_button">Subscribe</base-button>
        </div>
      </div>
    </div>
    <div class="footer_additional">
      <h4 class="footer_info">Copyright @ 2022. All rights reserved</h4>
      <ul class="footer_additional_list">
        <li class="footer_additional_list_item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 11.3698C16.1234 12.2021 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.1901 8.22768 13.4227 8.09402 12.592C7.96035 11.7614 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79355 10.2009 8.40605C10.9477 8.01856 11.7977 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 6.5H17.51" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li class="footer_additional_list_item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li class="footer_additional_list_item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
    align-items: center;
    font-family: "Arial";
    font-style: normal;
    color: #ffffff;

    @media (min-width: 716px) {
      align-items: center;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 1440px) {
      padding: 73px 3%;
    }
  }

  &_container {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }

  &_logo {
    border-right: 1px solid #333333;
    padding-right: 20px;
    margin: 0;
  }

  &_nav {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-left: 5px;

    @media (min-width: 1440px) {
      padding-left: 61px;
    }
  }

  &_title {
    font-weight: 700;
    font-size: 26px;
    line-height: 37px;

    @media (min-width: 1440px) {
      font-size: 32px;
      gap: 37px;
    }
  }

  &_list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;

    @media (min-width: 716px) {
      flex-wrap: wrap;
      max-height: 136px;
    }

    @media (min-width: 768px) {
      gap: 30px;
    }

    @media (min-width: 1440px) {
      gap: 51px;
    }

    
  }

  &_text {
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
      text-decoration: none;
      transition: all 0.3s ease-out;

      &.green:hover {
        color: #5ba300;
      }

      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1440px) {
        font-size: 22px;
      }
    }

  &_subscription {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media (min-width: 768px) {
      max-width: 260px;
      gap: 14px;
    }

    @media (min-width: 970px) {
      max-width: 390px;
      align-items: flex-start;
    }

    @media (min-width: 1440px) {
      max-width: 442px;
      gap: 37px;
    }

    &_title {
      font-weight: 700;
      font-size: 26px;
      line-height: 37px;

      @media (min-width: 1440px) {
        font-size: 32px;
      }
    }

    &_description {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      @media (min-width: 970px) {
        text-align: left;
      }

      @media (min-width: 1440px) {
        font-size: 22px;
        line-height: 29px;
      }
    }
  }

  &_input {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    font-size: 20px;
    line-height: 23px;

    @media (min-width: 970px) {
      max-width: 100%;
      flex-direction: row;
    }

    &_field {
      display: block;
      padding: 18px 26px;
      background-color: #131313;
      border: 1px solid transparent;
      outline: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      color: rgba(255, 255, 255, 0.6);
      transition: all 0.3s ease-out;

      @media (min-width: 1440px) {
        font-size: 16px;
        line-height: 23px;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: rgba(255, 255, 255, 0.6);

        @media (min-width: 1440px) {
          font-size: 16px;
          line-height: 23px;
        }
      }

      &:focus {
        border: 1px solid rgb(94, 101, 96);
      }

      &:focus::placeholder {
        opacity: 0;
      }

      @media (min-width: 768px) {
        padding: 12px 17px;
      }

      @media (min-width: 1440px) {
        padding: 22px 39px;
      }
    }

    &_button {
      display: block;
      float: right;
      padding: 18px 26px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      @media (min-width: 768px) {
        padding: 12px 17px;
      }

      @media (min-width: 1440px) {
        padding: 22px 39px;
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

    @media (min-width: 716px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px 5%;
    }

    @media (min-width: 1440px) {
      padding: 29px 3%;
    }
  }

  &_info {
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    color: rgba(255, 255, 255, 0.6);
  }

  &_additional_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;

    &_item {
      cursor: pointer;

      svg:hover {
        path {
          stroke: #5ba300;
        }
       
      }
    }
  }
}
</style>
