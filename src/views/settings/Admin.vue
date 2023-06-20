<template>
  <div class="container">
    <div class="title">
      <h1>Admin</h1>
      <h1>Create Charity</h1>
    </div>
    <AdminHeader />
    <div class="admin">
      <div class="inputs">
        <input v-model="name" :class="{ error: nameError }" name="name" placeholder="Create Charity" />
        <p class="error-message" v-if="nameError">{{ nameError }}</p>
        
        <input v-model="about" :class="{ error: aboutError }" name="about" placeholder="About Charity" />
        <p class="error-message" v-if="aboutError">{{ aboutError }}</p>
        
        <input v-model="url" :class="{ error: urlError }" name="url" placeholder="Charity Link" />
        <p class="error-message" v-if="urlError">{{ urlError }}</p>
        
        <input type="file" class="image-upload" name="image" placeholder="" />
        <br />
        
        <button class="create-button" @click="create">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
import axios from "axios";

export default {
  name: "AdminView",
  data() {
    return {
      name: "",
      about: "",
      url: "",
      nameError: "",
      aboutError: "",
      urlError: "",
    };
  },
  methods: {
    create() {
      const imageFile = document.querySelector(".image-upload").files[0];
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("about", this.about);
      formData.append("url", this.url);
      formData.append("image", imageFile || null);
      
      // Reset errors
      this.nameError = "";
      this.aboutError = "";
      this.urlError = "";
      
      // Validation
      const pattern = /^$|^.{0,2}$/;
      if (pattern.test(this.name)) {
        this.nameError = "Name should have at least 3 characters.";
      }
      if (pattern.test(this.about)) {
        this.aboutError = "About should have at least 3 characters.";
      }
      if (pattern.test(this.url)) {
        this.urlError = "URL should have at least 3 characters.";
      }
      
      // Check if any errors exist
      if (this.nameError || this.aboutError || this.urlError) {
        return;
      }
      
      // Make a POST request to the API endpoint
      axios
        .post("https://ouiadgood.onrender.com/charity/add", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
          },
        })
        .then((response) => {
          if (response.status == 200) {
            alert("Created Successfully");
            this.name = "";
            this.about = "";
            this.url = ""
          }
        })
        .catch(() => {
          alert("Could not create charity");
        });
    },
  },
  components: { AdminHeader },
};
</script>

<style scoped>

.error {
  border-color: red;
}

.error-message {
  color: red;
  margin-top: 5px;
}

.title{
  text-align: center;
  padding: 20px;
}
#me{
  background: tomato;
}

.create-button{
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

.logout-btn{
  border: none;
  cursor: pointer;
  border-radius: 100px;
}

.inputs{
  display:flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
}
.router{
  color: #fff;
  font-size: 17px;
  background: #000;

  padding: 10px 20px;
  border-radius: 40px;
  text-decoration: none;
}
.links{
  display: flex;
  gap: 30px;
  justify-content: center;
}
input,
button {
  display: inline-block;
  margin: 10px;
  padding: 20px;
  border: 1px solid #00000029;
  border-radius: 10px;
}

</style>
