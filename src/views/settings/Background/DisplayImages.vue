<template>
    <div class="background-image" :style="{ backgroundImage: `url(${imageUrl})` }">
      <slot />
    </div>
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
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage1.jpeg?alt=media&token=548515cf-c4e4-421e-a5be-24c6960cd5a9&_gl=1*1t6stje*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE2OS4wLjAuMA',
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage10.jpeg?alt=media&token=9fe20706-fcf1-4251-8d93-ab219bfd89dd&_gl=1*1a3zky0*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE4MS4wLjAuMA', 
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage11.jpeg?alt=media&token=6364c6a8-c54f-4610-82a5-1441a30811dc&_gl=1*3deta5*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTE5NS4wLjAuMA', 
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage12.jpeg?alt=media&token=64d66acf-95d7-4201-b4e4-94b3a8ea1dda&_gl=1*1f11tq*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTIxMC4wLjAuMA', 
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage13.jpeg?alt=media&token=876055ce-5b80-4bab-ab40-d401240b5e56&_gl=1*ce23o7*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTI1NC4wLjAuMA', 
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage2.jpeg?alt=media&token=faeb1f50-7510-418a-86e4-9ce8d9888eff&_gl=1*12r2suh*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTI4Ny4wLjAuMA',
        'hhttps://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage3.jpeg?alt=media&token=067675f4-26c9-44e6-b7e5-e7960ae6d4c8&_gl=1*d2ioin*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMwMC4wLjAuMA', 
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage4.jpeg?alt=media&token=51f496ed-13a5-4b10-a154-b09dc101dbe5&_gl=1*2c1y96*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMxMC4wLjAuMA',
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage5.jpeg?alt=media&token=e5c66313-a7ea-48df-a58c-d2b364613964&_gl=1*y50c84*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMyMS4wLjAuMA',
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage6.jpeg?alt=media&token=5686f138-daf2-457a-b0d9-83ecb95cd865&_gl=1*197ocqh*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTMzMy4wLjAuMA',
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage8.jpeg?alt=media&token=9244a751-a740-4fdb-a691-91b53478b9cb&_gl=1*1xzomyu*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTM0NC4wLjAuMA',
        'https://firebasestorage.googleapis.com/v0/b/oui-ad-good.appspot.com/o/Oui%20ad%20Good%2Fimage9.jpeg?alt=media&token=9c52a949-fd17-4880-bd20-1daf76d4ce4e&_gl=1*je6sgg*_ga*MTQ1NTY3MDA4NS4xNjg2MjQyMzUw*_ga_CW55HF8NVT*MTY4NjI1MDE1NS4yLjEuMTY4NjI1MTM1Ni4wLjAuMA', 
                // Add more image URLs as needed
        ];
      }
    }
  };
  </script>
  
  <style>
  .background-image {
    width: 100%;
    height: 100vh;
    background: #000;
    background-size: cover;
    background-position: center;
  }
  </style>
  