import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import collectionPage from '../components/collection-page/CollectionPage.vue';
import canonGame from '../components/game/canon-game/CanonGame.vue';
import flappyduck from '../components/game/flappy-duck/FlappyDuck.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collection',
    name: 'Collection',
    component: collectionPage
  },
  {
    path: '/canonGame',
    name: 'Canon Game',
    component: canonGame
  },
  {
    path: '/flappyduck',
    name: 'Flappy Duck',
    component: flappyduck
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
