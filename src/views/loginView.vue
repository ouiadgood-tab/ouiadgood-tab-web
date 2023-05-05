<template>
  <div class="login">
    <img src="../assets/oag.png" alt="Logo" class="logo">
    <div class="buttons">
      <button class="btn btnG">
        <img class="loginLogo logoG" src="../assets/google.png">
        Login with Google
      </button>
      <button class="btn btnFb" >
        <img class="loginLogo" src="../assets/facebook.jpg">
        Login with Facebook</button>
      <button class="btn btnTw" >
        <img class="loginLogo logoTw" src="../assets/twitter.png">
        Login with Twitter
      </button>
      <button class="btn btnEm" >
          <img class="loginLogo logoEm" src="../assets/email.jpg">
          Login with Email
      </button>

      <div class="terms">
        <p>By continuing, you are indicating that you accept our</p>
        <p><span>Terms of Service </span>and <span>Privacy Policy</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  

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

.btn {
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 2rem;
}

.loginLogo{
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}
.btnG{
  color: gray;
  padding-left: 25px;
  padding-right: 25px;
}

.logoG{
  margin-left: -12%;
}

.btnFb{
  background-color: blue;
  color: #fff;
}
.terms{
  color: #fff;
}

.btnTw{
  background-color: #00b2ef;
  color: #fff;
  padding-left: 28px;
  padding-right: 28px;
}

.logoTw{
 margin-left: -13%;
}

.btnEm{
  background-color: #fff;
  color: grey;
  padding-left: 35px;
  padding-right: 35px;
}

.logoEm{
  margin-left: -16%;
}

</style>
