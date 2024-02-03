import english from "../assets/translate/en.json";
import indonesia from "../assets/translate/id.json";

export default defineI18nConfig(() => ({
  legacy: true,
  locale: "en",
  messages: {
    en: english,
    id: indonesia,
  },
}));
