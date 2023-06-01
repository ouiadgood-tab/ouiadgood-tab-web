<template>
    <div>
    <div class="note-icon" @click="showDropdown = !showDropdown">
        <i class="fa-solid fa-list"></i>
    </div>
    <div class="dropdown" v-if="showDropdown">
        <AddTodo/>
    </div>
  </div>
</template>

<script>
import AddTodo from './AddTodo.vue';


export default{
    name: "TodoList",
    components: { AddTodo },
    data() {
    return {
      showDropdown: false,
    };
  },
}
</script>

<style scoped>
div{
  margin-top: -1%;
  margin-left: 8%;
  cursor: pointer;
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
</style>