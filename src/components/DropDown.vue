<template>
  <div class="top-navigation">
    <ul>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <i class="fa-sharp fa-regular fa-note-sticky icon"></i>
        <ul v-if="showDropdown" class="dropdown">
          <AddNote />
        </ul>
      </li>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <i class="fa-solid fa-list icon"></i>
        <ul v-if="showDropdown" class="dropdown no-s">
          <AddTodo />
        </ul>
      </li>
    </ul>

    <!-- LEFT BAR -->

    <ul>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <MoneyCount class="icon" />
        <ul v-if="showDropdown" class="dropdown">
          <li>{{ translatedDropDownContainer.moneyTitle }}</li>
       <router-link to="/tab/setting/invite">
        <button class="btnInvite">
            {{ translatedDropDownContainer.moneyButton }}
          </button>
       </router-link>
        </ul>
      </li>
      <router-link to="/tab/video" target="_blank">
        <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <i class="fa-solid fa-display icon"></i>
          <ul v-if="showDropdown" class="dropdown">
            <li class="bold">{{ translatedDropDownContainer.videoTitle }}</li>
            <li class="">{{ translatedDropDownContainer.videSub }}</li>
          </ul>
        </li>
      </router-link>
      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        {{ heart }}<i class="fa-sharp fa-regular fa-heart icon"></i>
        <ul v-if="showDropdown" class="dropdown">
          <div class="leftSide"></div>
          <div class="heartDrop">
            <h2>
              {{ heartDonated }}
              <i class="fa-sharp fa-regular fa-heart icon"></i>
            </h2>
            <P>{{ translatedDropDownContainer.donate }}</P>
            <button class="btnInvite">
              <router-link class="router" to="/tab/setting/Donate">{{
                translatedDropDownContainer.donateButton
              }}</router-link>
            </button>
          </div>
          <hr />
          <div class="heartDrop">
            <div class="leftSide"></div>
            <h2>
              {{ inviteNumber
              }}<i class="fa-sharp fa-regular fa-heart icon"></i>
            </h2>
            <P>{{ translatedDropDownContainer.invite }}</P>
            <button class="btnInvite">
              <router-link class="router" to="/tab/setting/Invite">{{
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
            <div class="heartDrop">
              <p class="leftSide">{{ translatedDropDownContainer.recruit }}</p>
              <p>350<i class="fa-sharp fa-regular fa-heart icon"></i></p>
            </div>
          </div>
        </ul>
      </li>

      <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <i class="fa-solid fa-ellipsis icon"></i>
        <ul v-if="showDropdown" class="dropdown eli">
          <router-link class="router" to="/tab/setting/Donate"
            ><div>
              <i class="fa-solid fa-heart drop-icon"></i>
              {{ translatedDropDownContainer.donateButton }}
            </div></router-link
          >
          <router-link class="router" to="/tab/setting/Stats">
            <div>
              <i class="fa-solid fa-chart-simple drop-icon"></i>
              {{ translatedDropDownContainer.stats }}
            </div></router-link
          >
          <router-link v-show="admin" class="router" to="/tab/setting/Admin">
            <div>
              <i class="fa-solid fa-user-tie drop-icon"></i>
              {{ translatedDropDownContainer.admin }}
            </div></router-link
          >

          <router-link class="router" to="/tab/setting/Invite">
            <div>
              <i class="fa-solid fa-user-plus drop-icon"></i>
              {{ translatedDropDownContainer.inviteButton }}
            </div>
          </router-link>
          <router-link class="router" to="/tab/setting/Widget">
            <div>
              <i class="fa-solid fa-gear drop-icon"></i>
              {{ translatedDropDownContainer.Setting }}
            </div></router-link
          >
          <div @click="logoutUser" class="router">
            <i class="fa-solid fa-right-from-bracket drop-icon"></i>
            {{ translatedDropDownContainer.logout }}
          </div>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import MoneyCount from "./MoneyCount.vue";
import axios from "axios";
import { googleLogout } from "vue3-google-login";
import AddTodo from "./AddTodo.vue";
import AddNote from "./AddNote.vue";
export default {
  name: "DropDown",
  data() {
    return {
      activeDropdown: null,
      showDropdown: false,
      heart: 0,
      totalheart: 0,
      admin: false,
      maxHeart: 0,
      todayHeart: 0,
      maxHeartDate: "",
      heartDonated: "",
      locale: localStorage.getItem("locale") || "en",
    };
  },
  computed: {
    inviteNumber() {
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
          admin: "Admin",
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
          admin: "administrateur",
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
    //check is logged in user is admin
    const getUser = JSON.parse(localStorage.getItem("loginRequest") || "{}");
    if (getUser.admin) {
      this.admin = getUser.admin || false;
    }

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
      window.location.replace("/tab/login");
      googleLogout();
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
  components: { MoneyCount, AddTodo, AddNote },
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
hr {
  margin: 10px 0;
}
.top-navigation {
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.bold {
  font-weight: bold;
  padding: 4px;
}

li {
  display: inline-block;
  position: relative;
  padding: 20px;
  cursor: pointer;
  color: #fff;
}

.dropdown {
  display: none;
  position: absolute;
  left: 0;
  padding: 7px;
  z-index: 99;
  width: 200px;
  text-align: center;
  color: #fff;
  background: black;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #13afc063;
  backdrop-filter: blur(10px);
}
.dropdown1 {
  display: none;
  position: absolute;
  left: 0;
  padding: 7px;
  z-index: 1;
  width: 300px;
  text-align: center;
  color: #fff;
  background: black;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #13afc063;
  backdrop-filter: blur(10px);
}

.no-s{
  background: none;
  width: auto;
  box-shadow: none;
  backdrop-filter: none;
}

.dropdown.bg {
}

.dropdown.eli .router {
  display: flex;
  gap: 10px;
  border-radius: 10px;
  padding: 10px;
}
.dropdown.eli .router:hover {
  background: #13afc0f4;
}

li:hover .dropdown {
  display: block;
}
li:hover .dropdown1 {
  display: block;
}

.icon {
  font-size: 25px !important;
  color: #fff;
}

.btnInvite {
  background-color: #13b0c0;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  font-size: 70%;
  font-weight: 300;
  margin: 10px 5px;
  cursor: pointer;
  width: 80%;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.btnInvite:hover {
  background-color: #f2d70f;
}

.heartDrop {
  padding: 5px;
}

.heartDrop .leftSide {
  margin: 10px 0;
}

.heartDrop .leftSide + p {
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 5px;
  justify-content: center;
}
</style>
