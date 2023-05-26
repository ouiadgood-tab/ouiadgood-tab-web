<template>
  <div>
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

created() {
    this.preloadImages();
  },
  methods: {
    preloadImages() {
      for (let i = 1; i <= 9; i++) {
        const img = new Image();
        img.src = `./bg${i}.jpg`;
      }
    }
  }
    
}
</script>
