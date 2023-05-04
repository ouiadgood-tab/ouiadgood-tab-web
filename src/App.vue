<template>
  <DropDown/>
  <BookMark/> 
  <TheBookMark/>
  <NoteWidget/>
  <ImageLogo/>
  <DateTime/>
</template>

<script>
import BookMark from './components/BookMark.vue';
import DateTime from './components/DateTime.vue';
import DropDown from './components/DropDown.vue';
import ImageLogo from './components/ImageLogo.vue';
import NoteWidget from './components/NoteWidget.vue';
import TheBookMark from './components/TheBookMark.vue';



export default {
  name: 'App',
  components: {
    DateTime,
    DropDown,
    BookMark,
    NoteWidget,
    ImageLogo,
    TheBookMark
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
