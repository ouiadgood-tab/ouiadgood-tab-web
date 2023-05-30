<template>
<div class="container">
        <div class="head">
            <div class="grayHead">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>When you donate Hearts, you're telling us to give more of the money we raise to that charity.</span>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <a href="https://www.actionagainsthunger.org/"><img src="./image/acfusa-201804.png" class="imgDonate"/></a>
                <h1>Action Against Hunger</h1>
                <p>A global humanitarian organization committed to ending world hunger</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://www.conservation.org/"><img src="./image/conservation-international-201804.png" class="imgDonate"/></a>
                <h1>Conservation International</h1>
                <p>Because saving nature is the only way to save ourselves</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://www.experienceeducate.org/"><img src="./image/educate-201807.jpg" class="imgDonate"/></a>
                <h1>Educate!</h1>
                <p>Preparing youth in Africa with the skills to succeed in today's economy</p>
                <button class="btnTab" :class="{ grayBtn: heart === 1 }" :disabled="heart === 1" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <a href="https://fightworldsuck.org/"><img src="./image/ftdws.jpg" class="imgDonate"/></a>
                <h1 class="worldSuck">The Foundation to Decrease Worldsuck</h1>
                <p>Distributes 100% of donations to non-profits selected by Nerdfighteria and the Project for Awesome</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://www.givedirectly.org/"><img src="./image/givedirectly.png" class="imgDonate"/></a>
                <h1 class="gDir">GiveDirectly</h1>
                <p>Offers a simple approach to addressing poverty: cut out intermediaries and allow poor families to decide for themselves what they need most</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://www.hrw.org/"><img src="./image/human-rights-watch.jpg" class="imgDonate"/></a>
                <h1>Human Rights Watch</h1>
                <p>An independent, international organization that defends the rights of people worldwide</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <img src="./image/room-to-read-20210809.png" class="imgDonate"/>
                <h1>Room to Read</h1>
                <p>Creating a future in which all the world's children can pursue a quality education</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://www.savethechildren.org/"><img src="./image/save-the-children-201804.png" class="imgDonate"/></a>
                <h1>Save the Children</h1>
                <p>Giving the world's children a healthy start, an opportunity to learn, and protection from harm</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
            <div class="card">
                <a href="https://bailproject.org/"><img src="./image/the-bail-project.jpg" class="imgDonate"/></a>
                <h1>The Bail Project</h1>
                <p>Combatting mass incarceration by disrupting the money bail system—one person at a time</p>
                <button class="btnTab" :class="{ grayBtn: heart === 0 }" :disabled="heart === 0" @click="resetHeart">DONATE {{ heart }} HEARTS</button>
            </div>
        </div>
</div>
</template>

<script>
export default{
    name:'DonateHeart',
    data(){
        return{
            heart:0,
        };
    },

    created() {
    // Retrieve the stored value from the local storage
    const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));

    // If the value exists, assign it to the heart data property
    if (loginRequest && loginRequest.heart) {
      this.heart = loginRequest.heart;
    }
  },
  methods: {
    resetHeart() {
    const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));

    if (loginRequest && loginRequest.heart) {
      const heartDonated = loginRequest.heart; // Store the current value of heart in heartDonated
      this.heart = 0; // Set the heart value to 0

      loginRequest.heart = this.heart;
      localStorage.setItem('loginRequest', JSON.stringify(loginRequest));

      localStorage.setItem('heartDonated', heartDonated) || 0; // Save the heartDonated value in local storage
    }
  },
  },

}
</script>

<style scoped>
.grayBtn{
    background-color: gray;
}
.container{
    margin-right: 10vh;
}
.head {
  background-color: #fff;
  color: #333;
  font-size: 13px;
  padding: 15px 70px 15px 70px;
  width: 60vh;
  margin-top: 3%;
  margin-left: 43%;
  margin-bottom: 3%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.fa-solid{
    float: left;
}
.grayHead{
    margin-left: -6%;
    margin-right: -6%;
}
p{
    color: #000;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 30px;
}
h1{
    font-size: 20px;
    margin-bottom: 30px;
}
.worldSuck{
    margin-top: -1% !important;
    margin-bottom: -3%;
}
.gDir{
    margin-top: -1% !important;
}

.card {
  width: 35%;
  height: 400px;
 margin-left: 2%;
  margin-bottom: 1%;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.cards {
  display: flex;
  margin-left: 25%;
}
.imgDonate{
    width: 45vh;
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
</style>