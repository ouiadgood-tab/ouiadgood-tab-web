<template>
  <div class="notes-container">
    <div class="pink-div" @click="addNote">
      {{ translatedNotesContainer.title }}
      <i class="fa-sharp fa-solid fa-circle-plus"></i>
    </div>
    <div class="notes show-scrollbar">
      <div v-for="(note, index) in notes" :key="index" class="note" :style="{ top: note.top + 'px', left: note.left + 'px', zIndex: note.zIndex }">
        <div class="note-header">
          <span class="note-date">{{ note.date }}</span>
          <i class="fas fa-times" @click="deleteNote(index)"></i>
        </div>
        <div class="note-body">
          <textarea v-model="note.text" :placeholder="translatedNotesContainer.placeholder"></textarea>
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
      locale: localStorage.getItem('locale') || 'en', // Default locale value
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
  computed: {
    translatedNotesContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title: 'Notes',
          placeholder: 'Enter note here',
        };
      } else if (this.locale === 'fr') {
        translations = {
          title: 'Notes',
          placeholder: 'Saisissez votre note ici',
        };
      } else {
        translations = {
          title: '',
          placeholder: '',
        };
      }
      return translations;
    },
  },
};
</script>

<style scoped>
.notes-container {
  position: relative;
  margin-top: 10px;
}

.pink-div {
  background-color: #19c5d1;
padding: 10px;
  display: flex;
  border-radius: 10px ;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.fa-circle-plus {
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
  background: #f2d80f88;
  border-radius: 5px;
}
.notes::-webkit-scrollbar-thumb:hover {
  background-color: #f2d70f;
}

.note {
  background-color: rgba(255,255,255, 0.1);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  margin: 20px 0;
  z-index: 1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
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
  margin: 10px;
}

.note-body textarea {
  width: calc(100% - 10px);
  padding: 5px 10px;
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


</style>
