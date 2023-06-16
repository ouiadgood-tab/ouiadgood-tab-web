<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="submitForm">
      <div class="input-container">
        <input type="text" v-model="searchQuery"
         :placeholder="translatedSearchContainer.placeholder"
         @focus="clearPlaceholder">
        <button type="submit" class="search-icon">
          <i class="fa fa-search"></i>
       </button>
        <div class="dropdown">
          <!--<button class="dropbtn google-logo search-engine-google">

          </button> -->
          <div class="dropdown-content" :class="{ 'show': showDropdown }">
            <a href="#" @click="changeSearchEngine('google')">
              <img src="../assets/google.png" alt="Google">
            </a>
            <a href="#" @click="changeSearchEngine('bing')">
              <img src="../assets/Bing.png" alt="Bing">
            </a>
            <a href="#" @click="changeSearchEngine('duckduckgo')">
              <img src="../assets/duckDuckGo.png" alt="DuckDuckGo">
            </a>
            <a href="#" @click="changeSearchEngine('ecosia')">
              <img src="../assets/Ecosia.webp" alt="Ecosia">
            </a>
          </div>
        </div>
      </div>
    </form>
    <button class="dropbtn" @click="toggleDropdown">
      <img :src="searchEngine" :alt="searchEngineAlt"> <i class="fas fa-angle-down"></i>
          </button>
  </div>
</template>

<script>
export default {
  name: 'SearchWidget',
  data() {
    return {
      searchQuery: '',
      searchEngine: require('../assets/google.png'), // set the default search engine image URL
      searchEngineAlt: 'Google', // set the default search engine alt text
      showDropdown: false, // keep track of dropdown visibility
      locale: localStorage.getItem('locale') || 'en',
      placeholderText: '',
    }
  },
  methods: {
    clearPlaceholder() {
      this.placeholderText = this.translatedSearchContainer.placeholder;
    },
    submitForm() {
      const searchEngineUrl = this.getSearchEngineUrl();
      window.location.href = searchEngineUrl + encodeURIComponent(this.searchQuery);
    },
    changeSearchEngine(image) {
      let searchEngineImage;
      let searchEngineAlt;

      switch (image) {
        case 'google':
          searchEngineImage = require('../assets/google.png');
          searchEngineAlt = 'Google';
          break;
        case 'bing':
          searchEngineImage = require('../assets/Bing.png');
          searchEngineAlt = 'Bing';
          break;
        case 'duckduckgo':
          searchEngineImage =require('../assets/duckDuckGo.png');
          searchEngineAlt = 'DuckDuckGo';
          break;
          case 'ecosia':
          searchEngineImage =require('../assets/Ecosia.webp');
          searchEngineAlt = 'Ecosia';
          break;
        default:
          searchEngineImage = require('../assets/google.png'); // Default to Google image if image value is unknown
          searchEngineAlt = 'Google';
      }
      this.searchEngine = searchEngineImage;
      this.searchEngineAlt = searchEngineAlt;
      this.showDropdown = false; // hide dropdown after selecting an option

      this.getSearchEngineUrl(); // Call getSearchEngineUrl() after updating searchEngine and searchEngineAlt
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown; // toggle dropdown visibility
    },

    getSearchEngineUrl() {
  let searchEngineUrl;

  switch (this.searchEngine) {
    case require('../assets/Bing.png'):
      searchEngineUrl = 'https://www.bing';
      break;
    case require('../assets/duckDuckGo.png'):
      searchEngineUrl = 'https://duckduckgo.com/?q=';
      break;
    case require('../assets/Ecosia.webp'):
      searchEngineUrl = 'https://www.ecosia';
      break;
    default: // Google as default search engine
      searchEngineUrl = 'https://www.google';
  }

  if (this.locale === 'fr') {
    searchEngineUrl += '.fr'; // Append .fr for French locale
  } else if (this.locale === 'en' && this.searchEngine !== require('../assets/duckDuckGo.png')) {
    searchEngineUrl += '.com'; // Append .com for English locale, except for DuckDuckGo
  }

  if( this.searchEngineUrl !== require('../assets/duckDuckGo.png') ){
    searchEngineUrl += '/search?q=';
  }

  return searchEngineUrl;
},

  },
  computed: {
    translatedSearchContainer() {
      let placeholder = '';
      if (this.locale === 'en') {
        placeholder = "Select your favorite Search Engine and type your search query";
      } else if (this.locale === 'fr') {
        placeholder = "Sélectionnez votre moteur de recherche préféré et tapez votre requête de recherche";
      }
      return { placeholder };
    },
  },
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
input::placeholder{
  font-size: 15px;
}
search-input::placeholder {
  color: transparent;
}

.search-input:focus::placeholder {
  color: initial;
}
input[type="text"] {
  width: 100%;
  height: 100%;
  padding: 10px 5px 10px 60px;
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
  margin-right: -10%;
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
  color: #13b0c0;
}

img{
  width: 20px;
  height: 20px;
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
  z-index: 9999;
  background-color: #fff;
  min-width: 80px;
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
  border-radius: 10px;
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
  margin-left: -47%;
  top: 25%;
  position: absolute;
}

@media(max-width: 600px){
  .search-container {
  margin-top: -5%;
  margin-right:40%;
  font-size: 30px;
}
.search-form {
  width: 150%;
}
}
</style>
