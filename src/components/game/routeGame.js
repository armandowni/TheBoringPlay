import CanonGame from './canon-game/CanonGame.vue'
import FlappyDuck from './flappy-duck/FlappyDuck.vue'

const routeGame = [{
        path: '/canonGame',
        name: 'Canon Game',
        component: CanonGame
    },
    {
        path: '/flappyduck',
        name: 'Flappy Duck',
        component: FlappyDuck
    },
]
export default routeGame;