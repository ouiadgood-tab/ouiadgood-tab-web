<template>
    <div class="background-image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    created() {
      this.setImageUrl();
      setInterval(this.setRandomImage, 1440000); // Change image every 24h or at every reload

    },
    methods: {
      setImageUrl() {
      const customImageUrl = localStorage.getItem('customImage');
      const selectedImage = localStorage.getItem('selectedImage');
      if (selectedImage) {
      // Remove customImage if selectedImage is present
      localStorage.removeItem('customImage');
      this.imageUrl = selectedImage;
    } else if (customImageUrl) {
      this.imageUrl = customImageUrl;
    } else {
      this.setRandomImage();
    }
    },
      setRandomImage() {
        const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
        this.imageUrl = this.imageUrls[randomIndex];
      },
      checkCustomImage() {
      const customImageUrl = localStorage.getItem('customImage');
      if (customImageUrl) {
        this.imageUrl = customImageUrl;
      }
    }
    },
    computed: {
      imageUrls() {
        // Return your list of image URLs here
        return [
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/85b0d4034df549d4a6c73d9ddd6a65d3.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/31f1308c2317425d9e6fe2bc60397375.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dc13dffa1f18411789fc74c7dfe6a42a.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/9a7a6b37e2ec4754b79e69db01dafc3e.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5d0301401c754f0982415125f999d5ef.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dd104da7daf24d7984236663b8b6464e.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/ae6ce9eb399b4798aebb2ad56c49abcc.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/686bb9a5186d492d869a409fbec7b158.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/829c9ea8c6a84916880e5e75704ec9e5.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/e33516980b7f4710a24923d3e35caca0.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/476c1f1fdd0d4642a45d1fa645277944.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/476c1f1fdd0d4642a45d1fa645277944.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7879761c8e794a3cb150822877257011.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/11beff7a0d1440b39855e75519c240af.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/d44efda3eafb4d64aa49604669f14951.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/572bc1357ef94da3a3471f0c88ec70f8.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7f55f86de7694a7f8630b8bc6a11faf0.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/4c44e725d97e4a5fb4fb6e95ee7d05cb.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/544d9c6ad67a45249cb86d5f7d72518d.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/191aa59729ac4a8f9a2a7d31b58bd427.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/a0180894cbf54b5e96e046b6ae090ca2.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/c0a1a45712e0463492c90e5d6781b68b.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/0f673a8abfb247b1844955d67e9c33c6.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5df5a163ca774adf9856e2e20037016b.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/0215c1f6d217454b96b7302f82498988.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/dd8083902bff402790eaf93920285ae0.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/5c3b8aeff8144bd28fb53c74baf06cd6.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/71a27d6823244354acb85e0806d0dff1.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/983c01c1a8fd42fba2c84c969add1be3.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/b0c48b958c8b4e5b920cfa8eccf78a05.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/47d00c04d677478cbc836624899163d0.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/6de111492f6e4084bf2b1ea0637d9660.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/a000f00065e643b6a923f7a018fdb5b2.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/c57503e07bab4971b75e97f4231bdcf5.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/7b2fe86bf5d940faaf3bd463fd745b02.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/12fbdcdc7d3c47c38477a9359e97c217.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/bfc49754ae6542f9b0b4e7303107df02.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/baf46b7b3ed74e258383e83f6bc5c6a6.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/b25ef980b1f04f82956864a25d90f29c.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/d1abd6f67097435b9078009919ae1912.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/4a7f4e11ae6247f6b5807ecaf37b7c8f.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/93765021f32e48e5b89ee7d610582ac9.jpg',
        'https://prod-tab2017-media.gladly.io/img/background-thumbnails/6898252c52c649698ed01a82577d108f.jpg',
                // Add more image URLs as needed
        ];
      }
    }
  };
  </script>
  
  <style>
  .background-image {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
  }
  </style>
  