<template>
  {{ timerHours }}h : {{ timerMinutes }}m : {{ timerSeconds }}s 
</template>

<script>
export default {
  data() {
    return {
      timerHours: 24,
      timerMinutes: 45,
      timerSeconds: 60
    };
  },

  watch: {
    timerHours: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerHours--;
          }, 1440000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    timerMinutes: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerMinutes--;
          }, 60000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    timerSeconds: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerSeconds--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>

<style scoped lang="scss"></style>
