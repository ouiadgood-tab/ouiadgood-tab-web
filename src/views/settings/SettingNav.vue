<template>
  <div class="">
    <div class="vertical-nav">
        <img src="./icon.png" class="logo">
      <span class="close-icon" @click="closeNav">
        <i class="fa-solid fa-xmark"></i>
      </span>
    </div>

   <div class="settings-nav">
    <nav class="horizontal-nav">
      <p class="nav-title">{{ translatedSettingContainer.title1 }}</p>
    <router-link class="router" to="/tab/setting/Widget" :class="{ active: isActive('/tab/setting/Widget') }">{{ translatedSettingContainer.widgets }}</router-link>
    <router-link class="router" to="/tab/setting/Background" :class="{ active: isActive('/tab/setting/Background') }">{{ translatedSettingContainer.background }}</router-link>
        <p class="nav-title">{{ translatedSettingContainer.title2 }}</p>
        <p v-show="admin" >
          <router-link class="router" to="/tab/setting/Admin" :class="{ active: isActive('/tab/setting/Admin') }">{{ translatedSettingContainer.admin }}</router-link>
        </p>
    <router-link class="router" to="/tab/setting/Stats" :class="{ active: isActive('/tab/setting/Stats') }">{{ translatedSettingContainer.stat }}</router-link>
    <router-link class="router" to="/tab/setting/Donate" :class="{ active: isActive('/tab/setting/Donate') }">{{ translatedSettingContainer.donate }}</router-link>
    <router-link class="router" to="/tab/setting/Invite" :class="{ active: isActive('/tab/setting/Invite') }">{{ translatedSettingContainer.invite }}</router-link>
    <router-link class="router" to="/tab/setting/Account" :class="{ active: isActive('/tab/setting/Account') }">{{ translatedSettingContainer.account }}</router-link>
  </nav>

  <div class="content"><slot /></div>
   </div>

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
  this.admin = getUser.admin || false
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
.logo{
  width: 40px;
}
.content{
  position: relative;
}
.vertical-nav{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f2d70f;
  align-items: center;
}
.horizontal-nav{
  padding: 2%;
}
.close-icon{
  display: flex;
  width:40px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  transition: .3s;
  background: #eee;
}

.close-icon:hover{
  transform: scale(.9);
}

.settings-nav{
  display: grid;
  position: relative;
  grid-template-columns: 200px 1fr;
  gap: 10px;
  padding: 0 5px;
}

.settings-nav.admin{
  grid-template-columns:auto;
}

.nav-title{
  font-size: 20px;
  font-weight: bold;
  opacity: .9;
  padding: 10px;
}

.router{
  display: flex;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px;
}

.router:hover{
  background: #eee;
  color: #000;
}

.router-link-active{
  background-color: #333;
  color: #fff;
  font-weight: bold;
}


@media screen and (max-width:600px) {
  .settings-nav{
    grid-template-columns:  1fr !important;
  }
  
}

  </style>