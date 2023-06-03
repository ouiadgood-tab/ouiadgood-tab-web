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
      count: ''
    };
  },
  mounted() {
    this.fetchCount();
  },
  methods: {
    fetchCount() {
      const savedCount = localStorage.getItem('money');
      this.count = savedCount ? parseFloat(savedCount).toFixed(2) : 0;
      axios.get('https://ouiadgood.onrender.com/money')
        .then(response => {
          const apiCount = Number(response.data[0].totalmoney).toFixed(2);
          localStorage.setItem('money', apiCount);
          this.startCounter(); // Start the counter after setting the initial count
        })
        .catch(error => {
          console.error(error);
        });
    },
    startCounter() {
      setInterval(() => {
        this.count = (parseFloat(this.count) + 0.01).toFixed(2);
      }, 10000); // 10 seconds interval
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
