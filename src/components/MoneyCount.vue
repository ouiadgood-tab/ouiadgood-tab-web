<template>
  <p class="levelUp">${{ count }}</p>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MoneyCount',
  
  data() {
    return {
      count: null
    };
  },
  mounted() {
    this.fetchCount();
  },
  methods: {
    fetchCount() {
      axios.get('https://famesfx.com/update_count/')
        .then(response => {
          this.count = response.data.count;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
