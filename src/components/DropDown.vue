<template>
    <div class="dropdowns">
      <ul class="dropdown" @click="toggleDropdown('dropdown1')" :class="{ active: activeDropdown === 'dropdown1' }">
        <div><MoneyCount class="icon"/></div>
        <ul class="dropdown-items1" v-if="activeDropdown === 'dropdown1'">
            <div>
              <p class="info">
                This is how much money our community has raised for charity.
                Recruit your friends to raise more!
              </p>
              <button class="btnInvite"><router-link class="router" to="/setting/Invite">Invite a friend</router-link></button>
            </div>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown2')" :class="{ active: activeDropdown === 'dropdown2' }">
        <i class="fa-solid fa-display icon"></i>
        <ul class="dropdown-items" v-if="activeDropdown === 'dropdown2'">
          <div>
            <h3 class="info">Watch a video, earn 100 hearts!</h3>
            <p class="info">No videos available right now, but we’ll let you know when one is.</p>
          </div>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown2+')" :class="{ active: activeDropdown === 'dropdown2+' }">
        {{ heart }}<i class="fa-sharp fa-regular fa-heart icon"></i>
        <ul class="dropdown-items2" v-if="activeDropdown === 'dropdown2+'">
          <div class="heartDrop">
          <h2>82 <i class="fa-sharp fa-regular fa-heart icon"></i></h2>
          <P>donated</P>
          <button class="btnInvite"><router-link class="router" to="/setting/Donate">DONATE HEARTS</router-link></button>
         </div>
         <hr/>
         <div class="heartDrop">
          <h2>0<i class="fa-sharp fa-regular fa-heart icon"></i></h2>
          <P>recruited friends</P>
          <button class="btnInvite"><router-link class="router" to="/setting/Invite">INVITE FRIEND</router-link></button>
         </div>
         <hr/>
         <div >
          <div class="heartDrop openSpace">
            <p class="leftSide">Open a tab</p>
            <p>1<i class="fa-sharp fa-regular fa-heart icon"></i></p>
          </div>
          <div class="heartDrop">
            <p class="leftSide1">Recruit friend</p>
            <p>350<i class="fa-sharp fa-regular fa-heart icon"></i></p>
          </div>
         </div>
        </ul>
      </ul>
      <ul class="dropdown" @click="toggleDropdown('dropdown3')" :class="{ active: activeDropdown === 'dropdown3' }">
        <i class="fa-solid fa-ellipsis icon"></i>
          <div>
            <div class="dropdown-items" v-if="activeDropdown === 'dropdown3'">
              <div>
                <i class="fa-solid fa-heart drop-icon"></i>
                <router-link class="router" to="/setting/Donate">Donate Hearts</router-link>
              </div>
              <div>
                <i class="fa-solid fa-chart-simple drop-icon"></i>
                <router-link class="router" to="/setting/Stats">Your Stats</router-link>
              </div>
              <div>
                <i class="fa-solid fa-user-plus drop-icon"></i>
                <router-link class="router" to="/setting/Invite">Invite Friends</router-link>
              </div>
              <div>
                <i class="fa-solid fa-user drop-icon"></i>
                <router-link class="router" to="/setting/Account">Account</router-link>
              </div>
              <div @click="logout" class="router" >
                <i class="fa-solid fa-right-from-bracket drop-icon"></i>
                Logout
              </div>
            </div>
          </div>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .dropdowns {
    display: flex;
    justify-content:right;
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
    width: 130px;
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
  h2{
    margin-bottom:-8%;
  }
  .openSpace{
    margin-bottom: -6%;
  }
  .heartDrop{
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
    font-size:14px;
    margin-top: -3%;
  }
  .router {
  text-decoration: none;
  color: #ffffff;
}
.leftSide{
  float: left;
}
.leftSide1{
  float: left;
  margin-left: -40%;
}

.drop-icon{
  float: left;
  margin-left: -6%;
}
  
  .dropdown-items div:hover {
    background-color: #13afc063;
  }
.info{
  font-size: small;
  color: #ffffff;
}

ul{
  list-style-type: none;
}

.btnInvite{
  background-color: #13b0c0; 
  border: none; 
  color: white;
  padding: 10px 10px;
  text-align: center; 
  font-size: 70%; 
  font-weight: 300;
  margin: 5px ; 
  cursor: pointer; 
  width: 80%;
  border-radius: 8px; 
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2); 
  transition: background-color 0.3s ease;
}

.btnInvite:hover{
  background-color: #f2d70f;
}
  </style>

  <script >
import MoneyCount from './MoneyCount.vue';
import axios from 'axios';
//import { useAuth0 } from '@auth0/auth0-vue';


  export default {
    name: "DropDown",
    data() {
        return {
            activeDropdown: null,
            heart: 0,
        };
    },

    created() {
    // Retrieve the stored value from the local storage
    const heart = localStorage.getItem('heart');

    // If the value exists, parse it to an integer and assign it to heart
    if (heart) {
      this.heart = parseInt(heart);
    }
    // Increment the heart value when the page loads or refreshes
    this.incrementHeart();
  },

    methods: {
      incrementHeart() {
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      this.heart++; // Increment the heart count
      if (loginRequest) {
        loginRequest.heart = this.heart;
        localStorage.setItem('loginRequest', JSON.stringify(loginRequest));
      }
      // Update the value in the local storage
      localStorage.setItem('heart', this.heart.toString());

      // Make the HTTP request to update the heart count in the database
      axios
        .patch('https://ouiadgood.onrender.com/users/heart', {
          heart: this.heart,
          email: loginRequest.email,
          updateTotal: false,
        })
        .then(response => {
          // Handle the response if needed
          console.log(response);
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    },
        toggleDropdown(dropdown) {
            if (this.activeDropdown === dropdown) {
                this.activeDropdown = null;
            }
            else {
                this.activeDropdown = dropdown;
            }
        },

        logout() {
      // Delete local storage data
      localStorage.removeItem('loginRequest');
      
      // Redirect to /login
      this.$router.push('/login');
    },
    },
    components: { MoneyCount }
};
  </script>