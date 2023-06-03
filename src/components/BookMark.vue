<template>
  <div>
    <div class="bookmark-icon" @click="toggleBookmarkContainer">
      <i class="fa-sharp fa-regular fa-bookmark"></i>
    </div>
    <div class="bookmark-container">
      <div v-for="bookmark in bookmarks" :key="bookmark.id" class="bookmark-item">
        <a :href="bookmark.url" target="_blank">
          <img :src="generateFaviconUrl(bookmark.url)" :alt="bookmark.name" class="favicon" />
        </a>
        <p class="bookmark-name">{{ bookmark.name }}</p>
       <!--<div class="bookmark-info">
          <a :href="bookmark.url" target="_blank" class="bookmark-name">{{ bookmark.name }}</a>
          <div class="bookmark-url">{{ bookmark.url }}</div>
        </div>-->
        <i class="fas fa-trash-alt" @click="deleteBookmark(bookmark)"></i>
      </div>
    </div>
    <TheBookMark v-if="showBookmarkContainer" @addBookmark="addBookmark" />
  </div>
</template>

<script>
import TheBookMark from '@/components/TheBookMark.vue';

export default {
  name: "BookMark",
  components: { TheBookMark },
  data() {
    return {
      showBookmarkContainer: false,
      bookmarks: [],
    };
  },
  mounted() {
    this.loadBookmarks();
    window.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggleBookmarkContainer() {
      this.showBookmarkContainer = !this.showBookmarkContainer;
    },
    loadBookmarks() {
      const storedBookmarks = localStorage.getItem("bookmarks");
      if (storedBookmarks) {
        this.bookmarks = JSON.parse(storedBookmarks);
      }
    },
    addBookmark(bookmark) {
      this.bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    },
    deleteBookmark(bookmark) {
      const index = this.bookmarks.indexOf(bookmark);
      if (index !== 1) {
        this.bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
      }
    },
    generateFaviconUrl(url) {
      return `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleOutsideClick(event) {
      // Check if the clicked element is outside the bookmark container or the dropdown
      if (
        !this.$el.contains(event.target) &&
        event.target !== this.$refs.dropdownToggle
      ) {
        this.showBookmarkContainer = false;
        this.showDropdown = false;
      }
    },
  },
};
</script>

<style scoped>

.bookmark-icon {
  position: relative;
  width: 20px;
  height: 20px;
  margin-top: -1.5%;
  margin-left: 5%;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.795);
  transition: background-color 0.3s ease;
}

.bookmark-icon:hover {
  color: white;
  cursor: pointer;
}

.bookmark-container {
  position: fixed;
  display: flex;
  top: 52%;
  left: 50%;
  height: 12vh;
  width: 100vh;
  transform: translate(-50%, -50%);
  z-index: 9999;
  padding: 20px;
  border-radius: 5px;
}

.bookmark-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 5%;
  margin-right: -5%;

}

.favicon {
  width: 35px;
  height: 30px;
  background-color: #19c5d1;
  border-radius: 10px;
}

.bookmark-info {
  flex: 1;
}

.bookmark-name {
  margin-left: -50%;
  margin-top: 80%;
  font-weight: 100;
  font-size: 15px;
  color: #fff;
}

.bookmark-url {
  font-size: 15px;
  color: #888888;
}

.fa-trash-alt {
  display: inline-flex;
  font-size: 18px;
  cursor: pointer;
  color: #888888;
  transition: color 0.3s ease;
}

.fa-trash-alt:hover {
  color: #ff0000;
}
@media(max-width: 600px){
  .bookmark-icon {
  margin-top: -3%;
}
}
</style>
