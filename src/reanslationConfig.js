import translations from './translations';
import { translateText } from './translationService';

export default {
  currentLanguage: 'en',
  async translate(key) {
    const translation = translations[this.currentLanguage][key];
    if (!translation) return key;

    let translatedText = translation;

    if (this.currentLanguage !== 'en') {
      translatedText = await translateText(translation, 'en', this.currentLanguage);
    }

    if (this.currentLanguage !== 'fr') {
      translatedText = await translateText(translatedText, this.currentLanguage, 'fr');
    }

    if (this.currentLanguage !== 'en') {
      translatedText = await translateText(translatedText, 'fr', 'en');
    }

    return translatedText || key;
  },
  switchLanguage(targetLanguage) {
    this.currentLanguage = targetLanguage;
  },
};
