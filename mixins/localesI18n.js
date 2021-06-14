import { enUS, fr } from 'date-fns/locale'

export default {
      data() {
        return {
            enUS, fr,
          }
    },
    computed: {
        locale() {
          let locale;
          let lang = this.$i18n.localeProperties.iso.split('-', 1)[0];
          if (lang == 'fr') {
            locale = fr;
          } else {
            locale = enUS;
          }
          return locale;
        }
    }
};