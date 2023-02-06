<template>
  <div class="timer">
    <h1 class="timer_title">
      {{ hours}}h : {{ minutes }}m : {{ seconds }}s
    </h1>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
  const timer = ref(null);
  const currentTime = ref(3500);

  return { timer, currentTime }
},
  mounted() {
    this.timer = setInterval(this.countup, 1000);
  },
  methods: {
    countup() {
      this.currentTime++;
      if (this.currentTime == 0) {
        clearInterval(this.timer);
      }
    },
    pauseTimer: function () {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
  },
  computed: {
    seconds() {
      return Math.floor(this.currentTime % 60);
    },
    minutes() {
      return Math.floor(this.currentTime / 60);
    },
    hours() {
      return Math.floor(this.currentTime / (60 * 60));
    },
    days() {
      return Math.floor(this.currentTime / (60 * 60 * 24));
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="scss">
  .timer {
    margin: 0;

    &_title {
      margin: 0;
      font-weight: 400;
      font-size: 22px;
      line-height: 33px;

      @media (min-width: 1440px) {
            font-size: 22px;
            line-height: 33px;
          }

    }
  }
</style>
