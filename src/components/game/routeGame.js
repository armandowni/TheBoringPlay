import CanonGame from './canon-game/CanonGame.vue'
import FlappyDuck from './flappy-duck/FlappyDuck.vue'
import TicTacToe from './TicTacToe/TicTacToe.vue'

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
    {
        path: '/gameList/tictactoe',
        name: 'Tic Tac Toe',
        component: TicTacToe
    },
]
export default routeGame;