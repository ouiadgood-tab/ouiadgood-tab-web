<template>
     <button class="btn btnFb" >
        <img class="loginLogo" src="./facebook.jpg">
        Login with Facebook</button>
</template>

<script>
export default{
    name: 'FaceBookLogin',
}

</script>

<style scoped>
.loginLogo{
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}
.btnFb{
  background-color: blue;
  color: #fff;
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
</style>