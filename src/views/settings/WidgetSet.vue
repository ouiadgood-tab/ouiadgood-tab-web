<template>
    <div>
        <div class="head">
            <h2 class="mainText">{{ translatedWidgetContainer.bookmark }}</h2>
            <i class="fa-sharp fa-regular fa-bookmark icon-wid"></i>
            <div class="switchFlex book-flex">
                    <label class="switch" >
                    <input type="checkbox" v-model="bookmarkEnabled" @change="saveBookmarkState"> 
                    <span class="slider" :class="{ checked: bookmarkEnabled }"></span>
                    </label>
                </div>
        </div> 
        <div class="head">
            <h3 class="mainText">{{ translatedWidgetContainer.note }}</h3>
            <i class="fa-sharp fa-regular fa-note-sticky"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" v-model="notesEnabled" @change="saveNotesState"> 
                    <span class="slider" :class="{ checked: notesEnabled }"></span>
                    </label>
                </div>
        </div>
        <div class="head">
            <h3 class="mainText"> {{ translatedWidgetContainer.todoList }}</h3>
            <i class="fa-solid fa-list"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" v-model="todoListEnabled" @change="saveTodoListState"> 
                    <span class="slider" :class="{ checked: todoListEnabled }"></span>
                    </label>
                </div>
        </div>
        <div class="extraHead">
            <h3 class="mainText">{{ translatedWidgetContainer.clock }}</h3>
            <i class="fa-regular fa-clock icon-wid"></i>
            <div class="switchFlex">
                    <label class="switch" >
                    <input type="checkbox" v-model="clockEnabled" @change="saveClockState"> 
                    <span class="slider" :class="{ checked: clockEnabled }"></span>
                    </label>
                </div>
                <div >
                    <div class="extra">
                        <h3 class="extraText textFlex">{{ translatedWidgetContainer.format }}</h3>
                        <div class="switchFlex2">
                            <label class="switch2" >
                                <input type="checkbox" v-model="use24HourFormat" @change="saveUse24HourFormat">
                                <span class="slider" :class="{ checked: use24HourFormat }"></span>
                            </label>
                        </div>
                    </div>
                    <div class="extra2">
                        <h3 class="extraText2 textFlex2">{{ translatedWidgetContainer.seconds }}</h3>
                        <div class="switchFlex2 extraSwitch">
                            <label class="switch2" >
                                <input type="checkbox" v-model="showSeconds" @change="saveShowSeconds">
                                <span class="slider" :class="{ checked: showSeconds }"></span>
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
  width: 80vh;
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
  width: 80vh;
  height: 2-vh;
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
.fa-bookmark{
  margin-left: -20%  !important;
  margin-top: 5.5% !important;
}
.icon-wid{
    margin-left: -11%;
    margin-top:5%;
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
    margin-bottom: -12vh;
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