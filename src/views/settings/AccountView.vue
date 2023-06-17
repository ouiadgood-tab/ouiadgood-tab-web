<template>
  <SettingNav>
    <AccountSet class="account" />
  </SettingNav>
</template>

<script>
import AccountSet from "./AccountSet.vue";
import SettingNav from "./SettingNav.vue";

export default {
  components: { SettingNav, AccountSet },
};
</script>

<style scoped>
</style>
