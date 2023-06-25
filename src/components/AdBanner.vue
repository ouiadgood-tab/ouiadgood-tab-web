<template>
  <img :src="currentImage" alt="">
</template>


<style scoped>
img{
    margin-top:8%
}
</style>

<script>
export default {
  data() {
    return {
      currentImage:"",
      images: [
        "250X250.jpg",
        "300x250-barilla.webp",
        "728x90-kikkoman.webp",
        "APLIVE-250x250-CPM-Banner-NEC18.gif",
        "banner-ad-300x250-1.png",
        "ebates-banner-ad-300X250.jpg",
        "medium-rectangle-1.png",
        "paulsmithcoaching-728x90-banner-example.webp",
        "vgr-728x90-banner-example.webp",
      ],
    }
  },
created(){
this.currentImage= this.getRandomImage()
},
  methods:{
    getRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      return this.images[randomIndex];
    },
  }
}

</script>