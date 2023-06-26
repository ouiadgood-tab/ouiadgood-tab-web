<template>
      <EmailLogin/>
</template>

<script>
import EmailLogin from './EmailLogin.vue';

export default {
  components: {
    EmailLogin
},
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style scoped>
.logo {
  width: 200px;
  margin: 30px;
  height: 50px;
}


</style>
