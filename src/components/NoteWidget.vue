<template>
  <div>
    <div class="note-icon" @click="showDropdown = !showDropdown">
      <i class="fa-sharp fa-regular fa-note-sticky"></i>
    </div>
    <div class="dropdown" v-if="showDropdown">
      <AddNote />
    </div>
  </div>
</template>

<script>
import AddNote from "@/components/AddNote.vue";

export default {
  name: "NoteWidget",
  components: {
    AddNote,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  mounted() {
    window.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleOutsideClick(event) {
      // Check if the clicked element is outside the dropdown
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    },
  },
  
};

</script>

<style scoped>
div{
  margin-top: -5%;
  margin-left: 5%;
}
.note-icon {
  position: relative;
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.795);
  transition: background-color 0.3s ease;
  font-size: 30px;
  z-index: 1;
}

.note-icon:hover {
  color: white;
}

.dropdown {
  position: absolute;
  top: 180px;
  left: 40px;
  z-index: 2;
  
}

@media (max-width: 600px){
  div{
  margin-left: 8%;
  margin-top: -12%;
  z-index: 2;
}
}
@media (max-width: 365px){
  div{
  margin-left: 10%;
  margin-top: -8%;
  z-index: 2;
}
}
</style>
