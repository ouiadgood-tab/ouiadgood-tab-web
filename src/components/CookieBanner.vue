<template>
    <div class="banner">
        <p>
            {{translatedCookieContainer.title}}
        </p>
        <button class="btnTab" @click="acceptCookies">{{ translatedCookieContainer.addButton }}</button>
        <button class="btnTab" @click="declineCookies">{{translatedCookieContainer.deleteButton}}</button>
    </div>
</template>

<script>
export default{
    name:'CookieBanner.vue',
    data(){
        return{
          locale: localStorage.getItem('locale') || 'en',
        }
    },
    methods:{
        acceptCookies(){
            this.$posthog.opt_in_capturing();
            this.$emit('hideBanner');
        },
        declineCookies(){
            this.$posthog.opt_in_capturing();
            this.$emit('hideBanner');
        }
    },

    computed: {
    translatedCookieContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title: 'This site uses cookies to deliver our services.',
          addButton: "Accept",
          deleteButton: "Decline",
        };
      } else if (this.locale === 'fr') {
        translations = {
          title: "Ce site utilise des cookies pour fournir nos services.",
          addButton: "Accepter",
          deleteButton: "Déclin"
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
}
</script>

<style scoped>
.banner{
    position:fixed;
    bottom: 1%;
    background-color:rgb(255, 255, 255);
    padding: 20px;
    width: 60%;
    justify-self: center;
    align-self: center;
    margin: auto;
    margin-top: -1%;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-size: 1.3em;
    z-index:200;
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
p{
  padding: 10px 0;
}
</style>