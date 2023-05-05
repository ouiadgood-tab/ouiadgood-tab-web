<template>
  <div class="login">
    <img src="./oag.png" alt="Logo" class="logo">
    <div class="buttons">
      <GoogleLogin/>
     <FaceBookLogin/>
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

export default {
    components: { 
      GoogleLogin, 
      FaceBookLogin, 
      TwitterLogin, 
      EmailLogin }
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
