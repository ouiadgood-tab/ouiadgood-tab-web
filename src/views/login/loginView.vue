<template>
  <div class="login">
    <img src="./oag.png" alt="Logo" class="logo">
    <div class="buttons">
      <GoogleLogin @click="auth0Login"/>
     <FaceBookLogin @click="checkDomain" />
      <TwitterLogin/>
      <EmailLogin/>
      <div class="terms">
        <p>By continuing, you are indicating that you accept our</p>
        <p><span>Terms of Service </span>and <span>Privacy Policy</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailLogin from './EmailLogin.vue';
import FaceBookLogin from './FaceBookLogin.vue';
import GoogleLogin from './GoogleLogin.vue';
import TwitterLogin from './TwitterLogin.vue';
import { mapActions } from 'vuex';
import store from '@/store';

export default {
    components: { 
      GoogleLogin, 
      FaceBookLogin, 
      TwitterLogin, 
      EmailLogin 
    },
    props: {
    store: {
      type: Object,
      required: true
    }
  },

  computed: {
    
  },

  methods: {
    ...mapActions(['login']),
    auth0Login (){
      this.$store.dispatch('login');
      this.$auth0.loginWithRedirect();
      this.$store.dispatch('auth0HandleAuthentication')
      console.log('Logged in successfully');
    },//.bind(this),

    checkDomain(){
      console.log(process.env.VUE_APP_AUTH0_CONFIG_DOMAIN)
    }
  },
  
  created() {
    this.$store = store

  },

}
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
