<template>
  <GoogleLogin class="with-google"  :callback="callback" />
</template>

<script setup>
import { decodeCredential } from "vue3-google-login";
import axios from "axios";

import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login"

onMounted(() => {
  googleOneTap()
    .then((response) => {
      // This promise is resolved when user selects an account from the the One Tap prompt
     callback(response)
    })
    .catch((error) => {
      console.log("Handle the error", error)
    })
})



const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  const userData = decodeCredential(response.credential);
  const user = {
    email: userData.email,
    password: userData.given_name,
  };
  axios
    .post("https://ouiadgood.onrender.com/users/add", user)
    .then((response) => {
      // Save the request in LocalStorage
      localStorage.setItem("loginRequest", JSON.stringify(response.data));
      // Redirect to /home
      window.location.replace("/")
      // this.$router.push("/home");
    })
    .catch((error) => {
      console.error(error);
    });
};


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

.with-google{
  margin: auto;
  display: flex;
  margin: 20px 0 0 0 ;
  justify-content: center;
  text-align: center;
}
</style>
