<template>
    <div>
        <!--<div class="head">
            <h2 class="mainText">Bookmark</h2>
            <i class="fa-sharp fa-regular fa-bookmark icon-wid"></i>
        </div> -->
        <div class="head">
            <h3 class="mainText">Notes</h3>
            <i class="fa-sharp fa-regular fa-note-sticky icon-wid"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" v-model="notesEnabled" @change="saveNotesState"> 
                    <span class="slider" :class="{ checked: notesEnabled }"></span>
                    </label>
                </div>
        </div>
        <div class="head">
            <h3 class="mainText">Todo List</h3>
            <i class="fa-solid fa-list icon-wid"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" v-model="todoListEnabled" @change="saveTodoListState"> 
                    <span class="slider" :class="{ checked: todoListEnabled }"></span>
                    </label>
                </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'WidgetSet',
    data() {
    return {
      notesEnabled: localStorage.getItem('notesEnabled') === 'true',
      todoListEnabled: localStorage.getItem('todoListEnabled') === 'true',
    };
  },
  methods: {
    saveNotesState() {
      localStorage.setItem('notesEnabled', this.notesEnabled);
    },
    saveTodoListState() {
      localStorage.setItem('todoListEnabled', this.todoListEnabled);
    },
  },

};
</script>

<style scoped>
.head {
    display: flex;
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 80vh;
  height: 12vh;
  margin-left: 28%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.fa-list{
    margin-left: -16%;
    margin-top: 5%;
   
}

.fa-note-sticky{
    margin-left: -11%;
    margin-top: 5%;
}
.mainText{
    margin-left: -13%;
    margin-top: 4.5%;
   padding-left: 10px;

}

.switchFlex{
    margin-left: 100%;
    margin-top: 4%;
}

/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 0.1em;
  border-radius: 0px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #03741f;
  box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
}

input:checked + .slider:before {
  transform: translateX(2.8em) rotate(360deg);
}
</style>