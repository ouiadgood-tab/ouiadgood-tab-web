<template>
  <div class="container">
    <h1>Admin</h1>
    <div class="setPos">
      <a class="router" href="/setting/Admin">Create Charity</a>
      <a class="router" href="/setting/Donate">Edit Charity</a>
      <button @click="logoutUser">logout</button>
    </div>
    <div class="admin">
      <h1>Create Charity</h1>
      <div class="">
        <input v-model="name" req name="name" placeholder="Create Charity" />
        <input v-model="about" name="about" placeholder="About Charity" />
        <input type="file" class="image-upload" name="image" placeholder="" />
        <br />
        <button @click="create">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
// import SettingNav from "./SettingNav.vue";
import axios from "axios";
import { googleLogout } from "vue3-google-login"
export default {
  name: "AdminView",
  // components: { SettingNav },   
  data() {
    return {
      name: "",
      about: "",
    };
  },
  methods: {
    logoutUser() {
      // Delete local storage data
      localStorage.removeItem("loginRequest");
    
      // Redirect to /login
      // this.$router.push('/login');
      window.location.replace("/login");
      googleLogout()
    },
    create() {
      const imageFile = document.querySelector('.image-upload').files[0];
      console.log(imageFile)
      const formData = new FormData();
    formData.append('name', this.name);
    formData.append('about', this.about);
    formData.append('image', imageFile || null);
      const pattern = /^$|^.{0,2}$/;
      if (pattern.test(this.name) || pattern.test(this.about)) {
        return alert("Length too Short");
      }
      // Make a POST request to the API endpoint
      axios
        .post("https://ouiadgood.onrender.com/charity/add",formData,{
          headers: {
        'Content-Type': 'multipart/form-data',
      },
        })
        .then((response) => {
          if (response.status == 200) {
            alert("Created Successfully");
            this.name = "";
            this.about = "";
          }
        })
        .catch((err) => {
         console.log(err)
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

</style>
