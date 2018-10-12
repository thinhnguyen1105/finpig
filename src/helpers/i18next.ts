import i18next from 'i18next';
import vi from '../locales/i18n.vi';
import en from '../locales/i18n.en';

i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: 'en',
    // Using simple hardcoded resources for simple example
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      }
    },
  });

export default i18next;
