<template>
    <div class="setPos">
        <div class="links">
          <a class="router" href="/setting/Admin">Create Charity</a>
        <a class="router me" id="me" href="/setting/Donate">Edit Charity</a>
        </div> 
        <br>
        <button class="logout-btn" @click="logoutUser">
          <i class="fa fa-sign-out"></i>
        </button>
      </div>
</template>


<script>
import { googleLogout } from "vue3-google-login"
export default{
    methods:{
        logoutUser() {
      // Delete local storage data
      localStorage.removeItem("loginRequest");
    
      // Redirect to /login
      // this.$router.push('/login');
      window.location.replace("/login");
      googleLogout()
    },
    }
}
</script>


<style scoped>
.setPos{
  width: 100%;
  padding: 20px 0;
}
.create-button{
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }
  
  .logout-btn{
    border: none;
    cursor: pointer;
    margin: auto;
    display: block;
    border-radius: 100px;
  }
  
  .inputs{
    display:flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
  }
  .router{
    color: #fff;
    font-size: 17px;
    background: #000;
  
    padding: 10px 20px;
    border-radius: 40px;
    text-decoration: none;
  }
  .links{
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  input,
  button {
    display: inline-block;
    margin: 10px;
    padding: 20px;
    border: 1px solid #00000029;
    border-radius: 10px;
  }
    
</style>