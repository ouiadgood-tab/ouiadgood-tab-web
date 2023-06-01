<template>
  <div id="backgroundImage">
    <DisplayImages :image-url="backgroundImageUrl" />
    <drop-down />
    <note-widget />
    <image-logo />
    <date-time />
    <CookieBanner v-if="showBanner" @hideBanner="showBanner = false" />
  </div>
</template>

<script>
import DateTime from '@/components/DateTime.vue';
import DropDown from '@/components/DropDown.vue';
import ImageLogo from '@/components/ImageLogo.vue';
import NoteWidget from '@/components/NoteWidget.vue';
import CookieBanner from '@/components/CookieBanner.vue';
import DisplayImages from './settings/Background/DisplayImages.vue';

export default {
  name: 'HomeView',
  components: {
    DropDown,
    NoteWidget,
    ImageLogo,
    DateTime,
    CookieBanner,
    DisplayImages,
  },
  data() {
    return {
      backgroundImageUrl: '',
      showBanner: !(this.$posthog.has_opted_in_capturing() || this.$posthog.has_opted_out_capturing()),
    };
  },
    mounted() {
      this.backgroundImageUrl;
  },
};
</script>
