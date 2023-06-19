<template>
  <div class="container">
    <div class="head">
      <div class="grayHead">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ translatedDonateContainer.title }}</span>
      </div>
    </div>
    <div class="cards">
      <div
        v-for="charity in charitys"
        :key="charity.id"
        data-id="charity._id"
        class="card"
      >
        <a :href="charity.url">
          <img :src="charity.image" class="imgDonate" />
        </a>
       <div class="text">
        <h1
        class="ch-name"
        :contenteditable="isEditing.id == charity._id"
        @input="updateCharity"
      >
        {{ charity.name }}
      </h1>
      <p
        class="ch-about"
        :contenteditable="isEditing.id == charity._id"
        @input="updateCharity"
      >
        {{ charity.about }}
      </p>
       </div>
        <button
          class="btnTab"
          :class="{ grayBtn: rangeValue === 0 }"
          :disabled="rangeValue === 0"
          @click="donateHeart"
        >
          {{ getButtonLabel }}
        </button>
        <div v-show="admin">
          <button @click="deleteCharity(charity._id)" class="del-button">
            Delete
          </button>
          <button
            v-show="!isEditing.edit"
            @click="editCharity(charity._id)"
            class="edit-button"
          >
            Edit
          </button>
          <div class="btn-group">
            <button
              v-show="isEditing.id == charity._id"
              @click="saveCharity(charity._id)"
              class="save-button"
            >
              Save
            </button>
            <button
              v-show="isEditing.id == charity._id"
              @click="cancelEditing"
              class="edit-button"
            >
              Cancel
            </button>
          </div>
        </div>
        <p class="rangeDrop" @click="toggleRangeInput('dropdown1')">
          Or, donate a specific amount
        </p>
        <div class="range" v-if="activeRangInput === 'dropdown1'">
          <p>Fewer Heart</p>
          <input
            type="range"
            id="heart-range"
            v-model.number="rangeValue"
            :min="0"
            :max="heart"
            @input="updateHeart"
            :name="charity.name"
          />
          <p>More Heart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DonateHeart",
  data() {
    return {
      heart: 0,
      admin: false,
      newName: "",
      newAbout: "",
      isEditing: {
        id: null,
        edit: false,
      },
      charitys: [],
      rangeValue: 0,
      activeRangInput: null,
      locale: localStorage.getItem("locale") || "en",
    };
  },
  computed: {
    translatedDonateContainer() {
      let translations;
      if (this.locale === "en") {
        translations = {
          title:
            "When you donate Hearts, you're telling us to give more of the money we raise to that charity.",
          image1: "Action Against Hunger",
          text1:
            "A global humanitarian organization committed to ending world hunger",
          image2: "Conservation International",
          text2: "Because saving nature is the only way to save ourselves",
          image3: "Educate!",
          text3:
            "Preparing youth in Africa with the skills to succeed in today's economy",
          image4: "The Foundation to Decrease Worldsuck",
          text4:
            "Distributes 100% of donations to non-profits selected by Nerdfighteria and the Project for Awesome",
          image5: "GiveDirectly",
          text5:
            "Offers a simple approach to addressing poverty: cut out intermediaries and allow poor families to decide for themselves what they need most",
          image6: "Human Rights Watch",
          text6:
            "An independent, international organization that defends the rights of people worldwide",
          image7: "Room to Read",
          text7:
            "Creating a future in which all the world's children can pursue a quality education",
          image8: "Save the Children",
          text8:
            "Giving the world's children a healthy start, an opportunity to learn, and protection from harm",
          image9: "The Bail Project",
          text9:
            "Combatting mass incarceration by disrupting the money bail system—one person at a time",
          donated: `DONATE ${this.rangeValue} HEARTS`,
        };
      } else if (this.locale === "fr") {
        translations = {
          title:
            "Lorsque vous donnez des cœurs, vous nous dites de donner plus d'argent que nous collectons à cet organisme de bienfaisance.",
          image1: "Action contre la faim",
          text1:
            "Une organisation humanitaire mondiale engagée à éradiquer la faim dans le monde",
          image2: "Conservation internationale",
          text2: "Parce que sauver la nature est le seul moyen de nous sauver",
          image3: "Éduquer!",
          text3:
            "Préparer les jeunes en Afrique avec les compétences nécessaires pour réussir dans l'économie d'aujourd'hui",
          image4: "La Fondation pour diminuer le Worldsuck",
          text4:
            "Distribue 100% des dons à des organisations à but non lucratif sélectionnées par Nerdfighteria et le Project for Awesome",
          image5: "Donnerdirectement",
          text5:
            "Propose une approche simple pour lutter contre la pauvreté : éliminer les intermédiaires et permettre aux familles pauvres de décider elles-mêmes de ce dont elles ont le plus besoin",
          image6: "Human Rights Watch",
          text6:
            "Une organisation internationale indépendante qui défend les droits des personnes dans le monde",
          image7: "Chambre à lire",
          text7:
            "Créer un avenir dans lequel tous les enfants du monde pourront suivre une éducation de qualité",
          image8: "Sauver les enfants",
          text8:
            "Donner aux enfants du monde un bon départ, une opportunité d'apprendre et une protection contre le mal",
          image9: "Le projet de cautionnement",
          text9:
            "Lutter contre l'incarcération de masse en perturbant le système de libération sous caution, une personne à la fois",
          donated: `DONNER ${this.rangeValue} CŒURS`,
        };
      } else {
        translations = {
          title: "",
          placeholder: "",
        };
      }
      return translations;
    },
    getButtonLabel() {
      if (this.rangeValue === 0) {
        return this.translatedDonateContainer.donated.replace(
          "${this.heart}",
          this.rangeValue
        );
      } else {
        return this.translatedDonateContainer.donated.replace(
          "${this.heart}",
          this.rangeValue
        );
      }
    },
  },

  created() {
    // Retrieve the stored value from the local storage
    const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));

    // If the value exists, assign it to the heart data property
    if (loginRequest && loginRequest.heart) {
      this.heart = loginRequest.heart;
      this.rangeValue = this.heart;
    }
    axios
      .get("https://ouiadgood.onrender.com/charity")
      .then((response) => {
        console.log(response);
        this.charitys = response.data;
        this.charitys = this.charitys.map((chh) => {
          // Convert file data to a Uint8Array
          if (chh.image) {
            const arrayBufferToBase64 = (buffer) => {
              var binary = "";
              var bytes = [].slice.call(new Uint8Array(buffer));
              bytes.forEach((b) => (binary += String.fromCharCode(b)));
              return window.btoa(binary);
            };
            let base64 = 'data:image/jpeg;base64,';
            return {
              name: chh.name,
              url:chh.url,
              about: chh.about,
              _id: chh._id,
              image: base64 + arrayBufferToBase64(chh.image.data.data),
            };
          }
          return {
            name: chh.name,
            about: chh.about,
            _id: chh._id,
            image: "",
          };
        });
        console.log(response.data);
      })
      .catch((err) => console.log(err));

    //check if user is admin
    const getUser = JSON.parse(localStorage.getItem("loginRequest") || {});
    if (getUser.admin) {
      this.admin = getUser.admin;
    }
  },
  methods: {
    editCharity(id) {
      this.isEditing.edit = true;
      this.isEditing.id = id;
    },
    cancelEditing() {
      this.newName = "";
      this.newAbout = "";
      this.isEditing.edit = false;
      this.isEditing.id = null;
    },
    saveCharity(id) {
      const selectCha = this.charitys.find((cha) => cha._id == id);
      !this.newName && (this.newName = selectCha.name);
      !this.newAbout && (this.newAbout = selectCha.about);
      axios
        .patch(`https://ouiadgood.onrender.com/charity/${id}`, {
          name: this.newName,
          about: this.newAbout,
        })
        .then(() => {
          alert("Updated Successfully");
          this.newName = "";
          this.newAbout = "";
          this.isEditing.edit = false;
          this.isEditing.id = null;
        })
        .catch((err) => console.log(err));
    },
    updateCharity(event) {
      if (event.target.className.includes("ch-name")) {
        this.newName = event.target.textContent;
      }
      if (event.target.className.includes("ch-about")) {
        this.newAbout = event.target.textContent;
      }
    },
    deleteCharity(id) {
      if (id != undefined) {
        axios
          .delete(`https://ouiadgood.onrender.com/charity/${id}`)
          .then((response) => {
            alert("Deleted Successfully");
            this.charitys = response.data;
          })
          .catch((err) => console.log(err));
      }
    },
    updateHeart() {
      const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));

      if (loginRequest && loginRequest.heart) {
        loginRequest.heart = this.heart;
        localStorage.setItem("loginRequest", JSON.stringify(loginRequest));
      }
    },
    donateHeart() {
      const heartDonated = this.rangeValue; // Get the value from the range input

      if (heartDonated > 0) {
        this.heart -= heartDonated; // Subtract the donated heart value from the total heart value

        const loginRequest = JSON.parse(localStorage.getItem("loginRequest"));
        if (loginRequest && loginRequest.heart) {
          loginRequest.heart = this.heart;
          localStorage.setItem("loginRequest", JSON.stringify(loginRequest));

          let heartDonatedValue =
            JSON.parse(localStorage.getItem("heartDonated")) || 0;
          heartDonatedValue += heartDonated;
          localStorage.setItem("heartDonated", heartDonatedValue);
        }
      }

      this.rangeValue = this.heart; // Reset the range value to heart after donation
    },
    toggleRangeInput(dropdown) {
      if (this.activeRangInput === dropdown) {
        this.activeRangInput = null;
      } else {
        this.activeRangInput = dropdown;
      }
    },
  },
};
</script>

