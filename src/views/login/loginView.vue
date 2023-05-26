<template>
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
  margin-right: 1px;
}

.login {
  display: flex;
  flex-direction: column;
  height: 15vh;
  border: none;
  border-radius: 10%;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.terms{
  color: #fff;
}

</style>
