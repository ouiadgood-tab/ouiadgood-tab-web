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
        {url: 'https://lh3.googleusercontent.com/yGGRVatT4RDnHTLRUrhsPROJm0l65JP2NmUmPXJ4PUywY_6GpUf-qjpfYdms5q8qjNd4-mK3Boq6AVA=w1200-h630', name: 'Flower Bed'},
        {url: 'https://lh4.googleusercontent.com/9nQrA5EfiTc5qHiaoB1zUEcwym8bmWuusSBvdrI0DFT0lGECaG-fBD5pvMiCT6ocS8yJM7bEHAWPDlY=w1200-h630', name: 'Storms Brewing'},
        {url: 'https://lh5.googleusercontent.com/ixhczlPkDGfeLhdA-fpMsY-fF8yWWCiWfBavJm7xVaCJMUKIK5TqRvx759zMJsEzBh7mLskCtefOWTw=w1200-h630', name: 'Take Root'},
        {url: 'https://lh5.googleusercontent.com/18Bk6Jex_2g55qsK5iHcikoyzu5is_Sz6eKnKhlfGlrGchU1YoFFSqwItNZq9SjqfDzW_w7JuRHOELc=w1200-h630', name: 'Reef dive'},
        {url: 'https://lh4.googleusercontent.com/Pw01kXEsYAZhB5XDqNUmSJdwae-KtYS5OnHdZvbBLxpv6fPjq4vMahTFgx3p2fT9DZE-6J-RHTNGrEs=w1200-h630', name: 'When the Duck Settles'},
        {url: 'https://lh5.googleusercontent.com/NbkmBZTBVMv7G8YgpvIvJv_VPe13IyD496YSduNrssoCarpyo0ShpPGkDGKfL8TGK4pAh_n072uP8vo=w1200-h630', name: 'NYC Sunset'},
        {url: 'https://lh5.googleusercontent.com/vaIwMl8f6UUtWll7ksfK140zDxFw4hHAXGAXCGwpJLN7sS1x5f3TmpbQUnfkkX3IlC87RDmxzZiIpLQ=w1200-h630', name: 'Sunrise'},
        {url: 'https://lh5.googleusercontent.com/MvFvuCe2eQ6kGL6DCWz21nvxgzFk6yazqwFv8mviLAqZKHedQIoGL0LIYqYNHlj6VsBXWj76N--SbR4=w1200-h630', name: 'Kitty'},
        {url: 'https://lh4.googleusercontent.com/jkVvBWUulZXsiYjfu6BI07m3ZfATxFBNt1Dol1u2ybTm1R4WxJFonmSmIUVMNBQFY5z3Zqi56aAEqGw=w1200-h630', name: 'Above the Lake'},
        {url: 'https://lh3.googleusercontent.com/FO7d--IRph3syX_OnAakxchV87yVhxD6W8szcb7bdgvBmuy1pG5Cll1rzVNgBdz-ERhUNxEI4Lx08lg=w1200-h630', name: 'Settled'},
        {url: 'https://lh5.googleusercontent.com/zvXB2JNgQdNM7M_Sej7MpC66CmpFhwMleEirwWWsThglZvCq_0X4XZ3MEUp8cU9n0tcXo8Sur6gOyDU=w1200-h630', name: 'Take a Peak'},
        {url: 'https://lh5.googleusercontent.com/4SNDJ8Sq2HWUpFjbghMJxRFvXHT8i8f8Q_r0KbnjEALja3JtFLsc2pD7ajdsBRQ6EeDGaZd4wmqRo3A=w1200-h630', name: 'Evening Haze'},
        {url: 'https://lh6.googleusercontent.com/p2Btzc8C4YYR8Gc2gG41WFiOlZZyO_WoGAPaiTU4rvtLxvKxI6vtsGArnZUHdrw10CGIQSBPi9CPbKs=w1200-h630', name: 'Pause for Reflection'},
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
    margin-left: 18.2em;
    margin-top: -4em;
    background-color:#fff;
    padding-right: -10%;
    border-top: none;
    border-left: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
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
  