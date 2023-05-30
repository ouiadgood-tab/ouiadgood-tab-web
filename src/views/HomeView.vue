<template>
  <div id="backgroundImage">
   <drop-down/>
  <note-widget/>
  <image-logo/>
  <date-time/>
  <CookieBanner v-if="showBanner" @hideBanner="showBanner = false"/>
  </div>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import DropDown from '@/components/DropDown.vue';
import ImageLogo from '@/components/ImageLogo.vue';
import NoteWidget from '@/components/NoteWidget.vue';
import CookieBanner from '@/components/CookieBanner.vue';
//import TheBookMark from '@/components/TheBookMark.vue';
//import BookMark from '@/components/BookMark.vue';
import '@/assets/main.css'


// @ is an alias to /src


export default {
    name: "HomeView",
    components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime,
    CookieBanner,
},
data(){
  return{
    showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing())
  }
}

}
</script>
