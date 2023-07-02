<template>
    <div class="container">
        <div class="head">
            <div class="grayOutMain">
                <i class="fa-solid fa-chart-simple"></i>
                {{ translatedStatsContainer.title }}
            </div>
        </div>

        <div class="tabInfo">
            <div>
                <span>{{daysLogged}}</span>
                <p>{{ translatedStatsContainer.tabber}}</p>
            </div>
            <div>
                <span>{{totalTab}}</span>
                <p>{{ translatedStatsContainer.totalTab }}</p>
            </div>
            <div>
                <span>{{ maxTab }}</span>
                <p>{{ translatedStatsContainer.maxTab }}</p>
                <p class="grayOut">{{maxHeartDate}}</p>
            </div>
            <!--<div>
                <span>12</span>
                <p>your level</p>
                <p class="grayOut">28 hearts until next level</p>
            </div>-->
        </div>
        <div class="tabInfo">
            <div>
                <span>{{ inviteNumber }}</span>
                <p>{{ translatedStatsContainer.recruit }}</p>
                <button class="btnTab"> <router-link class="router" to="/setting/Invite">
                  {{ translatedStatsContainer.invite }}
                </router-link></button>
            </div>
            <div>
                <span>{{ heartDonated }}</span>
                <p>{{ translatedStatsContainer.donate }}</p>
                <button class="btnTab"><router-link class="router" to="/setting/Donate">
                  {{ translatedStatsContainer.donated }}
                </router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'StatsCon',
    data() {
    return {
      daysLogged: 1,
      totalTab: '',
      maxTab: '',
      maxHeartDate: '',
      heartDonated: '',
      locale: localStorage.getItem('locale') || 'en',
    };
  },
  created() {
    const storedDate = localStorage.getItem('lastLogin');

    // Check if the stored date exists and is not today's date
    if (storedDate && !isToday(new Date(), storedDate)) {
      // Increment the number of days logged
      this.daysLogged++;
    }

    // Update the last login date in the local storage
    localStorage.setItem('lastLogin', new Date().toISOString());

    // Retrieve the stored value from the local storage
    const daysLogged = localStorage.getItem('daysLogged') || 0;
    if (daysLogged) {
      this.daysLogged = parseInt(daysLogged);
    } else {
      // Set initial value for 'daysLogged' in the local storage
      localStorage.setItem('daysLogged', this.daysLogged.toString());
    }


    // Retrieve the stored value from the local storage
    this.totalTab = localStorage.getItem('totalTab') || 0;
    const maxTab = localStorage.getItem('maxHeart');
    const maxHeartDate = localStorage.getItem('maxHeartDate');
    const heartDonated = localStorage.getItem('heartDonated');

     // If the value exists, parse it to an integer and assign it to daysLogged
     if (daysLogged) {
      this.daysLogged = parseInt(daysLogged);
    }

    if (maxTab) {
    this.maxTab = maxTab;
  }

  if (maxHeartDate) {
    this.maxHeartDate = maxHeartDate;
  }

  if (heartDonated){
    this.heartDonated = heartDonated;
  }
  // Retrieve the createdAt date from the local storage loginRequest
  const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
  if (loginRequest && loginRequest.createdAt) {
    const createdAt = new Date(loginRequest.createdAt);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - createdAt.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.daysLogged = daysDiff;
  }


    // Make the API GET request to retrieve user data
    this.getTotalTab();
  },
  methods: {
    logIn() {
      // Increment the number of days logged
      this.daysLogged++;

      // Update the value in the local storage
      localStorage.setItem('daysLogged', this.daysLogged.toString());
    },
    getTotalTab(){
      // Make the API GET request to retrieve user data
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
      const userId = loginRequest._id;
      axios
       .get(`https://ouiadgood-lxzc.onrender.com/users/${userId}`)
        .then(response => {
          // Handle the response and assign the data to userData
          this.totalTab = response.data.totalheart;
          console.log(response)
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    }
  },
  computed: {
    inviteNumber(){
            const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));
            return loginRequest ? loginRequest.numberOfReferred : 0;
        },
    translatedStatsContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title:"Hi, Wonderful User ! Here's all your great work Tabbing, by the numbers.",
          tabber: 'days as a Tabber',
           totalTab:"tabs all time",
          maxTab: "max tab in one day",
          recruit: "Tabbers recruited",
          donate: "Heart Donated",
          invite: "INVITE FRIENDS",
          donated:'DONATE HEARTS'
        };
      } else if (this.locale === 'fr') {
        translations = {
          title:"Salut, merveilleux utilisateur ! Voici tout votre excellent travail Tabbing, en chiffres.",
          tabber: 'jours comme Tabber',
           totalTab:"onglets tout le temps",
          maxTab: "onglet max en un jour",
          recruit: "Tabbers recrutés",
          donate: "Coeur donné",
          invite: "INVITER DES AMIS",
          donated:'DONNER DES CŒURS'
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
};

function isToday(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  );
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  align-items: center; 
  margin: 20px;
}
.router{
    text-decoration: none;
    color: #fff;
}

.head {
  background-color: #fff;
  color: rgb(5, 169, 219);
  padding:30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.177);
}
.tabInfo {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 30px 0;
  gap:30px;
  justify-content: center;
  flex-wrap: wrap;
}

.tabInfo > div{
    background-color: #fff;
  color: #13b0c0;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  text-align: center;
  padding:  40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

span{
    font-size: 4rem;
    font-weight: bold;
}
p{
    color: black;
}

.btnTab {
  background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  margin: 14px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btnTab:hover {
  background-color: #14c3d6;
}


.grayOut{
    color: #707070 !important;
}
.grayOutMain{
    color: #707070 !important;
}
.fa-chart-simple{
    background-color: #707070;
    color: #fff;
    padding: 3px;
    border-radius: 20%;
}


</style>