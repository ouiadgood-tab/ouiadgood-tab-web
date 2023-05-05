<template>
    <div class="bookMark-container">
      <div v-if="!showForm" class="pink-div" @click="showForm = true">
        BookMark 
        <div class="lockIcon">
          <i class="fa-solid fa-lock"></i>
          <i class="fa-solid fa-unlock"></i>
        </div>
        <i class="fa-sharp fa-solid fa-circle-plus"></i>
      </div>
      <div v-else class="form-div">
        <div class="closeIcon" @click="showForm = false">
          <i class="fa-solid fa-times"></i>
        </div>
        <div class="input-wrapper">
          <label for="name">Website Name:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="input-wrapper">
          <label for="url">Website URL:</label>
          <input type="text" id="url" v-model="url" />
        </div>
        <div class="btn-wrapper">
          <button class="save-btn">Save</button>
          <button class="cancel-btn" @click="showForm = false">Cancel</button>
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
    background-color: #fff;
    width: 250px;
    height: 180px;
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
    font-weight: bold;
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
  