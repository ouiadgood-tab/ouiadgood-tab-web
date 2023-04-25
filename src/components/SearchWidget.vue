<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="submitForm">
      <div class="input-container">
        <input type="text" v-model="searchQuery" placeholder="Search">
        <button type="submit" class="search-icon">
          <i class="fa fa-search"></i>
        </button>
        <div class="dropdown">
          <button class="dropbtn">
            <i class="fa fa-google"></i>
          </button>
          <div class="dropdown-content">
            <a href="#" @click="changeSearchEngine('google')">
              <i class="fa-brands fa-google"></i> Google
            </a>
            <a href="#" @click="changeSearchEngine('bing')">
              <i class="fa fa-microsoft"></i> Bing
            </a>
            <a href="#" @click="changeSearchEngine('duckduckgo')">
              <i class="fa fa-duck"></i> DuckDuckGo
            </a>
            <a href="#" @click="changeSearchEngine('safari')">
              <i class="fa-brands fa-safari"></i> Safari
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchWidget',
  data() {
    return {
      searchQuery: '',
      searchEngine: 'google' // set the default search engine
    }
  },
  methods: {
    submitForm() {
      const searchEngineUrl = this.getSearchEngineUrl();
      window.location.href = searchEngineUrl + encodeURIComponent(this.searchQuery);
    },
    changeSearchEngine(engine) {
      this.searchEngine = engine;
    },
    getSearchEngineUrl() {
      switch (this.searchEngine) {
        case 'bing':
          return 'https://www.bing.com/search?q=';
        case 'duckduckgo':
          return 'https://duckduckgo.com/?q=';
        case 'safari':
          return 'https://www.apple.com/search/?q=';
        default: // Google as default search engine
          return 'https://www.google.com/search?q=';
      }
    }
  }
}
</script>

<style scoped>
.search-container {
  position: relative;
  display: inline-block;
  margin-top: 10%;
  margin-left: -25%;
  font-size: 30px;
}

.input-container {
  position: relative;
}

.search-form {
  position: relative;
  width: 200%;
  height: 100%;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  margin-right: -5%;
  border: none;
  background: transparent;
  color: rgba(88, 85, 85, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
}

.search-icon:focus {
  outline: none;
}

.search-icon:hover {
  color: rgb(3, 13, 158);
}

input[type="text"] {
  width: 100%;
  height: 100%;
  padding: 10px 40px 10px 10px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: rgba(255, 255, 255);
  color: white;
}

input[type="text"]:focus {
  outline: none;
}

.search-engine-icons {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.search-engine-icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.search-engine-icon:hover {
  opacity: 0.7;
}

.search-engine-icon:focus {
  outline: none;
}

.search-engine-google {
  background-image: url("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png");
}

.search-engine-bing {
  background-image: url("https://www.bing.com/s/a/hpc16.png");
}

.search-engine-duckduckgo {
  background-image: url("https://duckduckgo.com/assets/logo_homepage.normal.v108.svg");
}

.search-engine-safari {
  background-image: url("https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg");
}
</style>
