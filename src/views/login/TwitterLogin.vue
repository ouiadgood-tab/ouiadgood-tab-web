<template>
<button class="btn btnTw" >
    <img class="loginLogo logoTw" src="./twitter.png">
    Login with Twitter
</button>
</template>

<script>
export default{
    name: 'TwitterLogin',
}

</script>

<style scoped>
.btn {
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.btn:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.loginLogo{
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
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
</style>