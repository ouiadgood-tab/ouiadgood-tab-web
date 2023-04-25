<template>
  <DropDown/>
  <BookMark/> <NoteWidget/>
  <SearchWidget/>
  <AddNote/>
  <!--<img alt="Vue logo" src="./assets/logo.png"> -->
  <DateTime/>
</template>

<script>
import AddNote from './components/AddNote.vue';
import BookMark from './components/BookMark.vue';
import DateTime from './components/DateTime.vue';
import DropDown from './components/DropDown.vue';
import NoteWidget from './components/NoteWidget.vue';
import SearchWidget from './components/SearchWidget.vue'



export default {
  name: 'App',
  components: {
    DateTime,
    DropDown,
    BookMark,
    NoteWidget,
    SearchWidget,
    AddNote
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
