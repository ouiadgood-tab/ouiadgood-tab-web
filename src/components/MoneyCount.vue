<template>
  <p class="levelUp">
    <i class="fas fa-dollar-sign"></i>
    {{ count }}
  </p>
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
      axios.get('https://ouiadgood.onrender.com/money')
        .then(response => {
          this.count = Number(response.data[0].totalmoney).toFixed(2);
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
