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
.logo {
  float: left;
  width: 200px;
  height: 50px;
  margin-top: 2%;
  margin-right: 1px;
  margin-left: 7%;
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
  color: #292828;
  margin-top: 12%;
}

</style>
