<template>
    <div class="banner">
        <p>
            This site uses cookies to deliver our services.
        </p>
        <button class="btnTab" @click="acceptCookies">Accept</button>
        <button class="btnTab" @click="declineCookies">Decline</button>
    </div>
</template>

<script>
export default{
    name:'CookieBanner.vue',
    methods:{
        acceptCookies(){
            this.$posthog.opt_in_capturing();
            this.$emit('hideBanner');
        },
        declineCookies(){
            this.$posthog.opt_in_capturing();
            this.$emit('hideBanner');
        }
    }
}
</script>

<style scoped>
.banner{
    background-color:rgb(255, 255, 255);
    padding: 20px;
    width: 40%;
    margin: auto;
    margin-top: -2%;
    color: #000;
    font-size: 20px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.btnTab {
  background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btnTab:hover {
  background-color: #14c3d6;
}
</style>