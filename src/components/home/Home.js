import HeaderComponent from '../HeaderAndFooter/Header/Header.vue'
export default {
    props: ['breakpointSize'],
    name: 'Home',
    components: {
        HeaderComponent
    },
    data() {
        return {
            breakpoint: this.breakpointSize,
        }
    },
    mounted() {
        this.showAppInEnglish()
    },
    methods: {
        showAppInEnglish() {}
    },
};