<template>
    <div class="pink-div">
      Notes <i class="fa-sharp fa-solid fa-circle-plus"></i>
    </div>
  </template>

  <script>
  export default{
    name: 'AddNote',
  }
</script>
  
  <style scoped>
    .pink-div {
      background-color: rgb(175, 54, 75);
      width: 6%;
      height: 30px;
      display: flex;
      border-radius: 7px;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin-top: -12%;
      margin-left: 3%;
    }
    
    .fa-circle-plus {
      margin-left: 10px;
      color: rgb(223, 222, 222);
      font-size: 15px;
    }

    .fa-circle-plus:hover{
        color: #fff;
        cursor: pointer;
    }
  </style>
  