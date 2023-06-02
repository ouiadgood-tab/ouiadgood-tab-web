<template>
  <div id="backgroundImage">
    <DisplayImages :image-url="backgroundImageUrl" />
    <drop-down />
    <note-widget v-if="notesEnabled" />
    <TodoList v-if="todoListEnabled"/>
    <BookMark v-if="bookmarkEnabled"/>
    <image-logo />
    <date-time v-if="clockEnabled"/>
    <CookieBanner v-if="showBanner" @hideBanner="showBanner = false" />
  </div>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import DropDown from '@/components/DropDown.vue';
import ImageLogo from '@/components/ImageLogo.vue';
import NoteWidget from '@/components/NoteWidget.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import DisplayImages from './settings/Background/DisplayImages.vue';
import TodoList from '@/components/TodoList.vue';
import BookMark from '@/components/BookMark.vue';

export default {
  name: 'HomeView',
  components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime,
    CookieBanner,
    DisplayImages,
    TodoList,
    BookMark
},
  data() {
    return {
      backgroundImageUrl: '',
      showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing()),
      notesEnabled: false,
      todoListEnabled: false,
      clockEnabled: false,
      bookmarkEnabled: false,
    };
  },
    mounted() {
      this.backgroundImageUrl;
  },
  created() {
    this.notesEnabled = localStorage.getItem('notesEnabled') === 'true';
    this.todoListEnabled = localStorage.getItem('todoListEnabled') === 'true';
    this.clockEnabled = localStorage.getItem('ClockEnabled') === 'true';
    this.bookmarkEnabled = localStorage.getItem('bookmarkEnabled') === 'true';
  },
};
</script>
