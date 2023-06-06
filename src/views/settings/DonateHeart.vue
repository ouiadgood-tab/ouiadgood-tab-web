<template>
<div class="container">
        <div class="head">
            <div class="grayHead">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>{{ translatedDonateContainer.title }}</span>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <a href="https://www.actionagainsthunger.org/"><img src="./image/acfusa-201804.png" class="imgDonate"/></a>
                <h1>{{  translatedDonateContainer.image1 }}</h1>
                <p>{{ translatedDonateContainer.text1 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown1')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown1'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.conservation.org/"><img src="./image/conservation-international-201804.png" class="imgDonate"/></a>
                <h1>{{ translatedDonateContainer.image2 }}</h1>
                <p>{{ translatedDonateContainer.text2 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown2')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown2'">
                  <p>Fewer Heart</p>
                  <input  type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.experienceeducate.org/"><img src="./image/educate-201807.jpg" class="imgDonate"/></a>
                <h1>{{ translatedDonateContainer.image3 }}</h1>
                <p>P{{ translatedDonateContainer.text3 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown3')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown3'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <a href="https://fightworldsuck.org/"><img src="./image/ftdws.jpg" class="imgDonate"/></a>
                <h1 class="worldSuck">T{{ translatedDonateContainer.image4 }}</h1>
                <p>{{ translatedDonateContainer.text4 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown4')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown4'">
                  <p>Fewer Heart</p>
                  <input  type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.givedirectly.org/"><img src="./image/givedirectly.png" class="imgDonate"/></a>
                <h1 class="gDir">{{ translatedDonateContainer.image5 }}</h1>
                <p>{{ translatedDonateContainer.text5 }}</p>
                <button  class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown5')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown5'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.hrw.org/"><img src="./image/human-rights-watch.jpg" class="imgDonate"/></a>
                <h1>{{ translatedDonateContainer.image6 }}</h1>
                <p>{{ translatedDonateContainer.text6 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown6')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown6'">
                  <p>Fewer Heart</p>
                  <input  type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>more Heart</p>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <img src="./image/room-to-read-20210809.png" class="imgDonate"/>
                <h1>{{ translatedDonateContainer.text7 }}</h1>
                <p>{{ translatedDonateContainer.text7 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown7')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown7'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range"
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://www.savethechildren.org/"><img src="./image/save-the-children-201804.png" class="imgDonate"/></a>
                <h1>{{ translatedDonateContainer.image8 }}</h1>
                <p>{{ translatedDonateContainer.image8 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown8')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown8'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
            </div>
            <div class="card">
                <a href="https://bailproject.org/"><img src="./image/the-bail-project.jpg" class="imgDonate"/></a>
                <h1>{{ translatedDonateContainer.image9 }}</h1>
                <p>{{ translatedDonateContainer.image9 }}</p>
                <button class="btnTab" :class="{ grayBtn: rangeValue === 0 }" 
                :disabled="rangeValue === 0" @click="donateHeart">
                {{ getButtonLabel }}
                </button>
                <p class="rangeDrop" @click="toggleRangeInput('dropdown9')">Or, donate a specific amount</p>
                <div class="range" v-if="activeRangInput === 'dropdown9'">
                  <p>Fewer Heart</p>
                  <input type="range" id="heart-range" 
                v-model.number="rangeValue" 
                :min="0" :max="heart" 
                @input="updateHeart" />
                <p>More Heart</p>
                </div>
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
            rangeValue: 0,
            activeRangInput: null,
            locale: localStorage.getItem('locale') || 'en',
        };
    },

    computed: {
    translatedDonateContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
            title:"When you donate Hearts, you're telling us to give more of the money we raise to that charity.",
            image1: 'Action Against Hunger',
            text1:"A global humanitarian organization committed to ending world hunger",
            image2: "Conservation International",
            text2: "Because saving nature is the only way to save ourselves",
            image3: "Educate!",
            text3: "Preparing youth in Africa with the skills to succeed in today's economy",
            image4: 'The Foundation to Decrease Worldsuck',
            text4:"Distributes 100% of donations to non-profits selected by Nerdfighteria and the Project for Awesome",
            image5: "GiveDirectly",
            text5: "Offers a simple approach to addressing poverty: cut out intermediaries and allow poor families to decide for themselves what they need most",
            image6: "Human Rights Watch",
            text6: "An independent, international organization that defends the rights of people worldwide",
            image7: 'Room to Read',
            text7: "Creating a future in which all the world's children can pursue a quality education",
            image8: "Save the Children",
            text8: "Giving the world's children a healthy start, an opportunity to learn, and protection from harm",
            image9: "The Bail Project",
            text9: "Combatting mass incarceration by disrupting the money bail system—one person at a time",
            donated:`DONATE ${ this.rangeValue } HEARTS`
        };
      } else if (this.locale === 'fr') {
        translations = {
            title:"Lorsque vous donnez des cœurs, vous nous dites de donner plus d'argent que nous collectons à cet organisme de bienfaisance.",
            image1: "Action contre la faim",
            text1:"Une organisation humanitaire mondiale engagée à éradiquer la faim dans le monde",
            image2: "Conservation internationale",
            text2: "Parce que sauver la nature est le seul moyen de nous sauver",
            image3: "Éduquer!",
            text3: "Préparer les jeunes en Afrique avec les compétences nécessaires pour réussir dans l'économie d'aujourd'hui",
            image4: "La Fondation pour diminuer le Worldsuck",
            text4:"Distribue 100% des dons à des organisations à but non lucratif sélectionnées par Nerdfighteria et le Project for Awesome",
            image5: "Donnerdirectement",
            text5: "Propose une approche simple pour lutter contre la pauvreté : éliminer les intermédiaires et permettre aux familles pauvres de décider elles-mêmes de ce dont elles ont le plus besoin",
            image6: "Human Rights Watch",
            text6: "Une organisation internationale indépendante qui défend les droits des personnes dans le monde",
            image7: 'Chambre à lire',
            text7: "Créer un avenir dans lequel tous les enfants du monde pourront suivre une éducation de qualité",
            image8: "Sauver les enfants",
            text8: "Donner aux enfants du monde un bon départ, une opportunité d'apprendre et une protection contre le mal",
            image9: "Le projet de cautionnement",
            text9: "Lutter contre l'incarcération de masse en perturbant le système de libération sous caution, une personne à la fois",
            donated:`DONNER ${ this.rangeValue } CŒURS`
        };
      } else {
        translations = {
          title: '',
          placeholder: '',
        };
      }
      return translations;
    },
    getButtonLabel() {
      if (this.rangeValue === 0) {
        return this.translatedDonateContainer.donated.replace('${this.heart}', this.rangeValue);
      } else {
        return this.translatedDonateContainer.donated.replace('${this.heart}', this.rangeValue);
      }
    },
  },

    created() {
    // Retrieve the stored value from the local storage
    const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));

    // If the value exists, assign it to the heart data property
    if (loginRequest && loginRequest.heart) {
      this.heart = loginRequest.heart;
      this.rangeValue = this.heart;
    }
  },
  methods: {
    updateHeart() {
      const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));

      if (loginRequest && loginRequest.heart) {
        loginRequest.heart = this.heart;
        localStorage.setItem('loginRequest', JSON.stringify(loginRequest));
      }
    },
    donateHeart() {
      const heartDonated = this.rangeValue; // Get the value from the range input

      if (heartDonated > 0) {
        this.heart -= heartDonated; // Subtract the donated heart value from the total heart value

        const loginRequest = JSON.parse(localStorage.getItem('loginRequest'));
        if (loginRequest && loginRequest.heart) {
          loginRequest.heart = this.heart;
          localStorage.setItem('loginRequest', JSON.stringify(loginRequest));

          let heartDonatedValue = JSON.parse(localStorage.getItem('heartDonated')) || 0;
          heartDonatedValue += heartDonated;
          localStorage.setItem('heartDonated', heartDonatedValue);
        }
      }

      this.rangeValue = this.heart; // Reset the range value to heart after donation
    },
    toggleRangeInput(dropdown) {
            if (this.activeRangInput === dropdown) {
                this.activeRangInput = null;
            }
            else {
                this.activeRangInput= dropdown;
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
    font-size: 18px;
    margin-bottom: 10px;
}
.worldSuck{
    margin-top: -1% !important;
    margin-bottom: -3%;
}
.gDir{
    margin-top: -1% !important;
}

.card {
  display:grid;
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
  width: 60%;
  justify-self: center;
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
.rangeDrop{
  cursor: pointer;
  font-size: 11px;
}

.range{
  display: flex;
  width: 100%;
  margin-top: -7%;
  background-color: #fdfdfd;
  z-index: 9999;
  height: 50px;
  justify-self: center;
  align-self:center;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.range p{
  font-size: 14px;
}
</style>