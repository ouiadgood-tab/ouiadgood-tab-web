<template>
    <div>
        <div class="head">
            <h2 class="mainText">Background</h2>
            <div class="container">
                <form>
                    <label>
                        <input type="radio" name="radio" checked="" @click="showImageSelection = false; showCustomImageInput = false">
                        <span>New Photo daily</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" @click="showImageSelection = true; showCustomImageInput = false">
                        <span>Selected Photo</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" @click="showImageSelection = false; showCustomImageInput = true">
                        <span>Custom photo</span>
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
  }
}
 
};
</script>

<style scoped>
.head {
    background-color: #fff;
  padding: 20px 150px;
  color: #333;
  width: 122.5vh;
  height: 30vh;
  margin-left: 18.59%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.mainText{
    display: flex;
    margin-left: -14%;
    margin-top: 4%;

}

.container form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: -14%;
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
  left: -9999px;
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