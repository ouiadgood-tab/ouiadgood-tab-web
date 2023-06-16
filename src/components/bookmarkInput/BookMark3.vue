<template>
  <div>
    <div class="item-container" @mouseover="showTimesIcon">
        <i class="fa-solid fa-times" v-show="showTimes" @click="deleteBookmark"></i>
        <div class="item">
          <a :href="bookmarks.url" target="_blank">
            <img v-show="bookmarks" :src="generateFaviconUrl(bookmarks.url)" :alt="bookmarks.name" class="favicon" />
            <i class="fa-solid fa-plus" v-show="!bookmarks" @click="showBookmarkContainer"></i>
          </a>
        </div>
        <p>{{ getNameFromBookmarks() }}</p>
      </div>
      <TheBookMark3 v-if="showBookmark" @close-bookmark="hideBookmark"/>
  </div>
</template>

<script>
import TheBookMark3 from './TheBookMark3.vue';

export default {
name: "BookMark3",
data() {
  return {
    showTimes: false,
    showBookmark: false,
  };
},
computed: {
  bookmarks() {
    const storedBookmarks = localStorage.getItem("bookmarks3");
    if (storedBookmarks) {
      const parsedBookmarks = JSON.parse(storedBookmarks);
      return parsedBookmarks;
    } else {
      return false;
    }
  },

},
methods: {
  showTimesIcon() {
    this.showTimes = true;
  },
  hideTimesIcon() {
    this.showTimes = false;
  },
  showBookmarkContainer() {
    this.showBookmark = true;
  },
  hideBookmark() {
    this.showBookmark = false;
  },
  generateFaviconUrl(url) {
    if (url && url !== "undefined") {
      return `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    } else {
      return ""; // Return an empty string if the URL is missing or invalid
    }
  },
  getNameFromBookmarks() {
    if (this.bookmarks) {
      return this.bookmarks.name;
    } else {
      return '';
    }
  },
  getFirstBookmark() {
    if (this.bookmarks) {
      return this.bookmarks[0];
    } else {
      return null;
    }
  },
  deleteBookmark(){
    localStorage.removeItem("bookmarks3");
    window.location.reload(); // Reload the page
  },
},
components: { TheBookMark3 },
};
</script>

<style scoped>
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.349);
  font-size: 3rem;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}
.fa-plus{
  color:rgba(221, 222, 223, 0.863);
}
.item-container{
  padding: 23px;
  border-radius: 5%;
  margin-right:1rem;
  position: relative;
}
.item-container:hover{
  background-color: rgba(0, 0, 0, 0.329);
}
.item-container:hover .fa-times {
  display: block;
}
.fa-times {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  color: #b8b8b8;
  display: none;
  cursor:pointer;
}
p{
  color: #fffffff1;
  margin-top: -1px;
  margin-bottom: -3px;
  
}
.favicon{
  width: 6vh;
  height: 6vh;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 5px;
  margin-bottom: -5px;
}
</style>