<template>
    <button class="btn btnG">
        <i class="fa-regular fa-user loginLogo logoG"></i>
        Login
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
  transition: all 0.3s ease;
}
.btn:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}


</style>