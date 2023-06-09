<template>
  <button @click="login">
    <i class="fa fab-google logoG"></i>
    Login with Google
  </button>
  </template>
  

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
export default{
    name: 'GoogleLogin',
       setup() {
      const { loginWithRedirect,user, isAuthenticated } = useAuth0();
      return {
        login: () => {
          loginWithRedirect();
        },
        user, isAuthenticated
      }
    },
}

</script>

<style scoped>

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