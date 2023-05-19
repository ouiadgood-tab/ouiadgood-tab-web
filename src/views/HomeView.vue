<template>
  <div :style="backgroundStyle">
   <drop-down/>
  <note-widget/>
  <image-logo/>
  <date-time/>
  </div>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import DropDown from '@/components/DropDown.vue';
import ImageLogo from '@/components/ImageLogo.vue';
import NoteWidget from '@/components/NoteWidget.vue';
//import TheBookMark from '@/components/TheBookMark.vue';
//import BookMark from '@/components/BookMark.vue';


// @ is an alias to /src


export default {
    name: "HomeView",

    components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime
},

data (){
    return{
      //clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
    }
  },

    
}
</script>
