<template>
  <drop-down />
  <note-widget v-if="notesEnabled" />
  <TodoList v-if="todoListEnabled"/>
  <BookMark v-if="bookmarkEnabled"/>
  <date-time v-if="clockEnabled"/>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import DropDown from '@/components/DropDown.vue';
import NoteWidget from '@/components/NoteWidget.vue';
import BookMark from '@/components/BookMark.vue';
import TodoList from '@/components/TodoList.vue';
export default {
  name: "HomeView",
  components: {
    DropDown,
    DateTime,
    NoteWidget,
    TodoList,
    BookMark
  },

  data() {
    return {
      notesEnabled: true,
      todoListEnabled: true,
      clockEnabled: true,
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

