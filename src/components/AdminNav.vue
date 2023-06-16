<template>
    <div>
        <h1>Admin</h1>
        <div>
          <a class="router" href="/setting/Admin">Create Charity</a>
          <a class="router" href="/setting/Donate">Edit Charity</a>
          <button @click="logoutUser">logout</button>
        </div>
    </div>
</template>

<script>

import { googleLogout } from "vue3-google-login"

export default {
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
  }
}
</script>

<style scoped>

</style>