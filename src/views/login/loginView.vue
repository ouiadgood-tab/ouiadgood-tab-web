<template>
  <div class="container with-background-color">
  <div class="login">
    <img src="./oag.png" alt="Logo" class="logo">
    <div class="buttons">
      <EmailLogin/>
      <div class="terms">
        <p>By continuing, you are indicating that you accept our</p>
        <p><span>Terms of Service </span>and <span>Privacy Policy</span></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import { useAuth0 } from '@auth0/auth0-vue';
//import axios from 'axios';
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
.container {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.with-background-color {
  
  background-color: rgb(231, 229, 229);
    height: 100vh;
    margin-left: -5%;
    margin-right: -1%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.logo {
  float: left;
  width: 200px;
  height: 50px;
  margin-right: 1px;
}

.login {
  display: flex;
  flex-direction: column;
  height: 10vh;
  border: none;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.terms {
  color: #fff;
}

/* Include main.css styles */
@import url('@/assets/main.css');
</style>