<style scoped>
.container{
  padding: 20px;
}
.btn-group {
  display: flex;
  gap: 10px;
  margin: 10px;
}
.ch-name[contenteditable="true"],
.ch-about[contenteditable="true"] {
  border: 1px solid black;
  margin: 10px;
  position: relative;
}

.ch-name[contenteditable="true"]::before {
  content: "Click to edit";
  font-size: 10px;
  opacity: 0.5;
  position: absolute;
  top: -20px;
}
.grayBtn {
  background-color: gray;
}
.del-button,
.edit-button,
.save-button {
  padding: 14px;
  background: red;
  opacity: .7;
  width: 100%;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: none;
  margin: 10px auto;
}
.save-button {
  background-color: green;
  color: #fff;
}
.edit-button {
  background-color: gray;
  color: black;
}

.head {
  background-color: #fff;
  color: #333;
  font-size: 13px;
  padding:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  margin:10px 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}


p {
  color: #000;
}

.ch-name{
  padding: 4px 0;
}


.text{
  padding: 15px;
}



.card {
  display: grid;
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.cards {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap:20px
}
.imgDonate {

}
.btnTab {
  background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  justify-self: center;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btnTab:hover {
  background-color: #14c3d6;
}
.rangeDrop {
  cursor: pointer;
  font-size: 11px;
}

.range {
  display: flex;
  width: 100%;
  margin-top: -7%;
  background-color: #fdfdfd;
  z-index: 9999;
  height: 50px;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.range p {
  font-size: 14px;
}
</style>
