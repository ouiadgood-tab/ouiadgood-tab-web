<template>
    <div class="container">
        <div class="head">
            <div class="grayOutMain">
                <i class="fa-solid fa-chart-simple"></i>
                Hi, Wonderful User ! Here's all your great work Tabbing, by the numbers.
            </div>
        </div>
        <div class="tabInfo">
            <div>
                <span>{{daysLogged}}</span>
                <p>days as a Tabber</p>
            </div>
            <div>
                <span>{{totalTab}}</span>
                <p>tabs all time</p>
            </div>
            <div>
                <span>{{ maxTab }}</span>
                <p>max tab in one day</p>
                <p class="grayOut">{{maxHeartDate}}</p>
            </div>
            <div>
                <span>12</span>
                <p>your level</p>
                <p class="grayOut">28 hearts until next level</p>
            </div>
        </div>
        <div class="tabInfo2">
            <div>
                <span>0</span>
                <p>Tabbers recruited</p>
                <button class="btnTab"> <router-link class="router" to="/setting/Invite">INVITE FRIENDS</router-link></button>
            </div>
            <div>
                <span>{{ heartDonated }}</span>
                <p>Heart donated</p>
                <button class="btnTab"><router-link class="router" to="/setting/Donate">DONATE HEARTS </router-link></button>
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
    };
  },
  created() {
    // Retrieve the stored value from the local storage
    const daysLogged = localStorage.getItem('daysLogged');
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
       .get(`https://ouiadgood.onrender.com/users/${userId}`)
        .then(response => {
          // Handle the response and assign the data to userData
          this.totalTab = response.data.totalheart;
          //console.log(response)
        })
        .catch(error => {
          // Handle the error if needed
          console.error(error);
        });
    }
  },
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
  
}
.router{
    text-decoration: none;
    color: #fff;
}

.head {
  background-color: #fff;
  color: rgb(5, 169, 219);
  padding: 20px 160px 20px 160px;
  width: 100vh;
  margin-left: 20%;
  margin-bottom: 5%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.tabInfo {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 20%;
  margin-top: -5%;
}

.tabInfo > div{
    background-color: #fff;
  color: #13b0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding:  40px 20px 0px 20px;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  width: 215px;
  min-height: 150px;
}

.tabInfo2 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 20%;
}

.tabInfo2 > div{
    background-color: #fff;
  color: #13b0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding:  40px 20px 5px 20px;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  width: 515px;
  min-height: 150px;
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
    margin-top: -10px;
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

@media (max-width: 768px) {
  .tabInfo > div {
    width: 100%;
  }
  .tabInfo2 > div {
    width: 100%;
  }

  .head{
    width: 100%;
  }
}
</style>