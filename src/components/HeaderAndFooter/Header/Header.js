import CountryFlag from 'vue-country-flag'
import VueCookies from 'vue-cookies'

export default {
    data() {
        return {
            lang: {},
            items: [
                { id: 1, title: 'English', icon: "us", lang: 'en' },
                { id: 2, title: 'Indonesia', icon: "id", lang: 'id' },
            ],
        }
    },
    components: {
        CountryFlag
    },
    beforeMount() {
        this.checkLang()
    },
    mounted() {
        this.$translate.setLang(this.lang.lang);
    },
    methods: {
        changeLang(item) {
            this.lang = item
            VueCookies.set('languange', item)
                // console.log(this.lang.lang);
            this.$translate.setLang(this.lang.lang);
            // console.log(this.$translate);
        },
        checkLang() {
            let langTemp = VueCookies.get('languange')
            if (langTemp != null || langTemp.length > 0 || langTemp != undefined) {
                this.items.forEach(element => {
                    if (element.title === langTemp.title) {
                        this.lang = element
                    }
                });
            } else {
                this.lang = this.items[0]
            }

        }
    },
}