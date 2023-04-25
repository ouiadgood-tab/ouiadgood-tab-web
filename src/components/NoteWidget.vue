<template>
    <div>
      <div class="note-icon">
        <i class="fa-sharp fa-regular fa-note-sticky"></i>
      </div>
    </div>
  </template>
  
  <script >
  export default {
    name: 'BookMark',
  }
  </script>
  
  <style scoped>
  div{
    margin-top: -1.5%;
    margin-left: 2%;
    font-size: 30px;
  }
    .note-icon {
      width: 20px;
      height: 20px;
      color: rgba(255, 255, 255, 0.795);
      transition: background-color 0.3s ease;
    }
  
    .note-icon:hover {
      color: white;
    }
  </style>
  