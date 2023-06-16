<template>
    <div class="moveDiv">
      <h2>Select a Background Image</h2>
      <ul>
        <li v-for="image in images" :key="image.url" @click="selectImage(image.url)" >
          <label >
            <div class="containerImg">
                <div class="bgSpan"></div>
                <img class="imageSize" :src="image.url" :alt="image.name">
            <div class="container">
                <form>
                    <label>
                        <span>{{ image.name }}</span>
                        <input type="radio" v-model="selectedImages" :value="image.url">
                    </label>
                </form>
            </div>
        </div>
          </label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:'ImageSelection',
    data() {
      return {
        selectedImages: []
      };
    },
    created() {
    this.selectedImage = localStorage.getItem('selectedImage');
  },
  methods: {
    selectImage(imageUrl) {
      this.selectedImage = imageUrl;
      localStorage.setItem('selectedImage', imageUrl);
      this.$root.$emit('background-image-updated', imageUrl);
      //this.$emit('image-selected', this.selectedImage); // Emit event with selected image URL
    }
  },

    computed: {
      images() {
        // Return your list of image URLs that will be on selection and names here
        return [
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage1.jpeg?alt=media&token=548515cf-c4e4-421e-a5be-24c6960cd5a9&_gl=1*1t6stje*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE2OS4wLjAuMA', name: 'Colorful sky'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage10.jpeg?alt=media&token=9fe20706-fcf1-4251-8d93-ab219bfd89dd&_gl=1*1a3zky0*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE4MS4wLjAuMA', name: 'Storms Brewing'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage11.jpeg?alt=media&token=6364c6a8-c54f-4610-82a5-1441a30811dc&_gl=1*3deta5*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE5NS4wLjAuMA', name: 'NYC Sunset'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage12.jpeg?alt=media&token=64d66acf-95d7-4201-b4e4-94b3a8ea1dda&_gl=1*1f11tq*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTIxMC4wLjAuMA', name: 'Sunrise'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage13.jpeg?alt=media&token=876055ce-5b80-4bab-ab40-d401240b5e56&_gl=1*ce23o7*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTI1NC4wLjAuMA', name: 'Wonder'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage2.jpeg?alt=media&token=faeb1f50-7510-418a-86e4-9ce8d9888eff&_gl=1*12r2suh*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTI4Ny4wLjAuMA', name: 'Kitty'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage3.jpeg?alt=media&token=067675f4-26c9-44e6-b7e5-e7960ae6d4c8&_gl=1*d2ioin*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMwMC4wLjAuMA', name: 'Beautiful nature'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage4.jpeg?alt=media&token=51f496ed-13a5-4b10-a154-b09dc101dbe5&_gl=1*2c1y96*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMxMC4wLjAuMA', name: 'Sunset'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage5.jpeg?alt=media&token=e5c66313-a7ea-48df-a58c-d2b364613964&_gl=1*y50c84*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMyMS4wLjAuMA', name: 'grass land'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage6.jpeg?alt=media&token=5686f138-daf2-457a-b0d9-83ecb95cd865&_gl=1*197ocqh*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMzMy4wLjAuMA', name: 'Reef dive'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage8.jpeg?alt=media&token=9244a751-a740-4fdb-a691-91b53478b9cb&_gl=1*1xzomyu*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTM0NC4wLjAuMA', name: 'Take a Peak'},
        {url: 'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage9.jpeg?alt=media&token=9c52a949-fd17-4880-bd20-1daf76d4ce4e&_gl=1*je6sgg*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTM1Ni4wLjAuMA', name: 'When the Duck Settles'},
          // Add more images as needed
        ];
      }
    }
  };
  </script>
  
  <style scoped>
  .imageSize{
    width: 100%;
  height: 100%;
  object-fit: cover;

  }
  /*
  .bgSpan{
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  margin-top: 50.5%;
  background-color: #333;
  opacity: 0.5;

   } */
  .containerImg{
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh; 
  width: 48vh; 
  margin: 0 auto;

  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  
  li {
    margin-right: 10px;
    margin-bottom: 1em;
    cursor: pointer;
  }
  .moveDiv{
    margin-left: 18.6%;
    margin-top: -1.5%;
    background-color:#fff;
    padding-right: -10%;
    border-top: none;
    border-left: 2px;
    width: 77%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  .container form {
  margin-top: -3em;
  cursor: pointer;
  
}

.container  label input{
  width: 1.5em;
  height: 1.5em;
  transition: 0.25s ease;
  cursor: pointer;
  margin-top: 13px;
  box-shadow: inset 1 1 1 0.125em rgb(2, 79, 102);
 
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
  float: left;
  align-items: center;
  padding: 1em 0.75em 0.375em 0.375em;
  transition: 0.25s ease;
  color: #ffffff;
}

/*
.container input:before {
  
  flex-shrink: 0;
  content: "";
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 1.5em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em rgb(2, 79, 102);
  object-fit: cover;
} */
  </style>
  