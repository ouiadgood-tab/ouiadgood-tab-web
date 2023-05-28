<template>
  <div class="notes-container">
    <div class="pink-div">
      Notes <i class="fa-sharp fa-solid fa-circle-plus" @click="addNote"></i>
    </div>
    <div class="notes show-scrollbar">
      <div v-for="(note, index) in notes" :key="index" class="note" :style="{ top: note.top + 'px', left: note.left + 'px', zIndex: note.zIndex }">
        <div class="note-header">
          <span class="note-date">{{ note.date }}</span>
          <i class="fas fa-times" @click="deleteNote(index)"></i>
        </div>
        <div class="note-body">
          <textarea v-model="note.text" placeholder="Enter note here"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNote',
  data() {
    return {
      notes: [],
    };
  },

  created(){
    const data = localStorage.getItem('notes');
      if (data) {
        this.notes = JSON.parse(data);
      }
  },
  methods: {
    addNote() {
      const note = {
        text: '',
        top: 50,
        left: 50,
        date: new Date().toLocaleString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric' }),
        zIndex: this.notes.length + 1,
      };
      this.notes.unshift(note);
      this.notes.forEach((note, index) => {
        note.top = 50 + index * 155;
        note.left = 50 + index * 0;
        note.zIndex = this.notes.length - index;
        localStorage.setItem('notes', JSON.stringify(this.notes));
      });
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      this.notes.forEach((note, index) => {
        note.top = 50 + index * 155;
        note.left = 50 + index * 0;
        note.zIndex = this.notes.length - index;
        localStorage.setItem('notes', JSON.stringify(this.notes));
      });
    },
    
  },
};
</script>

<style scoped>
.notes-container {
  position: relative;
}

.pink-div {
  background-color: #19c5d1;
  width: 100px;
  height: 40px;
  display: flex;
  border-radius: 10px ;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-top: 20px;
  margin-left: 30px;
  cursor: pointer;
}

.fa-circle-plus {
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
}

.fa-circle-plus:hover {
  color: #e60073;
}

.fa-times {
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
}

.fa-times:hover {
  color: #e60073;
}

.notes {
  position: absolute;
  top: 42px;
  left: 15%;
  transform: translateX(-50%);
  width: 210%;
  height: 500px;
  margin: auto;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.notes.show-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.notes.show-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

.notes.show-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.note {
  position: absolute;
  background-color: rgba(255,255,255, 0.1);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 200px;
  z-index: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-left: -20px;
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.note-date {
  font-size: 1erm;
  font-weight: bold;
  color: #fff;
}

.note-body {
  height: 100px;
}

.note-body textarea {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #fff;
  line-height: 1.5;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
}
.note-body textarea::placeholder {
  color: #fff; /* Change the placeholder color here */
}

.note-body textarea:focus {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  /* Apply specific styles for screens larger than 768px width (laptops) */

  .notes {
    left: 15%;
    width: 70%;
  }
}

/* Additional styles to improve mobile experience */
@media (max-width: 480px) {
  /* Apply specific styles for screens smaller than 480px width (mobile devices) */

  .notes {
    left: 0;
    width: 100%;
  }
}
</style>
