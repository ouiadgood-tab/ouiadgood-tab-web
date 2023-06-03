<template>
    <div>
        <div class="head">
            <h2 class="mainText">{{ translatedAccountContainer.account }}</h2>
            <h4 class="mainText2">{{ translatedAccountContainer.lan }}</h4>
            <div class="lanFlex switchFlex">
              <span class="en">English</span>
            <label class="switch lan">
                <input type="checkbox" :checked="locale === 'fr'" @change="toggleLanguage">
                <span class="slider frColor"></span>
            </label>
            <span class="fr">French</span>
          </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <h3 class="mainText">{{ translatedAccountContainer.username}}</h3>
                <p class="userE">{{ username }}</p>
                <div class="btnCha" @click="showUserNamePopup">{{ translatedAccountContainer.change }}</div>
            </div>
        </div>
        <div class="head">
            <div class="grayOutMain">
                <p class="mainText">{{ translatedAccountContainer.advance }}</p>
                <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" @click="toggleDeleteAcct"> 
                    <span class="slider"></span>
                    </label>
                </div>
                <div class="deleteAcct" :class="{ 'show': showDeleteAcct }">
                    <h2 class="mainText delete">{{ translatedAccountContainer.delete }}</h2>
                    <button class="btnDel">{{ translatedAccountContainer.deleteBtn }}</button>
                </div>
            </div>
        </div>
        <div v-if="isUserNamePopupVisible">
            <UserName/>
        </div>
    </div>
</template>

<script>
import UserName from  './UserName.vue';
export default {
  name: 'AccountSet',
  components: {
    UserName,
  },
  data() {
    return {
      showDeleteAcct: false,
      isUserNamePopupVisible: false,
      username: '', // Store the retrieved username
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
    toggleLanguage(event) {
      const isChecked = event.target.checked;
      this.locale = isChecked ? 'fr' : 'en';
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
  },
  
};
</script>

<style scoped>
.head {
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  height: 12vh;
  margin-left: 21%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.mainText{
    display: flex;
    margin-left: -14%;
    margin-top: 5%;

}
.mainText2{
  margin-left:50%;
  margin-top: -5%;
}
.btnDel{
    margin-left: 15%;
    margin-bottom: -5%;
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
    float: right;
    margin-top: -4%;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btnCha:hover{
    background-color: #7070708c;
    color: #fff;
}
.userE{
    margin-top: -4%;
}

.switchFlex{
    float: right;
    margin-top: -4%;
}
.lanFlex {
  display: flex;
  align-items: center;
  margin-right: -5%;
  margin-top: -5%;
}

.lanFlex span {
  margin-right: 10px;
  font-size: 15px;
}

/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}


/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 0.1em;
  border-radius: 0px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #a10903;
  box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
}
input:checked + .frColor {
  background-color: #03833d;
}

input:checked + .slider:before {
  transform: translateX(2.8em) rotate(360deg);
}
.deleteAcct {
  display: none;
  
 
}
.deleteAcct.show {
  display: flex;
  background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 110vh;
  height: 5vh;
  margin-left: -16.5%;
  margin-top: 6%;
  border: none;
}


</style>