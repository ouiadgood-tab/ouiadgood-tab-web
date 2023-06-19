<template>
  <div id="backgroundImage">
    <DisplayImages :image-url="backgroundImageUrl">
      <drop-down />
    </DisplayImages>
  </div>
</template>

<script>
import DisplayImages from "./settings/Background/DisplayImages.vue";
import DropDown from "@/components/DropDown.vue";
export default {
  name: "HomeView",
  components: {
    DisplayImages,
    DropDown,
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
    this.notesEnabled = localStorage.getItem("notesEnabled") === "true";
    this.todoListEnabled = localStorage.getItem("todoListEnabled") === "true";
    this.clockEnabled = localStorage.getItem("ClockEnabled") === "true";
    this.bookmarkEnabled = localStorage.getItem("bookmarkEnabled") === "true";
  },
};
</script>
