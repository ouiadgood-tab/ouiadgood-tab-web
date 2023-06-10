<template>
    <div class="background">
    <div class="vertical-nav">
        <img src="./OAG128.png">
      <span class="close-icon" @click="closeNav">X</span>
    </div>
    <nav class="horizontal-nav">
      <p>{{ translatedSettingContainer.title1 }}</p>
    <router-link class="router" to="/setting/Widget" :class="{ active: isActive('/setting/Widget') }">{{ translatedSettingContainer.widgets }}</router-link>
    <router-link class="router" to="/setting/Background" :class="{ active: isActive('/setting/Background') }">{{ translatedSettingContainer.background }}</router-link>
        <p>{{ translatedSettingContainer.title2 }}</p>
    <router-link class="router" to="/setting/Stats" :class="{ active: isActive('/setting/Stats') }">{{ translatedSettingContainer.stat }}</router-link>
    <router-link class="router" v-if="admin" to="/setting/Admin" :class="{ active: isActive('/setting/Admin') }">{{ translatedSettingContainer.admin }}</router-link>
    <router-link class="router" to="/setting/Donate" :class="{ active: isActive('/setting/Donate') }">{{ translatedSettingContainer.donate }}</router-link>
    <router-link class="router" to="/setting/Invite" :class="{ active: isActive('/setting/Invite') }">{{ translatedSettingContainer.invite }}</router-link>
    <router-link class="router" to="/setting/Account" :class="{ active: isActive('/setting/Account') }">{{ translatedSettingContainer.account }}</router-link>
  </nav>
    </div>
  </template>

<script>
export default {
    name: 'SettingNav',
    data(){
      return{
        locale: localStorage.getItem('locale') || 'en',
        admin:false
      }
    },
    computed:{
      translatedSettingContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title1:"SETTING",
          title2: "YOUR PROFILE",
          widgets: "Widgets",
          background:"Background",
          stat: "Your Stats",
          donate:"Donate Hearts",
          invite: "Invite Friends",
          account:"Account",
          admin:"Admin"
        };
      } else if (this.locale === 'fr') {
        translations = {
          title1:"PARAMÈTRE",
          title2: "VOTRE PROFIL",
          widgets: "Widget",
          background:"Arrière-plan",
          stat: "Vos statistiques",
          donate:"Faire un don de coeurs",
          invite: "Inviter des amis",
          account:"Compte",
          admin:"Admin"
        };
      } else {
        translations = {
          title: '',
          placeholder: '',
        };
      }
      return translations;
    },
    },
    created(){
     
const getUser = JSON.parse(localStorage.getItem("loginRequest") || '{}')
if(getUser.admin){
  this.admin = getUser.admin
}

    },
  methods: {
    closeNav() {
      this.$router.push('/');
    },
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>
  
  <style scoped>
  .background{
    background-color: #fff;
    height: 100vh;
    margin-left: -4%;
    margin-right: -0.6%;
    margin-top: -4%;
    padding-bottom: 4%;
    margin-bottom: 0%;
    background-repeat: no-repeat;
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
.router.active {
  background-color: #b3aeae;
}

  </style>