<template>
  <div id="backgroundImage">
    <DisplayImages :image-url="backgroundImageUrl">
      <drop-down />
      <image-logo />
      <BookMark v-show="bookmarkEnabled"/>
      <date-time v-show="clockEnabled"/> 
      <CookieBanner v-if="showBanner" @hideBanner="showBanner = false" /> 
      <AdBanner />
    </DisplayImages>
  </div>
</template>

<script>
import DisplayImages from './settings/Background/DisplayImages.vue';
import DropDown from '@/components/DropDown.vue';
import DateTime from '@/components/DateTime.vue';
import ImageLogo from '@/components/ImageLogo.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import BookMark from '@/components/BookMark.vue';
import AdBanner from '@/components/AdBanner.vue';

export default {
  name: 'HomeView',
  components: {
    DisplayImages,
    DropDown,
    CookieBanner,
    DateTime,
    ImageLogo,
    AdBanner,
    BookMark
},
  data() {
    return {
      backgroundImageUrl: '', // this is where all the background images are coming from
      showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing()),
      notesEnabled: true,
      todoListEnabled: true,
      clockEnabled: true,
      bookmarkEnabled: false,
    };
  },
    mounted() {
      this.backgroundImageUrl;
  },
  created() {
    this.notesEnabled = localStorage.getItem('notesEnabled') === 'true';
    this.todoListEnabled = localStorage.getItem('todoListEnabled') === 'true';
    this.clockEnabled = localStorage.getItem('ClockEnabled') === 'true';
    this.bookmarkEnabled = localStorage.getItem('bookmarkEnabled') === 'true';
  },
};
</script>
