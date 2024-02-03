import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);
config.autoAddCss = false;

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  return nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
