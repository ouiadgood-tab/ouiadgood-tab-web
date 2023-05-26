<template>
  <div id="backgroundImage">
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
import '@/assets/main.css'


// @ is an alias to /src


export default {
    name: "HomeView",

    components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime
},

created() {
    this.preloadImages();
  },
  methods: {
    preloadImages() {
      for (let i = 1; i <= 5; i++) {
        const img = new Image();
        img.src = `@assets/img${i}.jpg`;
      }
    }
  }
    
}
</script>
