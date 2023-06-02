<template>
    <div class="bookMark-container">
      <div class="form-div">
        <div class="closeIcon">
          <i class="fa-solid fa-check" @click="addBookmark"></i>
          <i class="fa-solid fa-times" @click="clearInputs"></i>
        </div>
        <div class="input-wrapper">
          <label for="name">Website Name</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="input-wrapper">
          <label for="url">Website URL</label>
          <input type="text" id="url" v-model="url" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheBookMark",
    data() {
      return {
        showForm: false,
        name: "",
        url: "",
      };
    },
    methods: {
    addBookmark() {
      if (this.name && this.url) {
        const bookmark = {
          name: this.name,
          url: this.url,
        };
        let bookmarks = localStorage.getItem("bookmarks");
        bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      }
      this.name = "";
      this.url = "";
    },
    clearInputs() {
      this.name = "";
      this.url = "";
    },
  },
  };
  </script>
  
  <style scoped>
  .bookMark-container {
    position: relative;
  }
  .pink-div {
    background-color: #19c5d1;
    width: 130px;
    height: 40px;
    display: flex;
    border-radius: 10px ;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 20px;
    margin-left: 30px;
    cursor: pointer;
    z-index: 2;
  }
  .form-div {
    background-color: #13afc02f;
    width: 200px;
    height: 160px;
    position: absolute;
    top: 40px;
    left: -30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
  .closeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .input-wrapper {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    margin-left: -25%;
    font-weight: 100;
    font-size: 20px;
    color: #fff;
  }
  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  .save-btn {
    background-color: #19c5d1;
    color: #fff;
  }
  .cancel-btn {
    background-color: #ddd;
  }
  </style>
  