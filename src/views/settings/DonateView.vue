<template>
  <div>
    <div class="setPos">
      <div v-show="!admin">
        <SettingNav />
      </div>
    </div>

    <div v-show="admin">
    <AdminHeader />
    </div>

    <DonateHeart :class="!admin?'statsDown': '' " />
  </div>
</template>

<script>
import AdminHeader from "@/components/AdminHeader.vue";
import DonateHeart from "./DonateHeart.vue";
import SettingNav from "./SettingNav.vue";
// import AdminNav from "@/components/AdminNav.vue";
import { googleLogout } from "vue3-google-login"

export default {
  components: { SettingNav, DonateHeart, AdminHeader },
  data() {
    return {
      admin: false,
    };
  },

  methods:{
    logoutUser() {
      // Delete local storage data
      localStorage.removeItem("loginRequest");
    
      // Redirect to /login
      // this.$router.push('/login');
      window.location.replace("/login");
      googleLogout()
    },
  },
  created() {
    const getUser = JSON.parse(localStorage.getItem("loginRequest") || "{}");
    this.admin = getUser.admin || false;
  },
};
</script>

<style scoped>
.setPos {
  position: static;
}
.statsDown{
    margin-top: -50%;
}
</style>
