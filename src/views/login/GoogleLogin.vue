<template>
    <button class="btn btnG">
        <img class="loginLogo logoG" src="./google.png">
        Login with Google
      </button>
</template>

<script>
export default{
    name: 'GoogleLogin',
}

</script>

<style scoped>
.btnG{
  color: gray;
  padding:5px;
}

.logoG{
  margin-left: -12%;
}
.loginLogo{
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}

.btn {
  text-align: center;
  border: none;
  border-radius: 5px;
  padding-left: 25px;
  padding-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 2rem;
}
</style>