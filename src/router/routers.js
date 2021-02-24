import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import collectionPage from '../components/collection-page/CollectionPage.vue';
import feedback from '../components/Feedback/Feedback.vue';
import routeGame from '../components/game/routeGame';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/collection',
        name: 'Collection',
        component: collectionPage
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: feedback
    },

]

routeGame.forEach((data) => {
    routes.push(data)
})


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router