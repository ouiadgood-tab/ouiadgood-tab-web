<template>
  <div>
    <!-- <button @click="openPopup">Open Popup</button> -->

    <div v-if="showPopup" class="popup">
      <button class="close" @click="closePopup">
        <i class="fa fa-times"></i>
      </button>
      <div class="popup-content">
        <img :src="currentImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      popupTimer: null,
      currentImage:"",
      images: [
        "/250X250.jpg",
        "/300x250-barilla.webp",
        "/728x90-kikkoman.webp",
        "/APLIVE-250x250-CPM-Banner-NEC18.gif",
        "/banner-ad-300x250-1.png",
        "/ebates-banner-ad-300X250.jpg",
        "/medium-rectangle-1.png",
        "/paulsmithcoaching-728x90-banner-example.webp",
        "/vgr-728x90-banner-example.webp",
      ],
    };
  },
  mounted() {
    this.startPopupTimer();
  },
  methods: {
    getRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      return this.images[randomIndex];
    },
    openPopup() {
      clearTimeout(this.popupTimer);
      this.showPopup = true;
      this.currentImage = this.getRandomImage();
    },
    closePopup() {
      this.showPopup = false;
      this.startPopupTimer();
    },
    startPopupTimer() {
      this.popupTimer = setTimeout(() => {
        this.showPopup = true;
        this.currentImage = this.getRandomImage();
      }, 30000); // 30 seconds
    },
  },
  watch: {
    showPopup(newValue) {
      if (newValue) {
        clearTimeout(this.popupTimer);
      }
    },
  },
};
</script>

<style>
.close {
  position: fixed;
  top: 0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin: 20px;
  right: 0;
  padding: 20px;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  position: relative;
  background-color: #19c5d1d3;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

</style>
