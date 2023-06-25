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
      currentTime: "",
      days: {
        en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
      },
      months: {
        en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
      }
    };
  },
  mounted() {
    this.updateTimeAndDate();
    setInterval(this.updateTimeAndDate, 1000); // Update every second
  },
  methods: {
    updateTimeAndDate() {
      const now = new Date();
      const dayIndex = now.getDay();
      const monthIndex = now.getMonth();
      const day = this.getTranslatedDay(dayIndex);
      const month = this.getTranslatedMonth(monthIndex);

      const date = now.getDate();
      const year = now.getFullYear();
      const options = {
        hour12: !this.use24HourFormat, // Use 24 hours format if use24HourFormat is true
        hour: "2-digit",
        minute: "2-digit",
      };
      if (this.showSeconds) {
        options.second = "2-digit"; // Include seconds if showSeconds is true
      }
      const time = now.toLocaleTimeString([], options);
      this.formattedDate = `${day}, ${date} ${month} ${year}`;
      this.currentTime = time;
    },
    getTranslatedDay(dayIndex) {
      const locale = this.locale === 'fr' ? 'fr' : 'en';
      return this.days[locale][dayIndex];
    },
    getTranslatedMonth(monthIndex) {
      const locale = this.locale === 'fr' ? 'fr' : 'en';
      return this.months[locale][monthIndex];
    },
  },
  computed: {
    use24HourFormat() {
      return localStorage.getItem('use24HourFormat') === 'true';
    },
    showSeconds() {
      return localStorage.getItem('showSeconds') === 'true';
    },
    locale() {
      return localStorage.getItem('locale') || 'en';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: #fff;
  font-size: 2rem;
}
h1{
  font-size:5rem;
  color: #fff;
}
.TimeDate{
  position: relative;
  z-index: 11;
  padding: 25px;
  text-align: center;
}

@media screen and (max-width:450px) {
  h1{
    font-size: 3rem;
  }
  h3{
    font-size: 1.4rem;
  }
}
</style>
