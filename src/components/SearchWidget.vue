<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="submitForm">
      <div class="input-container">
        <input type="text" v-model="searchQuery" placeholder="Search">
        <button type="submit" class="search-icon">
          <i class="fa fa-search"></i>
       </button>
        <div class="dropdown">
          <!--<button class="dropbtn google-logo search-engine-google">

          </button> -->
          <div class="dropdown-content" :class="{ 'show': showDropdown }">
            <a href="#" @click="changeSearchEngine('google')">
              <i class="fa-brands fa-google"></i> 
              Google
            </a>
            <a href="#" @click="changeSearchEngine('bing')">
              <i class="fa fa-microsoft"></i> Bing
            </a>
            <a href="#" @click="changeSearchEngine('duckduckgo')">
              <i class="fa fa-duck"></i> DuckDuckGo
            </a>
          </div>
          
        </div>
      </div>
    </form>
    <button class="dropbtn" @click="toggleDropdown">
            {{ searchEngine.toUpperCase() }} <i class="fas fa-angle-down"></i>
          </button>
  </div>
</template>

<script>
export default {
  name: 'SearchWidget',
  data() {
    return {
      searchQuery: '',
      searchEngine: 'google', // set the default search engine
      showDropdown: false // keep track of dropdown visibility
    }
  },
  methods: {
    submitForm() {
      const searchEngineUrl = this.getSearchEngineUrl();
      window.location.href = searchEngineUrl + encodeURIComponent(this.searchQuery);
    },
    changeSearchEngine(engine) {
      this.searchEngine = engine;
      this.showDropdown = false; // hide dropdown after selecting an option
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown; // toggle dropdown visibility
    },

    getSearchEngineUrl() {
      switch (this.searchEngine) {
        case 'bing':
          return 'https://www.bing.com/search?q=';
        case 'duckduckgo':
          return 'https://duckduckgo.com/?q=';
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
  margin-top: -5%;
  margin-right:30%;
  font-size: 30px;
  justify-content: center;
}

.input-container {
  position: relative;
}

input[type="text"] {
  width: 100%;
  height: 100%;
  padding: 10px 5px 10px 120px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

input[type="text"]:focus {
  outline: none;
}


.search-form {
  position: relative;
  width: 200%;
  height: 100%;
}

.search-icon {
  position: absolute;
  top: 47%;
  right: 0;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  margin-right: -15%;
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

.dropdown {
  position: relative;
  margin-left: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  top: 20px;
  left: 0;
}

.dropdown-content a {
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #F0F0F0;
}

.show {
  display: block;
}

.dropbtn{
  color: rgb(85,85,85);
  background:transparent;
  border: none;
  cursor:pointer;
  font-size: 1rem;
  margin-left: -50%;
  top: 25%;
  position: absolute;
}

</style>
