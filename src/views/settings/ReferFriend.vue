<template>
    <div v-if="!isReferralClosed" class="container">
        <div class="tabInfo2">
            <div class="linkText">
                <p class="share">{{ translatedFriendContainer.title }}</p>
                <input type="url" name="invite-link" class="inviteInput" 
                 :placeholder="translatedFriendContainer.placeholder"
                  v-model="username"
                  :disabled="isReferralDataExists"/>
                <div style="display: flex; gap: 0px;">
                      <div class="referBtn" @click="closeReferral">
                      {{ translatedFriendContainer.close }}
                    </div>
                    <div class="referBtn" @click="sendReferral, closeReferral">
                      {{ translatedFriendContainer.enter }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'ReferFriend',
    data(){
      return{
        locale: localStorage.getItem("locale") || "en",
        username: '',
      }
    },
    computed:{
      translatedFriendContainer() {
        const referral = "referral";
            let translations;
            if (this.locale === "en") {
                translations = {
                    title: "Who referred you",
                    enter: "Enter",
                    close:"close",
                    placeholder: localStorage.getItem(referral) || "Enter username",
                };
            }
            else if (this.locale === "fr") {
                translations = {
                  title: "Qui vous a référé",
                    enter: "Entrer",
                    close: "Fermer",
                    placeholder: localStorage.getItem(referral) || "Saisissez votre nom d'utilisateur",
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
        isReferralDataExists() {
      const referral = localStorage.getItem('referral');
      return referral !== null && referral !== '';
    },
    isReferralClosed() {
      const referralClosed = localStorage.getItem('referralClosed');
      return referralClosed === '1';
    },
    },
    methods: {
    sendReferral() {
      const referral = 'referral';
      localStorage.setItem(referral, this.username); // Set the value in local storage
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      const url = 'https://ouiadgood-lxzc.onrender.com/users/referral';
      const data = {
        username: this.username,
        email: loginRequest.email, // Use the email address from loginRequest object
      };
      axios.patch(url, data)
        .then(response => {
          // Handle successful response
          console.log(response);
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
    },
    closeReferral() {
      const referralClosed = 'referralClosed';
      localStorage.setItem(referralClosed, '1'); // Set the value in local storage
      // Hide the component (you can use a flag or remove it from the DOM)
      this.$el.style.display = 'none';
    },
  },
}
</script>

<style scoped>
.container{
  position:fixed;
    bottom: 40%;
    z-index: 11;
    background-color:rgb(255, 255, 255);
    padding: 20px;
    width: 60%;
    justify-self: center;
    align-self: center;
    margin: auto;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-size: 1.3em;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.tabInfo2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.linkText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
}

.share{
    margin-left: 1%;
}

.linkText > p {
  font-size: 16px;
}

.inviteInput {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
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
.linkText{
    color: #020202 !important ;
    width: 500px;
  min-height: 150px;
}

.linkText p{
    color: #707070 !important ;
}
.referBtn{
  background-color: rgb(5, 169, 219);
  padding: 10px;
  color:#fff;
  border-radius: 5px;
  float: right;
  margin-left: 5%;
  margin-top: 5px;
  cursor: pointer;
}
.referBtn:hover{
  background-color: rgb(6, 119, 153);
}

</style>