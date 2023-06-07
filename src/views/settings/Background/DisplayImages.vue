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
        'https://lh3.googleusercontent.com/yGGRVatT4RDnHTLRUrhsPROJm0l65JP2NmUmPXJ4PUywY_6GpUf-qjpfYdms5q8qjNd4-mK3Boq6AVA=w1200-h630',
        'https://lh4.googleusercontent.com/9nQrA5EfiTc5qHiaoB1zUEcwym8bmWuusSBvdrI0DFT0lGECaG-fBD5pvMiCT6ocS8yJM7bEHAWPDlY=w1200-h630', 
        'https://lh5.googleusercontent.com/ixhczlPkDGfeLhdA-fpMsY-fF8yWWCiWfBavJm7xVaCJMUKIK5TqRvx759zMJsEzBh7mLskCtefOWTw=w1200-h630', 
        'https://lh5.googleusercontent.com/18Bk6Jex_2g55qsK5iHcikoyzu5is_Sz6eKnKhlfGlrGchU1YoFFSqwItNZq9SjqfDzW_w7JuRHOELc=w1200-h630', 
        'https://lh4.googleusercontent.com/Pw01kXEsYAZhB5XDqNUmSJdwae-KtYS5OnHdZvbBLxpv6fPjq4vMahTFgx3p2fT9DZE-6J-RHTNGrEs=w1200-h630', 
        'https://lh5.googleusercontent.com/NbkmBZTBVMv7G8YgpvIvJv_VPe13IyD496YSduNrssoCarpyo0ShpPGkDGKfL8TGK4pAh_n072uP8vo=w1200-h630',
        'https://lh5.googleusercontent.com/vaIwMl8f6UUtWll7ksfK140zDxFw4hHAXGAXCGwpJLN7sS1x5f3TmpbQUnfkkX3IlC87RDmxzZiIpLQ=w1200-h630', 
        'https://lh5.googleusercontent.com/MvFvuCe2eQ6kGL6DCWz21nvxgzFk6yazqwFv8mviLAqZKHedQIoGL0LIYqYNHlj6VsBXWj76N--SbR4=w1200-h630', 
        'https://lh4.googleusercontent.com/jkVvBWUulZXsiYjfu6BI07m3ZfATxFBNt1Dol1u2ybTm1R4WxJFonmSmIUVMNBQFY5z3Zqi56aAEqGw=w1200-h630', 
        'https://lh3.googleusercontent.com/FO7d--IRph3syX_OnAakxchV87yVhxD6W8szcb7bdgvBmuy1pG5Cll1rzVNgBdz-ERhUNxEI4Lx08lg=w1200-h630', 
        'https://lh5.googleusercontent.com/zvXB2JNgQdNM7M_Sej7MpC66CmpFhwMleEirwWWsThglZvCq_0X4XZ3MEUp8cU9n0tcXo8Sur6gOyDU=w1200-h630', 
        'https://lh5.googleusercontent.com/4SNDJ8Sq2HWUpFjbghMJxRFvXHT8i8f8Q_r0KbnjEALja3JtFLsc2pD7ajdsBRQ6EeDGaZd4wmqRo3A=w1200-h630', 
        'https://lh6.googleusercontent.com/p2Btzc8C4YYR8Gc2gG41WFiOlZZyO_WoGAPaiTU4rvtLxvKxI6vtsGArnZUHdrw10CGIQSBPi9CPbKs=w1200-h630', 
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
  