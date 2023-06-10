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
      const pattern = /^$|^.{0,2}$/;
      if (pattern.test(this.name) || pattern.test(this.about)) {
        return alert("Length too Short");
      }
      // Make a POST request to the API endpoint
      axios
        .post("https://ouiadgood.onrender.com/charity/add", {
          name: this.name,
          about: this.about,
        })
        .then((response) => {
          if (response.status == 200) {
            alert("Created Successfully");
            this.name = "";
            this.about = "";
          }
        })
        .catch((err) => {
          alert(err.response.data);
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
