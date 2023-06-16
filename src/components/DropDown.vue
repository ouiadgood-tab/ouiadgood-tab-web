<template>
  <div class="dropdowns">
    <ul
      class="dropdown"
      @click="toggleDropdown('dropdown1')"
      :class="{ active: activeDropdown === 'dropdown1' }"
    >
      <div><MoneyCount class="icon" /></div>
      <ul class="dropdown-items1" v-if="activeDropdown === 'dropdown1'">
        <div>
          <p class="info">
            {{ translatedDropDownContainer.moneyTitle }}
          </p>
          <button class="btnInvite">
            <router-link class="router" to="/setting/Invite">{{
              translatedDropDownContainer.moneyButton
            }}</router-link>
          </button>
        </div>
      </ul>
    </ul>
    <ul
      class="dropdown"
      @click="toggleDropdown('dropdown2')"
      :class="{ active: activeDropdown === 'dropdown2' }"
    >
      <i class="fa-solid fa-display icon"></i>
      <ul class="dropdown-items" v-if="activeDropdown === 'dropdown2'">
        <div>
          <h3 class="info">{{ translatedDropDownContainer.videoTitle }}</h3>
          <p class="info">{{ translatedDropDownContainer.videSub }}</p>
        </div>
      </ul>
    </ul>
    <ul
      class="dropdown"
      @click="toggleDropdown('dropdown2+')"
      :class="{ active: activeDropdown === 'dropdown2+' }"
    >
      {{
        heart
      }}<i class="fa-sharp fa-regular fa-heart icon"></i>
      <ul class="dropdown-items" v-if="activeDropdown === 'dropdown2+'">
        <div class="heartDrop">
          <h2>
            {{ heartDonated }} <i class="fa-sharp fa-regular fa-heart icon"></i>
          </h2>
          <P>{{ translatedDropDownContainer.donate }}</P>
          <button class="btnInvite">
            <router-link class="router" to="/setting/Donate">{{
              translatedDropDownContainer.donateButton
            }}</router-link>
          </button>
        </div>
        <hr />
        <div class="heartDrop">
          <h2>{{ inviteNumber }}<i class="fa-sharp fa-regular fa-heart icon"></i></h2>
          <P>{{ translatedDropDownContainer.invite }}</P>
          <button class="btnInvite">
            <router-link class="router" to="/setting/Invite">{{
              translatedDropDownContainer.inviteButton
            }}</router-link>
          </button>
        </div>
        <hr />
        <div>
          <div class="heartDrop openSpace">
            <p class="leftSide">{{ translatedDropDownContainer.openTab }}</p>
            <p>1<i class="fa-sharp fa-regular fa-heart icon"></i></p>
          </div>
          <!--<div class="heartDrop">
            <p class="leftSide1">{{ translatedDropDownContainer.recruit }}</p>
            <p>350<i class="fa-sharp fa-regular fa-heart icon"></i></p>
          </div>-->
        </div>
      </ul>
    </ul>
    <ul
      class="dropdown"
      @click="toggleDropdown('dropdown3')"
      :class="{ active: activeDropdown === 'dropdown3' }"
    >
      <i class="fa-solid fa-ellipsis icon"></i>
      <div>
        <div class="dropdown-items" v-if="activeDropdown === 'dropdown3'">
          <router-link class="router" to="/setting/Donate"
            ><div>
              <i class="fa-solid fa-heart drop-icon"></i>
              {{ translatedDropDownContainer.donateButton }}
            </div></router-link
          >
          <router-link class="router" to="/setting/Stats">
            <div>
              <i class="fa-solid fa-chart-simple drop-icon"></i>
              {{ translatedDropDownContainer.stats }}
            </div></router-link
          >
          <router-link class="router" to="/setting/Invite">
            <div>
              <i class="fa-solid fa-user-plus drop-icon"></i>
              {{ translatedDropDownContainer.inviteButton }}
            </div>
          </router-link>
          <router-link class="router" to="/setting/Widget">
            <div>
              <i class="fa-solid fa-gear drop-icon"></i>
              {{ translatedDropDownContainer.Setting }}
            </div></router-link
          >
          <div @click="logoutUser" class="router">
            <i class="fa-solid fa-right-from-bracket drop-icon"></i>
            {{ translatedDropDownContainer.logout }}
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import MoneyCount from "./MoneyCount.vue";
import axios from "axios";
import { googleLogout } from "vue3-google-login"
export default {
  name: "DropDown",
  data() {
    return {
      activeDropdown: null,
      heart: 0,
      totalheart: 0,
      maxHeart: 0,
      todayHeart: 0,
      maxHeartDate: "",
      heartDonated: "",
      locale: localStorage.getItem("locale") || "en",
    };
  },

  computed: {
    inviteNumber(){
            const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));
            return loginRequest ? loginRequest.numberOfReferred : 0;
        },
    translatedDropDownContainer() {
      let translations;
      if (this.locale === "en") {
        translations = {
          moneyTitle:
            "This is how much money our community has raised for charity. Recruit your friends to raise more!",
          moneyButton: "Invite a friend",
          videoTitle: "Watch a video, earn 100 hearts!",
          videSub:
            "No videos available right now, but we’ll let you know when one is.",
          donate: "donated",
          donateButton: "Donate Hearts",
          invite: "recruited friends",
          inviteButton: "Invite Friends",
          openTab: "Open a tab",
          recruit: "Recruit friend",
          stats: "Your Stats",
          Setting: "Setting",
          logout: "Logout",
        };
      } else if (this.locale === "fr") {
        translations = {
          moneyTitle:
            "C'est combien d'argent notre communauté a collecté pour la charité. Recrutez vos amis pour récolter plus !",
          moneyButton: "Invite un ami",
          videoTitle: "Regardez une vidéo, gagnez 100 cœurs !",
          videSub:
            "Aucune vidéo disponible pour le moment, mais nous vous informerons dès qu'elle le sera.",
          donate: "fait un don",
          donateButton: "Faire un don de coeurs",
          invite: "amis recrutés",
          inviteButton: "Inviter des amis",
          openTab: "Ouvrir un onglet",
          recruit: "Recruter un ami",
          stats: "Vos statistiques",
          Setting: "Paramètre",
          logout: "Se déconnecter",
        };
      } else {
        translations = {
          title: "",
          placeholder: "",
        };
      }
      return translations;
    },
  },

  created() {
    // Retrieve the stored value from the local storage
    const heartDonated = localStorage.getItem("heartDonated");
    const loginRequest = JSON.parse(
      localStorage.getItem("loginRequest") || "{}"
    );
    if (!loginRequest) return window.location.replace("/login");
    const savedDate = localStorage.getItem("date");
    if (heartDonated) {
      this.heartDonated = heartDonated;
    }
    if (loginRequest) {
      this.heart = loginRequest.heart || 0;
      this.totalheart = loginRequest.totalheart || 0;
    }

    this.todayHeart = parseInt(localStorage.getItem("todayHeart")) || 0;
    this.maxHeart = parseInt(localStorage.getItem("maxHeart")) || 0;

    const currentDate = new Date().toLocaleDateString();
    if (currentDate != savedDate) {
      if (this.maxHeart > this.todayHeart) {
        const maxHeartDate = new Date()
          .toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "2-digit",
          })
          .replace(/,/g, ""); // Remove comma after the month abbreviation
        localStorage.setItem("maxHeartDate", maxHeartDate);
      }
      this.maxHeart = Math.max(this.todayHeart, this.maxHeart); // Update maxHeart with the current day's heart count if it's greater
      this.todayHeart = 0;
      localStorage.setItem("date", currentDate);
    }
    // Increment the heart value when the page loads or refreshes
    this.incrementHeart();
  },

  methods: {
    logoutUser() {
      // Delete local storage data
      localStorage.removeItem("loginRequest");
    
      // Redirect to /login
      // this.$router.push('/login');
      window.location.replace("/login");
      googleLogout()
    },
    incrementHeart() {
      const loginRequest = JSON.parse(
        localStorage.getItem("loginRequest") || "{}"
      );
      this.heart++; // Increment the heart count
      this.totalheart++; // Increment the heart count
      this.todayHeart++; // Increment the todayHeart count

      if (this.todayHeart > this.maxHeart) {
        this.maxHeart = this.todayHeart;
      }

      if (loginRequest) {
        loginRequest.heart = this.heart;
        loginRequest.totalheart = this.totalheart;
        localStorage.setItem("loginRequest", JSON.stringify(loginRequest));
      }
      //Update the value in the local storage
      localStorage.setItem("todayHeart", this.todayHeart.toString());
      localStorage.setItem("maxHeart", this.maxHeart.toString());

      // Make the HTTP request to update the heart count in the database
      axios
        .patch("https://ouiadgood.onrender.com/users/heart", {
          heart: this.heart,
          email: loginRequest.email,
          totalheart: this.totalheart,
        })
        .then(() => {
          // Handle the response if needed
          //console.log(response);
        })
        .catch((error) => {
          // Handle the error if needed
          console.error(error);
        });
    },
    toggleDropdown(dropdown) {
      if (this.activeDropdown === dropdown) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = dropdown;
      }
    },
  },
  components: { MoneyCount },
};
</script>

