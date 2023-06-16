<template>
  <div class="container">
    <h1>Admin</h1>
    <AdminHeader />
    <div class="admin">
      <h1>Create Charity</h1>
      <div class="inputs">
        <input v-model="name" req name="name" placeholder="Create Charity" />
        <input v-model="about" name="about" placeholder="About Charity" />
        <input v-model="url" name="url" placeholder="Charity Link" />
        <input type="file" class="image-upload" name="image" placeholder="" />
        <br />
        <button class="create-button" @click="create">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
// import SettingNav from "./SettingNav.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import axios from "axios";
export default {
    name: "AdminView",
    // components: { SettingNav },   
    data() {
        return {
            name: "",
            about: "",
            url: ""
        };
    },
    methods: {
        create() {
            const imageFile = document.querySelector(".image-upload").files[0];
            console.log(imageFile);
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("about", this.about);
            formData.append("url", this.url);
            formData.append("image", imageFile || null);
            const pattern = /^$|^.{0,2}$/;
            if (pattern.test(this.name) || pattern.test(this.url) || pattern.test(this.about)) {
                return alert("Length too Short");
            }
            // Make a POST request to the API endpoint
            axios
                .post("https://ouiadgood.onrender.com/charity/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json"
                },
            })
                .then((response) => {
                if (response.status == 200) {
                    alert("Created Successfully");
                    this.name = "";
                    this.about = "";
                }
            })
                .catch(() => {
               alert("Could Not Create Charity")
            });
        },
    },
    components: { AdminHeader }
};
</script>

<style scoped>
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
