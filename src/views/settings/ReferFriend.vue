<template>
    <div>
        <div class="tabInfo2">
            <div class="linkText">
                <p class="share">{{ translatedFriendContainer.title }}</p>
                <input type="url" name="invite-link" class="inviteInput" 
                 :placeholder="translatedFriendContainer.placeholder"
                  v-model="username"
                  :disabled="isReferralDataExists"/>
                <div class="referBtn" @click="sendReferral"
                >
                {{ translatedFriendContainer.enter }}
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
                    placeholder: localStorage.getItem(referral) || "Enter username",
                };
            }
            else if (this.locale === "fr") {
                translations = {
                  title: "Qui vous a référé",
                    enter: "Entrer",
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
    },
    methods: {
    sendReferral() {
      const referral = 'referral';
      localStorage.setItem(referral, this.username); // Set the value in local storage
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      const url = 'https://ouiadgood.onrender.com/users/referral';
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
  },
}
</script>

<style scoped>
.tabInfo2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 20%;
}

.linkText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  background-color: #707070;
  padding: 10px;
  color:#fff;
  border-radius: 5px;
  float: right;
  margin-left: 50%;
  cursor: pointer;
}
.referBtn:hover{
  padding: 11px;

}

</style>