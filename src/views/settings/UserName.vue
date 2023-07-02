<template>
      <div class="model">
        <div class="modal-content">
          <p class="share">Change Username</p>
            <div class="linkText">
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
      locale: localStorage.getItem('locale') || 'en',
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

      axios.patch('https://ouiadgood-lxzc.onrender.com/users', { 
        username: this.newUsername ,
        email: loginRequest.email
      })
        .then(() => {
          // Handle the response if needed
          //console.log(response);
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });

      //Refresh the page
      window.location.reload();
    },
  },
  computed: {
    translatedUserName() {
            let translations;
            if (this.locale === "en") {
                translations = {
                    title: "Change Username",
                    button: "Update Username",
                    placeholder: "username",
                };
            }
            else if (this.locale === "fr") {
                translations = {
                  title: "Changer le nom d'utilisateur",
                    button: "Mise à jour",
                    placeholder:"nom d'utilisateur",
                };
            }
            else {
                translations = {
                    title: "",
                    placeholder: "",
                };
            }
            return translations;
      },
  }
};
</script>

<style>
 .inviteInput {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 5px;
  box-sizing: border-box;
}

.inviteInput:hover {
  border: none;
  border-bottom: 2px solid #b6b6b6;
  padding: 5px;
  box-sizing: border-box;
}
.inviteInput:focus {
  outline: none;
  border-bottom-color: #ccc;
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

.linkText{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.share{
  font-weight: bold;
  padding: 10px 0;
  color:rgb(5, 169, 219);
  font-size: 20px;
}
.model{
    border-radius: 10px;
    padding: 25px;
    width: 50%;
    margin: auto;
    background-color: #fff;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.221);
}
</style>