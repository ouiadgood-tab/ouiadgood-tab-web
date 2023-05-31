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
    methods: {
      selectImage(imageUrl) {
        const index = this.selectedImages.indexOf(imageUrl);
        if (index !== -1) {
          this.selectedImages.splice(index, 1);
        } else {
          this.selectedImages.push(imageUrl);
        }
        this.$emit('image-selected', this.selectedImages); // Emit event with selected image URLs
      }
    },
    computed: {
      images() {
        // Return your list of image URLs and names here
        return [
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/85b0d4034df549d4a6c73d9ddd6a65d3.jpg', name: 'Flower Bed'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/31f1308c2317425d9e6fe2bc60397375.jpg', name: 'Storms Brewing'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dc13dffa1f18411789fc74c7dfe6a42a.jpg', name: 'Take Root'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/9a7a6b37e2ec4754b79e69db01dafc3e.jpg', name: 'Misty Morning'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5d0301401c754f0982415125f999d5ef.jpg', name: 'When the Dusk Settles'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dd104da7daf24d7984236663b8b6464e.jpg', name: 'The Winding Road'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/ae6ce9eb399b4798aebb2ad56c49abcc.jpg', name: 'NYC Sunset'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/686bb9a5186d492d869a409fbec7b158.jpg', name: 'Fall Leaves'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/829c9ea8c6a84916880e5e75704ec9e5.jpg', name: 'Above the Lake'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/e33516980b7f4710a24923d3e35caca0.jpg', name: 'Settled'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/476c1f1fdd0d4642a45d1fa645277944.jpg', name: 'Take a Peak'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7879761c8e794a3cb150822877257011.jpg', name: 'Morning Haze'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/11beff7a0d1440b39855e75519c240af.jpg', name: 'Pause for Reflection'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/d44efda3eafb4d64aa49604669f14951.jpg', name: 'Moonlight'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/572bc1357ef94da3a3471f0c88ec70f8.jpg', name: 'Alcazar'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7f55f86de7694a7f8630b8bc6a11faf0.jpg', name: 'Hillside'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/4c44e725d97e4a5fb4fb6e95ee7d05cb.jpg', name: 'Home on the Range'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/544d9c6ad67a45249cb86d5f7d72518d.jpg', name: 'Yosemite'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/191aa59729ac4a8f9a2a7d31b58bd427.jpg', name: 'Surrounded'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/a0180894cbf54b5e96e046b6ae090ca2.jpg', name: 'Tulips'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/c0a1a45712e0463492c90e5d6781b68b.jpg', name: 'Coasting By'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/0f673a8abfb247b1844955d67e9c33c6.jpg', name: 'Banff'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5df5a163ca774adf9856e2e20037016b.jpg', name: 'Shooting Star'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/0215c1f6d217454b96b7302f82498988.jpg', name: 'Golden Waves'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dd8083902bff402790eaf93920285ae0.jpg', name: 'Morning Drive'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5c3b8aeff8144bd28fb53c74baf06cd6.jpg', name: 'Lush'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/71a27d6823244354acb85e0806d0dff1.jpg', name: 'Solitude'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/983c01c1a8fd42fba2c84c969add1be3.jpg', name: 'From the Valley'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/b0c48b958c8b4e5b920cfa8eccf78a05.jpg', name: 'Forest Fire'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/47d00c04d677478cbc836624899163d0.jpg', name: 'Over the Valley'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/6de111492f6e4084bf2b1ea0637d9660.jpg', name: 'Winter is Coming'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/a000f00065e643b6a923f7a018fdb5b2.jpg', name: 'Northern Glow'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/c57503e07bab4971b75e97f4231bdcf5.jpg', name: 'In Dew Time'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7b2fe86bf5d940faaf3bd463fd745b02.jpg', name: 'Ripples'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/12fbdcdc7d3c47c38477a9359e97c217.jpg', name: 'Time Warp'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/bfc49754ae6542f9b0b4e7303107df02.jpg', name: 'Brisk'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/baf46b7b3ed74e258383e83f6bc5c6a6.jpg', name: 'Sleigh Ride'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/b25ef980b1f04f82956864a25d90f29c.jpg', name: 'Alpine Lake'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/d1abd6f67097435b9078009919ae1912.jpg', name: 'Beached'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/4a7f4e11ae6247f6b5807ecaf37b7c8f.jpg', name: 'Slovenia'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/93765021f32e48e5b89ee7d610582ac9.jpg', name: 'Ready to Launch'},
        {url: 'https://prod-tab2017-media.gladly.io/img/background-thumbnails/6898252c52c649698ed01a82577d108f.jpg', name: 'Cascades'},
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
  