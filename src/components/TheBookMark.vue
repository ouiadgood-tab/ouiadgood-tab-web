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
          <input type="text" id="url" v-model="url" :style="{ borderColor: isUrlValid ? '' : 'red' }" />
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
    computed: {
    isUrlValid() {
      // Simple URL validation regex pattern
      const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)*[a-z0-9-]+(\.[a-z]{2,6})(\/.*)?$/i;
      return urlPattern.test(this.url);
    },
  },
    methods: {
    addBookmark() {
      if (this.name && this.url && this.isUrlValid) {
    let url = this.url;
    if (!/^https?:\/\//i.test(url)) {
      // Prepend "https://" if it's not already present
      url = `https://${url}`;
    }
    const bookmark = {
      name: this.name,
      url: url,
    };
    let bookmarks = localStorage.getItem("bookmarks");
    bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    this.clearInputs();
    window.location.reload(); // Reload the page
  }
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
    left: 20px;
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
    color: #fff;
    margin-right: 5px;
  }
  .fa-check{
    padding-right: 5px;
  }
  .fa-check:hover{
    color:#19c5d1;
  }
  .fa-times:hover{
    color:rgb(231, 5, 5);
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
    background-color: #ffffff;
  }
  </style>
  