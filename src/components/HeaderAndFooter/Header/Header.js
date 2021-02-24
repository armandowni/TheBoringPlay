import CountryFlag from 'vue-country-flag'
import VueCookies from 'vue-cookies'

export default {
    data() {
        return {
            lang: {},
            items: [
                { id: 1, title: 'English', icon: "us" },
                { id: 2, title: 'Indonesia', icon: "id" },
            ],
        }
    },
    components: {
        CountryFlag
    },
    beforeMount() {
        this.checkLang()
    },
    methods: {
        changeLang(item) {
            this.lang = item
            VueCookies.set('languange', item.title)
        },
        checkLang() {
            this.items.forEach(element => {
                if (element.title === VueCookies.get('languange')) {
                    this.lang = element
                }
            });
        }
    }
}