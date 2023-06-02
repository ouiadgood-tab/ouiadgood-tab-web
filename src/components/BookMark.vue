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
       <!--<div class="bookmark-info">
          <a :href="bookmark.url" target="_blank" class="bookmark-name">{{ bookmark.name }}</a>
          <div class="bookmark-url">{{ bookmark.url }}</div>
        </div>-->
        <i class="fas fa-trash-alt" @click="deleteBookmark(bookmark.id)"></i>
      </div>
    </div>
    <TheBookMark v-if="showBookmarkContainer" @addBookmark="addBookmark" />
  </div>
</template>

<script>
import TheBookMark from '@/components/TheBookMark.vue'

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
    deleteBookmark(id) {
      this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    },
    generateFaviconUrl(url) {
      return `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  margin-top: -1.5%;
  margin-left: 30px;
  font-size: 30px;
}

.bookmark-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.795);
  transition: background-color 0.3s ease;
}

.bookmark-icon:hover {
  color: white;
}

.bookmark-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  z-index: 9999;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.bookmark-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.favicon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.bookmark-info {
  flex: 1;
}

.bookmark-name {
  font-weight: bold;
}

.bookmark-url {
  font-size: 12px;
  color: #888888;
}

.fa-trash-alt {
  cursor: pointer;
  color: #888888;
  transition: color 0.3s ease;
}

.fa-trash-alt:hover {
  color: #ff0000;
}
</style>
