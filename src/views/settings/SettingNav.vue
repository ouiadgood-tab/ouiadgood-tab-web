<template>
    <div class="background">
    <div class="vertical-nav">
        <img src="./OAG128.png">
      <span class="close-icon" @click="closeNav">X</span>
    </div>
    <nav class="horizontal-nav">
        <p>YOUR PROFILE</p>
    <router-link class="router" to="/setting/Stats">Your Stats</router-link>
    <router-link class="router" to="/setting/Donate">Donate Hearts</router-link>
    <router-link class="router" to="/setting/Invite">Invite Friends</router-link>
    <router-link class="router" to="/setting/Account">Account</router-link>
  </nav>
    </div>
  </template>

<script>
export default {
    name: 'SettingNav',
  methods: {
    closeNav() {
      this.$router.push('/');
    }
  }
}
</script>
  
  <style scoped>
  .background{
    background-color: rgb(231, 229, 229);
    height: 100vh;
    margin-left: -4%;
    margin-right: -0.6%;
    margin-top: -4%;
    margin-bottom: -20%;
  }
  .vertical-nav {
    background: #f2d70f;
    position: fixed;
    padding:5px 5px 25px 5px;
    margin-top: 0%;
    margin-left: 3%;
    height: 5%;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  
  .vertical-nav router-link {
    display: block;
    margin-bottom: 10px;
  }
  
  .close-icon {
    cursor: pointer;
    margin-top: 10px;
    font-size: 20px;
    float: right;
    margin-right: 25px;
    color: #fff;

  }

  .close-icon:hover{
    display: inline-block;
    background-color: #e0cd39;
    border-radius: 50%;
    color: red;
    font-size: 30px;

  }

  img{
    height: 10vh;
    float: left;
    margin-left: 5%;
    margin-top: -5px;
  }

  .horizontal-nav {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 8%;
  color: #b3aeae;
  margin-top: 5%;
  
}

.router {
  margin: 5px 0;
  text-decoration: none;
  padding: 8px 120px 8px 12px;
  color: #333;
  font-weight: 200;
  transition: background-color 0.3s ease;

}
.horizontal-nav a:hover {
  background-color: #b3aeae;
}

  </style>