<template>
  <div class="container with-background-color">
    <img src="./oag.png" alt="Logo" class="logo">
  <div class="login">
    <div class="buttons">
      <EmailLogin/>
      
    </div>
  </div>
</div>
</template>

<script>
import EmailLogin from './EmailLogin.vue';

export default {
  components: {
    EmailLogin
},
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style scoped>
.logo {
  width: 200px;
  margin: 30px;
  height: 50px;
}


</style>
