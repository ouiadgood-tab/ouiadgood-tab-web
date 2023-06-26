<template>
  <div class="search-container">
    <div class="search-form">

      <div class="input-container">

        <div class="drop-down">
          <button class="dropbtn" @click.capture="toggleDropdown">
            <img class="engine-img" :src="searchEngine" :alt="searchEngineAlt" />
            <i class="fas fa-angle-down"></i>
          </button>
          <div v-show="showDropdown" class="dropdown-content">
            <a href="#" @click="changeSearchEngine('google')">
              <img class="g-img" src="../assets/google.png" alt="Google" />
            </a>
            <a href="#" @click="changeSearchEngine('bing')">
              <img class="b-img" src="../assets/Bing.png" alt="Bing" />
            </a>
            <a href="#" @click="changeSearchEngine('duckduckgo')">
              <img class="d-img" src="../assets/duckDuckGo.png" width="80" alt="DuckDuckGo" />
            </a>
            <a href="#" @click="changeSearchEngine('ecosia')">
              <img class="e-img" src="../assets/Ecosia.webp" width="50" alt="Ecosia" />
            </a>
          </div>
        </div>
       
       


     

      <form @submit.prevent="submitForm" class="flex">
        <input
        type="text"
        v-model="searchQuery"
        :placeholder="translatedSearchContainer.placeholder"
        @blur="$event=> $event.target.setAttribute('placeholder',translatedSearchContainer.placeholder)"
        @focus="clearPlaceholder"
      />
      <button type="submit" class="search-icon">
        <i class="fa fa-search"></i>
      </button>
    </form>
        
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "SearchWidget",
  data() {
    return {
      searchQuery: "",
      searchEngine: require("../assets/google.png"), // set the default search engine image URL
      searchEngineAlt: "Google", // set the default search engine alt text
      showDropdown: false, // keep track of dropdown visibility
      locale: localStorage.getItem("locale") || "en",
      placeholderText: "",
    };
  },
  methods: {
    clearPlaceholder(ev) {
      // this.placeholderText = this.translatedSearchContainer.placeholder;
      ev.target.setAttribute("placeholder","")
    },
    submitForm() {
      const searchEngineUrl = this.getSearchEngineUrl();
      window.location.href =
        searchEngineUrl + encodeURIComponent(this.searchQuery);
    },
    changeSearchEngine(image) {
      let searchEngineImage;
      let searchEngineAlt;

      switch (image) {
        case "google":
          searchEngineImage = require("../assets/google.png");
          searchEngineAlt = "Google";
          break;
        case "bing":
          searchEngineImage = require("../assets/Bing.png");
          searchEngineAlt = "Bing";
          break;
        case "duckduckgo":
          searchEngineImage = require("../assets/duckDuckGo.png");
          searchEngineAlt = "DuckDuckGo";
          break;
        case "ecosia":
          searchEngineImage = require("../assets/Ecosia.webp");
          searchEngineAlt = "Ecosia";
          break;
        default:
          searchEngineImage = require("../assets/google.png"); // Default to Google image if image value is unknown
          searchEngineAlt = "Google";
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
        case require("../assets/Bing.png"):
          searchEngineUrl = "https://www.bing";
          break;
        case require("../assets/duckDuckGo.png"):
          searchEngineUrl = "https://duckduckgo.com/?q=";
          break;
        case require("../assets/Ecosia.webp"):
          searchEngineUrl = "https://www.ecosia";
          break;
        default: // Google as default search engine
          searchEngineUrl = "https://www.google";
      }

      if (this.locale === "fr") {
        searchEngineUrl += ".fr"; // Append .fr for French locale
      } else if (
        this.locale === "en" &&
        this.searchEngine !== require("../assets/duckDuckGo.png")
      ) {
        searchEngineUrl += ".com"; // Append .com for English locale, except for DuckDuckGo
      }

      if (this.searchEngineUrl !== require("../assets/duckDuckGo.png")) {
        searchEngineUrl += "/search?q=";
      }

      return searchEngineUrl;
    },
  },
  computed: {
    translatedSearchContainer() {
      let placeholder = "";
      if (this.locale === "en") {
        placeholder =
          "Select your favorite Search Engine and type your search query";
      } else if (this.locale === "fr") {
        placeholder =
          "Sélectionnez votre moteur de recherche préféré et tapez votre requête de recherche";
      }
      return { placeholder };
    },
  },
};
</script>

<style scoped>
img{
  width:20px
}

.d-img{
  width: 28px;
}
.e-img{
  width: 30px;
}
.dropbtn{
  display: flex;
  border:none;
  background: none;
  gap:10px;
  cursor: pointer;
  align-items: center;
}

.drop-down{
  display: flex;
  align-items: center;
}

.dropdown-content{
  position: absolute;
  display: flex;
  bottom: -100%;
  transform: translateY(70%);
  padding: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  gap:10px;
  z-index: 1;
  background-color: #fff;
  flex-direction: column;
}
a{
  cursor: pointer;
}
.input-container{
  display: flex;
  position: relative;
  padding: 10px 14px;
  width:600px;
  gap:10px;
  justify-content: space-between;
  border-radius: 100px;
  background: #fff;
}

.flex{
  width:100%;
  display: flex;
  align-items: center;
  gap:10px;
}
input{
  width: 100%;
  padding: 10px;
background: none;
border: none;
outline: none;
}

.search-icon{
  border: none;
  padding: 10px;
  cursor: pointer;
  background: none;
}

.search-container{
  position: relative;
  z-index: 11;
}

@media screen and (max-width:600px) {
  .input-container{
    width: 100%;
  }
}
</style>
