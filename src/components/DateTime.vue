<template>
  <div class="TimeDate">
    <h1>{{ currentTime }}</h1>
    <h3>{{ formattedDate }}</h3>
  </div>
</template>

<script>
export default {
  name: 'DateTime',
  data() {
    return {
      formattedDate: "",
      currentTime: ""
    };
  },
  mounted() {
    this.updateTimeAndDate();
    setInterval(this.updateTimeAndDate, 1000); // Update every second
  },
  methods: {
    updateTimeAndDate() {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const now = new Date();
      const day = days[now.getDay()];
      const date = now.getDate();
      const year = now.getFullYear();
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      this.formattedDate = `${day} ${date}, ${year}`;
      this.currentTime = time;
      //this.currentDate = now.toLocaleDateString(day, date, year);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: -3%;
  color: #fff;
  font-size: 2rem;
}
h1{
  font-size:5rem;
  color: #fff;
}
.TimeDate{
  margin-top: -2%;
}

</style>
