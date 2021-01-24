import axios from "axios";
import restApi from "../../router/restAPI"
export default {
    name: 'CollectionPage',
    data() {
        return {
            menu: [],
            loadPage: true,
        }
    },
    beforeMount() {
        this.loadPage = true
    },
    mounted() {
        this.getMenu()
    },
    methods: {
        getMenu() {
            axios.get(restApi.globalStorage + "/api/gamelists/getAllUrl").then((data) => {
                this.menu = data.data
                this.loadPage = false
            })
        }
    },
};