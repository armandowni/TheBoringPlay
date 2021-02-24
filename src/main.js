import Vue from 'vue'
import App from './App.vue'
import router from './router/routers.js'
import vuetify from './plugins/vuetify';
import VueTranslate from 'vue-translate-plugin';
import en from './assets/translate/en';
import id from './assets/translate/id';

Vue.use(VueTranslate);
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    en,
    id,
    render: h => h(App),
}).$mount('#app')