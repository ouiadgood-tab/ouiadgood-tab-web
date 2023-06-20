<template>
  <!-- <div class="cards"> -->
    <div :key="ID" :data-id="ID" class="card">
      <a :href="URL">
        <img :src="image" class="imgDonate" />
      </a>
      <div class="text">
        <h1
          class="ch-name"
          :contenteditable="isEditing"
          @input="updateCharity"
        >
          {{ NAME }}
        </h1>
        <p
          class="ch-about"
          :contenteditable="isEditing"
          @input="updateCharity"
        >
          {{ ABOUT }}
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
  <!-- </div> -->
</template>

<script> 
import axios from 'axios'
export default {
  name: "DonateCard",
  props:{
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
  },
  data() {
    return {
      heart: 0,

      NAME:this.name,
      ID:this.id,
      URL:this.url,
      ABOUT:"",

      admin: false,
      newName: "",
      newAbout: "",
      newUrl: "",
      newImage: "",
      isEditing: {
        id: null,
        edit: false,
      },
      charitys: [],
      rangeValue: 0,
      activeRangInput: null,
    };
  },
  computed: {
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
      const formData = new FormData();
      formData.append("name", this.newName);
      formData.append("about", this.newAbout);
      formData.append("url", this.newUrl);
      formData.append("image", null);
      axios
        .post("https://ouiadgood.onrender.com/charity/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        })
        .then(() => {
          alert("Updated Successfully");
          this.newName = "";
          this.newAbout = "";
          this.isEditing.edit = false;
          this.isEditing.id = null;
          this.deleteCharity(id);
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
      if (event.target.className.includes("ch-url")) {
        this.newUrl = event.target.textContent;
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

.btn-group {
    display: flex;
    gap: 10px;
    margin: 10px;
  }
  .ch-url{
    padding: 10px;
  }
  .ch-name[contenteditable="true"],
  .ch-about[contenteditable="true"] {
    border: 1px solid black;
    width: 100%;
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
