import CanonGame from './canon-game/CanonGame.vue'
import FlappyDuck from './flappy-duck/FlappyDuck.vue'

const routeGame = [{
        path: '/gameList/canonGame',
        name: 'Canon Game',
        component: CanonGame
    },
    {
        path: '/gameList/flappyduck',
        name: 'Flappy Duck',
        component: FlappyDuck
    },
]
export default routeGame;