<style scoped>
.dropdowns {
  display: flex;
  justify-content: right;
  margin-top: -25px;
  margin-right: 100px;
  color: rgba(255, 255, 255, 0.795);
}

.dropdown {
  margin-right: 15px;
  list-style: none;
  position: relative;
  font-size: 30px;
}

.dropdown-items {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 10rem;
  padding: 0;
  background-color: #13afc02f;
  border-top: none;
  z-index: 1;
}

.dropdown-items1 {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  background-color: #13afc02f;
  border-top: none;
  z-index: 1;
}
.dropdown-items2 {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 25vh;
  padding: 0;
  background-color: #13afc02f;
  border-top: none;
  z-index: 1;
}
.active .dropdown-items {
  display: block;
}
.active .dropdown-items1 {
  display: block;
}
.active .dropdown-items2 {
  display: block;
}

.dropdown div {
  padding: 5px;
  cursor: pointer;
}

.icon:hover {
  color: #fff;
  cursor: pointer;
}
h2 {
  margin-bottom: -8%;
}
.openSpace {
  margin-bottom: 1%;
}
.heartDrop {
  font-size: 15px;
}

.dropdown-items div {
  padding: 10px;
  border-top: 1px solid #ffffffdc;
}

.dropdown-items div {
  display: block;
  background-color: transparent;
  border: none;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 14px;
  margin-top: -3%;
}
.router {
  text-decoration: none;
  color: #ffffff;
}
.leftSide {
  float: left;
}
.leftSide1 {
  float: left;
  margin-left: -5%;
}

.drop-icon {
  float: left;
  margin-left: -6%;
}

.dropdown-items div:hover {
  background-color: #13afc063;
}
.info {
  font-size: small;
  color: #ffffff;
}

ul {
  list-style-type: none;
}

.btnInvite {
  background-color: #13b0c0;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  font-size: 70%;
  font-weight: 300;
  margin: 5px;
  cursor: pointer;
  width: 80%;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.btnInvite:hover {
  background-color: #f2d70f;
}
@media (max-width: 600px) {
  .dropdowns {
    margin-right: 10%; /* Reduce the right margin */
  }
  .dropdown {
    font-size: 20px; /* Decrease the font size */
    margin-right: 5px; /* Reduce the right margin */
  }
  .dropdown-items,
  .dropdown-items1,
  .dropdown-items2 {
    width: 100%; /* Set the width to 100% */
    left: initial; /* Reset the left position */
  }
  .dropdown-items2 {
    width: 100vw; /* Set the width to full viewport width */
  }
  .leftSide1 {
    margin-left: -25%; /* Adjust the margin for smaller screens */
  }
}
</style>
