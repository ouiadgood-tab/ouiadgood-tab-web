<template>
  <div class="tt"></div>
<div class="ads-container">
  <div class="col">
    <img src="../assets/300x250-barilla.webp" alt="">
    <img src="../assets/ebates-banner-ad-300X250.jpg" alt="">
  </div>
  <img class="wide-img" :src="currentImage" alt="">
</div>
</template>


<style scoped>
.ads-container{
  position: absolute;
  z-index: 1;
  bottom: 0;

}
.col{
  display: flex;
  float: right;
  margin-right: 20px;
  flex-direction: column;
}
.col img{
  width: 200px;
}

.wide-img{
  width: 100vw;
  height: 100px;
  object-fit: contain;
}
</style>

<script>
export default {
  data() {
    return {
      currentImage:"",
      images: [
        // "250X250.jpg",
        // "300x250-barilla.webp",
        // "728x90-kikkoman.webp",
        // "APLIVE-250x250-CPM-Banner-NEC18.gif",
        // "banner-ad-300x250-1.png",
        // "ebates-banner-ad-300X250.jpg",
        // "medium-rectangle-1.png",
        // "paulsmithcoaching-728x90-banner-example.webp",
        require("../assets/vgr-728x90-banner-example.webp"),
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