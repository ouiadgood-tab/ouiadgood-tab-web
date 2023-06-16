<template>
    <div>
     
        <div class="head">
        <div class="title">
          <h2 class="mainText">{{ translatedWidgetContainer.bookmark }}</h2>
          <i class="fa-sharp fa-regular fa-bookmark icon-wid"></i>
        </div>
          <ToggleSwitchVue :toggleCallback="saveBookmarkState" :initialState="bookmarkEnabled" />
        </div> 
        <div class="head">
         <div class="title">
          <h3 class="mainText">{{ translatedWidgetContainer.note }}</h3>
          <i class="fa-sharp fa-regular fa-note-sticky"></i>
         </div>
            <ToggleSwitchVue :toggleCallback="saveNotesState" :initialState="notesEnabled" />
        </div>
        <div class="head">
         <div class="title">
          <h3 class="mainText"> {{ translatedWidgetContainer.todoList }}</h3>
          <i class="fa-solid fa-list"></i>
         </div>
            <ToggleSwitchVue :toggleCallback="saveTodoListState" :initialState="todoListEnabled" />
        </div>


        <div class="head">
          <div class="title">
            <h3 class="mainText">{{ translatedWidgetContainer.clock }}</h3>
          <i class="fa-regular fa-clock icon-wid"></i>
          </div>
          <ToggleSwitchVue :toggleCallback="saveClockState" :initialState="clockEnabled" />
        </div>




        <div class="head">
          <div class="title">
            <h3 class="mainText">{{ translatedWidgetContainer.format }}</h3>
          <i class="fa-regular fa-clock icon-wid"></i>
          </div>
          <ToggleSwitchVue :toggleCallback="saveUse24HourFormat" :initialState="use24HourFormat" />
        </div>


        <div class="head">
          <div class="title">
            <h3 class="mainText">{{ translatedWidgetContainer.seconds }}</h3>
          <i class="fa-regular fa-clock icon-wid"></i>
          </div>
          <ToggleSwitchVue :toggleCallback="saveShowSeconds" :initialState="showSeconds" />
        </div>

    </div>
</template>

<script>
import ToggleSwitchVue from '@/components/ToggleSwitch.vue';
export default {
  name: 'WidgetSet',
  components: {
    ToggleSwitchVue
  },
    data() {
    return {
      notesEnabled: localStorage.getItem('notesEnabled') === 'true',
      todoListEnabled: localStorage.getItem('todoListEnabled') === 'true',
      clockEnabled: localStorage.getItem('ClockEnabled') === 'true',
      use24HourFormat: localStorage.getItem('use24HourFormat') === 'true',
      showSeconds: localStorage.getItem('showSeconds') === 'true',
      bookmarkEnabled: localStorage.getItem('bookmarkEnabled') === 'true',
      locale: localStorage.getItem('locale') || 'en',
    };
  },
  methods: {
    saveBookmarkState(active) {
      this.bookmarkEnabled = active
      localStorage.setItem('bookmarkEnabled', this.bookmarkEnabled);
    },
    saveNotesState(active) {
      this.notesEnabled = active
      localStorage.setItem('notesEnabled', this.notesEnabled);
    },
    saveTodoListState(active) {
      this.todoListEnabled = active
      localStorage.setItem('todoListEnabled', this.todoListEnabled);
    },
    saveClockState(active) {
      this.clockEnabled = active
      localStorage.setItem('ClockEnabled', this.clockEnabled);
    },
    saveUse24HourFormat(active) {
      this.use24HourFormat = active
      localStorage.setItem('use24HourFormat', this.use24HourFormat);
    },
    saveShowSeconds(active) {
      this.showSeconds = active
      localStorage.setItem('showSeconds', this.showSeconds);
    },
  },
  computed: {
    translatedWidgetContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          bookmark: 'Bookmark',
          note: "Notes",
          todoList: "Todo List",
          clock: "Clock",
          format: "Use 24 hours format",
          seconds: "Show seconds"
        };
      } else if (this.locale === 'fr') {
        translations = {
          bookmark: 'Signet',
          note: "Remarques",
          todoList: "Liste de choses à faire",
          clock: "Horloge",
          format: "Utiliser le format 24 heures",
          seconds: "Afficher les secondes"
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
.head {
    display: flex;
    justify-content: space-between;
    align-items: center ;
    padding: 20px 150px;
    color: rgb(5, 169, 219);
    width: 80vh;
    height: 12vh;
    margin-left: 28%;
    border: 1px solid #ccc;
}

.title{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: inherit;
  gap:10px
}
</style>