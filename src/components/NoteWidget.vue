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
};

</script>

<style scoped>
div{
  margin-top: -1.5%;
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
  top: 110px;
  left: 20px;
  z-index: 2;
  
}
</style>
