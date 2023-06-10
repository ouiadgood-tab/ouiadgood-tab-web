<template>
  <div class="container">
    <div class="setPos">
      <SettingNav />
    </div>
    <div class="admin">
      <h1>Create Charity</h1>
      <div class="">
        <input v-model="name" req name="name" placeholder="Create Charity" />
        <input v-model="about" name="about" placeholder="About Charity" />
        <br />
        <button @click="create">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import SettingNav from "./SettingNav.vue";
import axios from "axios";
export default {
  name: "AdminView",
  components: { SettingNav },
  data() {
    return {
      name: "",
      about: "",
    };
  },
  methods: {
    create() {
    //   const vals = this.name || this.about;
    //   if (vals.match(/\s/g) || vals == "") {
    //     return alert("Fields Cannot be Empty");
    //   }
      // Make a POST request to the API endpoint
      axios
        .post("https://ouiadgood.onrender.com/charity/add", {
            name:this.name,
            about:this.about
        })
        .then((response) => {
           if(response.status == 200){
            alert("Created Successfully")
            this.name = "";
            this.about=""
           }
        })
        .catch(() => {
       alert("An Error Occurred")
        });
    },
  },
};
</script>

<style scoped>
input,
button {
  display: inline-block;
  margin: 10px;
  padding: 20px;
}
.setPos {
  position: static;
}
.admin {
  margin-top: -45%;
}
</style>
