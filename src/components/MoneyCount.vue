<template>
  <p class="levelUp">${{ levelUp.toFixed(2) }}</p>
</template>

<script>
export default {
  name: 'MoneyCount',
  data() {
    return {
      levelUp: 0.01,
    };
  },
  computed: {
    formattedLevelUp() {
      return this.levelUp.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  },
  mounted() {
    setInterval(() => {
      this.levelUp += 0.01;
    }, 1330);
  },
};
</script>

<style scoped>
.levelUp{
  margin-top: -5px;
  color: rgba(255, 255, 255, 0.795);
}

.levelUp:hover{
  color: #fff;
}
</style>
