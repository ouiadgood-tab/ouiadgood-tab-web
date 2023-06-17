<template>
    <div class="container">
        <div class="head">
           <div class="title">
            <h2 class="mainText">{{ translatedAccountContainer.account }}</h2>
            <h5 class="mainText2">{{ translatedAccountContainer.lan }}</h5>
           </div>
          <div class="lang-cont">
            <p>English</p>
            <ToggleSwitch :initialState="localeBool" :toggleCallback="toggleLanguage" /> 
            <p>French</p>
          </div>
        </div>


        <div class="head">
            <div class="title">
                <h3 class="mainText">{{ translatedAccountContainer.username}}</h3>
                <p class="userE">{{ username }}</p>
              </div>
                <div class="btnCha" @click="showUserNamePopup">{{ translatedAccountContainer.change }}</div>
        </div>
        <div v-if="isUserNamePopupVisible">
            <UserName/>
        </div>
        
        <div class="head">
            <div class="grayOutMain">
                <p class="mainText">{{ translatedAccountContainer.advance }}</p>
                <ToggleSwitch :initialState="showDeleteAcct" :toggleCallback="toggleDeleteAcct" /> 
                <div class="deleteAcct" :class="{ 'show': showDeleteAcct }">
                    <h2 class="mainText delete">{{ translatedAccountContainer.delete }}</h2>
                    <button class="btnDel" @click="deleteAccount">{{ translatedAccountContainer.deleteBtn }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import UserName from  './UserName.vue';
import axios from 'axios';
export default {
  name: 'AccountSet',
  components: {
    UserName,
    ToggleSwitch
},
  data() {
    return {
      showDeleteAcct: false,
      isUserNamePopupVisible: false,
      username: '', // Store the retrieved username
      localeBool: localStorage.getItem('locale') == "fr" ? true :false,
      locale: localStorage.getItem('locale') || 'en',
    };
  },

  computed: {
    translatedAccountContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          account: "Account",
          username:"Username",
          change: "CHANGE",
          advance: "Advance",
          delete: "Delete Account",
          deleteBtn: "DELETE ACCOUNT",
          lan: 'change language'
        };
      } else if (this.locale === 'fr') {
        translations = {
          account: "Compte",
          username:"Nom d'utilisateur",
          change: "CHANGEMENT",
          advance: "Avance",
          delete: "Supprimer le compte",
          deleteBtn: "SUPPRIMER LE COMPTE",
          lan: "changer de langue"
        };
      } else {
        translations = {
          title: '',
          placeholder: '',
        };
      }
      return translations;
    },
  },
  mounted() {
    this.fetchUsernameFromLocalStorage() // Fetch the username when the component is mounted
  },
  methods: {
    toggleLanguage(active) {
      this.locale = active ? 'fr' : 'en';
      this.localeBool =active
      localStorage.setItem('locale', this.locale);
    },
    toggleDeleteAcct() {
      this.showDeleteAcct = !this.showDeleteAcct;
    },
    showUserNamePopup() {
      this.isUserNamePopupVisible = !this.isUserNamePopupVisible;
    },
    fetchUsernameFromLocalStorage() {
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      if (loginRequest && loginRequest.username) {
        this.username = loginRequest.username;
      }
    },

    deleteAccount() {
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      const userId = loginRequest._id;
      axios
        .delete(`https://ouiadgood.onrender.com/users/${userId}`)
        .then(response => {
          // Handle successful deletion
          console.log(response);
          console.log('Account deleted successfully');
          localStorage.clear();
          window.location.reload(); // Reload the page
        })
        .catch(error => {
          // Handle error
          console.error('Error deleting account:', error);
        });
    },
  },
  
};
</script>

<style scoped>
.container{
  position: relative;
}
.lang-cont{
  display: flex;
  justify-content: center;
  gap:10px;
  font-weight: bold;
  font-size: 12px;
  align-items: center;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center ;
  padding: 40px 20px;
  margin: 20px 0;
  border-radius: 10px;
  width: 90%;
  color: rgb(5, 169, 219);
  border: 1px solid #ccc;
}

.mainText{
    display: flex;
    font-weight: bold;
    margin: 6px 0;
}

.btnDel{
  
    font-size: 18px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow,transform;
    background: radial-gradient( 100% 100% at 100% 0%, #e94c4c 0%, #a10903 100% );
    box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
    padding: 0 2em;
    border-radius: 0.3em;
    color: #fff;
    height: 2.6em;
    text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.btnDel:hover {
    box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #e94c4c;
    transform:s translateY(-0.1em);
}

.btnDel:active {
  box-shadow: inset 0px 0.1em 0.6em #a10903;
  transform: translateY(0em);
} 
.delete{
    margin-top: 1%;
}

.btnCha{
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btnCha:hover{
    background-color: #7070708c;
    color: #fff;
}


.lanFlex {
  display: flex;
  align-items: center;

}

.lanFlex span {
  font-size: 15px;
}



.deleteAcct {
  display: none;
}
.deleteAcct.show {
  display: flex;
  width: 100%;
  gap:20px;
  margin-top: 20px;
  justify-content: space-between;
  background-color: #fff;
  color: rgb(5, 169, 219);
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}


</style>