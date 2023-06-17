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
    padding: 27px;
    color: #333;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    margin: 20px;
    position: relative;
    border: 1px solid #ccc;
  }
  .moveDiv{
    padding: 10px 0;
  }

  form{
    margin: 10px 0;
  }

  input{
    border: 1px solid #eee;
    padding: 10px;
    margin:0 10px
  }
  button{
    padding: 14px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }
  canvas {
    background-image: url(./apply.jpg); /* Replace 'default-image.jpg' with your desired default image */
    background-size: cover;
    width: 500px;
    height: 300px;
  }


  </style>
  
  