<template>
  <div id="backgroundImage">
    <DisplayImages :image-url="backgroundImageUrl"/>
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
import DisplayImages from './settings/Background/DisplayImages.vue';


// @ is an alias to /src


export default {
    name: "HomeView",
    components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime,
    CookieBanner,
    DisplayImages
},
data(){
  return{
    showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing())
  }
},
methods: {
    updateBackgroundImage(imageUrl) {
      this.backgroundImageUrl = imageUrl;
    }
  }

}
</script>
