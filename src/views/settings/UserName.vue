<template>
      <div class="model">
        <div class="modal-content">
            <div class="linkText">
                <p class="share">Change Username</p>
                <input type="url" name="invite-link" class="inviteInput" placeholder="Username" v-model="newUsername"/>
                <button class="btnTab" @click="updateUsername">Update Username</button>
            </div>
        </div>
      </div>
  </template>

<script>
import axios from 'axios';
export default {
  name: 'UserName',
  data() {
    return {
      newUsername: '', // Store the new username entered by the user
    };
  },
  methods: {
    updateUsername() {
      // Update the username in the local storage
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      if (loginRequest) {
        loginRequest.username = this.newUsername;
        localStorage.setItem('loginRequest', JSON.stringify(loginRequest));
      }

      axios.patch('https://ouiadgood.onrender.com/users', { 
        username: this.newUsername ,
        email: loginRequest.email
      })
        .then(response => {
          // Handle the response if needed
          console.log(response);
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });

      //Refresh the page
      window.location.reload();
    },
  },
};
</script>

<style>
 .inviteInput {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 1.5%;
  width: 70%;
  box-sizing: border-box;
}

.inviteInput:hover {
  border: none;
  border-bottom: 2px solid #b6b6b6;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  width: 70%;
  box-sizing: border-box;
}
.inviteInput:focus {
  outline: none;
  border-bottom-color: #ccc;
  font-size: 19px;
}
.share{
    margin-left: -47%;
}
.btnTab {
  background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btnTab:hover {
  background-color: #14c3d6;
}
.model{
    width: 25%;
    height: 20vh;
    margin-left: 50%;
    margin-top: -10%;
    padding-top: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.5);
}
</style>