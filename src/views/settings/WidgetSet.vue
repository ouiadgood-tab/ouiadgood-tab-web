<template>
    <div>
        <div class="head">
            <h3 class="mainText">{{ translatedWidgetContainer.bookmark }}</h3>
            <i class="fa-sharp fa-regular fa-bookmark"></i>
            <div class="switchFlex book-flex">
              <label class="switch">
              <input type="checkbox" class="checkbox" v-model="bookmarkEnabled" @change="saveBookmarkState">
              <div class="slider" :class="{ checked: bookmarkEnabled }"></div>
              </label>
            </div>
        </div> 
        <div class="head">
            <h3 class="mainText">{{ translatedWidgetContainer.note }}</h3>
            <i class="fa-sharp fa-regular fa-note-sticky"></i>
            <div class="switchFlex">
              <label class="switch">
              <input type="checkbox" class="checkbox" v-model="notesEnabled" @change="saveNotesState">
              <div class="slider" :class="{ checked: notesEnabled }"></div>
              </label>
                </div>
        </div>
        <div class="head">
            <h3 class="mainText"> {{ translatedWidgetContainer.todoList }}</h3>
            <i class="fa-solid fa-list"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" class="checkbox" v-model="todoListEnabled" @change="saveTodoListState"> 
                    <div class="slider" :class="{ checked: todoListEnabled }"></div>
                    </label>
                </div>
        </div>
        <div class="extraHead">
            <h3 class="mainText">{{ translatedWidgetContainer.clock }}</h3>
            <i class="fa-regular fa-clock icon-wid"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" class="checkbox" v-model="clockEnabled" @change="saveClockState"> 
                    <div class="slider" :class="{ checked: clockEnabled }"></div>
                    </label>
                </div>
                <div >
                    <div class="extra">
                        <h3 class="extraText textFlex">{{ translatedWidgetContainer.format }}</h3>
                        <div class="switchFlex2">
                            <label class="switch2" >
                                <input type="checkbox" class="checkbox" v-model="use24HourFormat" @change="saveUse24HourFormat">
                                <div class="slider" :class="{ checked: use24HourFormat }"></div>
                            </label>
                        </div>
                    </div>
                    <div class="extra2">
                        <h3 class="extraText2 textFlex2">{{ translatedWidgetContainer.seconds }}</h3>
                        <div class="switchFlex2 extraSwitch">
                            <label class="switch2" >
                                <input type="checkbox" v-model="showSeconds" @change="saveShowSeconds">
                                <div class="slider" :class="{ checked: showSeconds }"></div>
                            </label>
                        </div>
                    </div>
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
      clockEnabled: localStorage.getItem('ClockEnabled') === 'true',
      use24HourFormat: localStorage.getItem('use24HourFormat') === 'true',
      showSeconds: localStorage.getItem('showSeconds') === 'true',
      bookmarkEnabled: localStorage.getItem('bookmarkEnabled') === 'true',
      locale: localStorage.getItem('locale') || 'en',
    };
  },
  methods: {
    saveBookmarkState() {
      localStorage.setItem('bookmarkEnabled', this.bookmarkEnabled);
    },
    saveNotesState() {
      localStorage.setItem('notesEnabled', this.notesEnabled);
    },
    saveTodoListState() {
      localStorage.setItem('todoListEnabled', this.todoListEnabled);
    },
    saveClockState() {
      localStorage.setItem('ClockEnabled', this.clockEnabled);
    },
    saveUse24HourFormat() {
      localStorage.setItem('use24HourFormat', this.use24HourFormat);
    },
    saveShowSeconds() {
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
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 90vh;
  height: 12vh;
  margin-left: 28%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.extraHead {
    display: flex;
    background-color: #fff;
  padding: 20px 150px;
  color: rgb(5, 169, 219);
  width: 90vh;
  height: 26vh;
  margin-left: 28%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.fa-list{
    margin-left: -18%;
    margin-top: 5%;
}

.fa-note-sticky{
    margin-left: -13%;
    margin-top: 5%;
}
.fa-bookmark{
  margin-left: -18%  !important;
  margin-top: 5% !important;
}
.fa-clock{
  margin-left: -13% !important;
  margin-top: 5%;
}
.mainText{
    margin-left: -13%;
    margin-top: 4.5%;
   padding-left: 10px;
}
.extra{
    margin-left: -120vh !important;
    margin-top: 10vh !important;
}
.extra2{
    margin-left: -120vh !important;
    margin-top: 10vh !important;
}
.extraText{
    margin-bottom: -12vh;
    z-index: -3;
    display:block;
}
.extraText2{
    margin-bottom: -15vh;
    margin-top: 3vh !important;
}

.switchFlex{
    margin-left: 100%;
    margin-top: 4%;
}
.switchFlex2{
    margin-left: 100%;
    margin-top: -14%;
    display:block;
}
.book-flex{
  margin-left: 100%;
}

/* The switch - the box around the slider */
.checkbox {
  display: none;
}

.slider {
  width: 60px;
  height: 30px;
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 4px solid transparent;
  transition: .3s;
  box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.25) inset;
  cursor: pointer;
}

.slider::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-30px);
  border-radius: 20px;
  transition: .3s;
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider::before {
  transform: translateX(30px);
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider {
  background-color: #2196F3;
}

.checkbox:active ~ .slider::before {
  transform: translate(0);
}

/* Switch 2 styling*/
.switchFlex2{
    position: relative;
    margin-left: 35%;
    margin-top: 7%;
    margin-bottom: 19px !important;
}



/* The switch - the box around the slider */
.switch2 {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.8em;
}

/* Hide default HTML checkbox */
.switch2 input {
  opacity: 0;
  width: 0;
  height: 0;
}

</style>