import translate from 'google-translate-api';

export async function translateText(text, sourceLanguage, targetLanguage) {
  try {
    const response = await translate(text, { from: sourceLanguage, to: targetLanguage });
    return response.text;
  } catch (error) {
    console.error('Translation error:', error);
    return '';
  }
}
