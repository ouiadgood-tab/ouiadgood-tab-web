<template>
    <div class="container">
        <div class="moveDiv">
                    <h3>{{ translatedCustomImage.title}}</h3>
            <form>
                <div class="input-group">
                    <input type="text" v-model="imageUrl" :placeholder="translatedCustomImage.placeholder" @input="loadImage">
                <button type="button" @click="clearImage">{{ translatedCustomImage.button }}</button>
                </div>
            </form>
        </div>
      <canvas ref="canvas" width="300" height="200"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomImageInput',
    data() {
      return {
        imageUrl: '',
        canvasImage: null,
        locale: localStorage.getItem('locale') || 'en',
      };
    },
    mounted() {
    this.imageUrl = localStorage.getItem('customImage') || ''; // Retrieve the custom image URL from local storage
    if (this.imageUrl) {
      this.loadImage();
    }
  },
  computed: {
    translatedCustomImage() {
      let translations;
      if (this.locale === 'en') {
        translations = {
          title:"Set Custom Background Image",
          placeholder: 'Enter Image URL',
          button: "Clear",
        };
      } else if (this.locale === 'fr') {
        translations = {
          title:"Définir une image d'arrière-plan personnalisée",
          placeholder: "Entrez l'URL de l'image",
          button: 'Claire',
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
    methods: {
      loadImage() {
        this.canvasImage = new Image();
        this.canvasImage.onload = () => {
          const canvas = this.$refs.canvas;
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(this.canvasImage, 0, 0, canvas.width, canvas.height);
          this.$emit('CustomImageInput', this.imageUrl);
        };
        this.canvasImage.src = this.imageUrl;
        localStorage.setItem('customImage', this.imageUrl); // Save the custom image URL in local storage
      },
      clearImage() {
        this.imageUrl = '';
        const canvas = this.$refs.canvas;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        localStorage.removeItem('customImage'); // Remove the custom image URL from local storage
        //eventBus.emit('CustomImageSelected', ''); // Emit event to clear the background image
        this.$emit('CustomImageInput', '');
      },
      emitImageUrl(imageUrl) {
        this.$emit('CustomImageInput', imageUrl); // Emit an empty URL to revert to default images
    },
    }
  };
  </script>
  
  <style scoped>
  .container{
    background-color: #fff;
  padding: 20px 150px;
  color: #333;
  width: 122.5vh;
  height: 48vh;
  margin-left: 18.59%;
  border-top: none;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .moveDiv{
    margin-left: -40em;
  }
  h3{
    color:#333;
    font-size: 15px;
    margin-left:-12em ;
  }
  
  form {
    margin-top: 10px;
    margin-left: 6%;
  }
  
  h3{
    margin-left: -6%;
  }

  input {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 5px;
  margin-top: 5px;
  width: 30%;
  box-sizing: border-box;
}

input:focus{
    outline: none;
  border-bottom-color: #ccc;
  font-size: 19px;
}
 
  
  button {
    background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  }
  
  canvas {
    background-image: url(./apply.jpg); /* Replace 'default-image.jpg' with your desired default image */
    background-size: cover;
    width: 500px;
    height: 300px;
    float: right;
    margin-top: -6%;
  }


  </style>
  
  