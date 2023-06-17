<template>
    <div class="bookMark-container">
      <div class="form-div">
        <div class="closeIcon">
        </div>
        <div class="input-wrapper">
          <label for="name" class="title">{{translatedBookmark.inputTitle}}</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="input-wrapper">
          <label for="url" class="title">{{ translatedBookmark.inputUrl }}</label>
          <input type="text" id="url" v-model="url" :style="{ borderColor: isUrlValid ? '' : 'red' }" />
        </div>
        <div class="btn">
          <button @click="addBookmark">Enter</button>
          <button @click="closeBookmark">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TheBookMark2",
    data() {
      return {
        showForm: false,
        name: "",
        url: "",
        locale: localStorage.getItem('locale') || 'en', // Default locale value
      };
    },
    computed: {
    isUrlValid() {
      // Simple URL validation regex pattern
      const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)*[a-z0-9-]+(\.[a-z]{2,6})(\/.*)?$/i;
      return urlPattern.test(this.url);
    },
    translatedBookmark() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          inputTitle: 'Website Name',
          inputUrl: "Website URL",
        };
      } else if (this.locale === 'fr') {
        translations = {
          inputTitle: 'Nom du site Web',
          inputUrl: "URL de site web",
        };
      } else {
        translations = {
          inputTitle: '',
          inputUrl: '',
        };
      }
      return translations;
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
    const bookmark2 = {
      name: this.name,
      url: url,
    };
    // let bookmarks5 = localStorage.getItem("bookmarks5");
    // bookmarks5 = bookmarks5 ? JSON.parse(bookmarks5) : [];
    // bookmarks5.push(bookmark);
    localStorage.setItem("bookmarks2", JSON.stringify(bookmark2));
  
    this.clearInputs();
    window.location.reload(); // Reload the page
  }
    },
    closeBookmark() {
      this.$emit('close-bookmark'); // Close TheBookMark component
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
  .form-div {
    background-color: #13afc088;
    width: 25rem;
    height: 13rem;
    position: absolute;
    margin-top: -7rem;
    left: 5rem;
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
    position: relative;
  }
  .title{
    font-size: 1rem;
    font-weight: bold;
    padding: 6px 0;
  }
  label {
    display: block;
  
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
    width: 10rem;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
  
  }
  .btn{
    display: flex;
    justify-content: center;
  }
  .save-btn {
    background-color: #19c5d1;
    color: #fff;
  }
  .cancel-btn {
    background-color: #ffffff;
  }
  </style>
  