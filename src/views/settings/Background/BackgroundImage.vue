<template>
    <div>
        <div class="head">
            <h2 class="mainText">{{ translatedBackgroundContainer.title }}</h2>
            <div class="container">
                <form>
                    <label>
                        <input type="radio" name="radio" :checked="selectedOption === 'newPhoto'" @click="handleRadioClick('newPhoto'); showImageSelection = false; showCustomImageInput = false ">
                        <span>{{ translatedBackgroundContainer.daily }}</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" :checked="selectedOption === 'selectedPhoto'" @click="handleRadioClick('selectedPhoto'); showImageSelection = true; showCustomImageInput = false">
                        <span>{{ translatedBackgroundContainer.selected }}</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" :checked="selectedOption === 'customPhoto'" @click="handleRadioClick('customPhoto'); showImageSelection = false; showCustomImageInput = true">
                        <span>{{ translatedBackgroundContainer.custom }}</span>
                    </label>
                </form>
            </div>
        </div>
        
        <ImageSelection v-if="showImageSelection"/>
        <CustomImageInput v-if="showCustomImageInput"/>
    </div>
</template>

<script>
import ImageSelection from './ImageSelection.vue';
import CustomImageInput from './CustomImageInput.vue'


export default {
  name: 'BackgroundImage',
  components: {
    ImageSelection,
    CustomImageInput
},
data(){
  return{
    showImageSelection: false,
    showCustomImageInput: false,
    selectedOption: null,
    locale: localStorage.getItem('locale') || 'en',
  }
},

created() {
    this.restoreSelectedOption();
    this.restoreComponentVisibility();
  },
  methods: {
    handleRadioClick(option) {
      if (option === 'newPhoto') {
        localStorage.removeItem('selectedImage');
        localStorage.removeItem('customImage');
      } else if (option === 'customPhoto') {
        localStorage.removeItem('selectedImage');
      }
      
      this.selectedOption = option;
      localStorage.setItem('selectedOption', option);
    },
    restoreSelectedOption() {
      const selectedOption = localStorage.getItem('selectedOption');
      if (selectedOption) {
        this.selectedOption = selectedOption;
      }
    },
    restoreComponentVisibility() {
      const showImageSelection = localStorage.getItem('showImageSelection');
      const showCustomImageInput = localStorage.getItem('showCustomImageInput');
      this.showImageSelection = showImageSelection === 'true';
      this.showCustomImageInput = showCustomImageInput === 'true';
    },
    saveComponentVisibility() {
      localStorage.setItem(
        'showImageSelection',
        this.showImageSelection.toString()
      );
      localStorage.setItem(
        'showCustomImageInput',
        this.showCustomImageInput.toString()
      );
    },
  },
  watch: {
    showImageSelection() {
      this.saveComponentVisibility();
    },
    showCustomImageInput() {
      this.saveComponentVisibility();
    },
  },

  computed: {
    translatedBackgroundContainer() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title:"Background",
          title2: "Select a Background Image",
          daily: 'New Photo daily',
          selected: "Selected Photo",
          custom: "Custom Photo",
        };
      } else if (this.locale === 'fr') {
        translations = {
          title:"Arrière-plan",
          title2: "Sélectionnez une image d'arrière-plan",
          daily: 'Nouvelle photo tous les jours',
          selected: "Photo sélectionnée",
          custom: "Photo personnalisée",
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
  background-color: #fff;
  padding: 27px;
  color: #333;
  width: 85%;
  border-radius: 20px;
  margin: 20px;
  border: 1px solid #ccc;
}

.mainText{
  display: flex;
}

.container form {
  display: flex;
  margin: 10px 0px; 
  flex-wrap: wrap;
  flex-direction: column;
}

.container label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  overflow: hidden;
  margin-bottom: 0.375em;
}

.container  label input {
  position: absolute;
opacity: 0;
}

.container label input:checked + span {
  background-color: rgb(5, 169, 219);;
  color: white;
}

.container label input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em rgb(2, 79, 102);
}

.container label span {
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
  color: #333;
}

.container label span:hover {
  background-color: #d6d6e5;
}

.container label span:before {
  display: flex;
  flex-shrink: 0;
  content: "";
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em rgb(2, 79, 102);
}

</style>