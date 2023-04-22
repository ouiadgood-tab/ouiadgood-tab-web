<template>
  <DropDown/>
  <!--<img alt="Vue logo" src="./assets/logo.png"> -->
  <DateTime/>
</template>

<script>
import DateTime from './components/DateTime.vue';
import DropDown from './components/DropDown.vue';



export default {
  name: 'App',
  components: {
    DateTime,
    DropDown,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
