import {addImage, removeImage, addHover} from "./imageController";
import {ScoresCounter} from "./ScoresCounter";

export class BoardController {
    constructor() {
        this.counter = new ScoresCounter()
        this.startInterval()

    }

     getBoardCells() {
        let cells = document.getElementsByClassName('box')
        cells = Array.from(cells)
        let board = []
        for (let cell in cells) {
            board.push(cells[cell].dataset.id)
        }
        this.getRandomCell(board, cells)
    }
     getRandomCell(board, cells) {
        let randomCell = board[Math.floor(Math.random() * board.length)];
        while (randomCell === this.GoblinCell) {
            randomCell = board[Math.floor(Math.random() * board.length)];
        }
        this.GoblinCell = randomCell
        this.datasetId = ''
        cells.filter(elem => (elem.dataset.id === randomCell) ? this.datasetId = elem.dataset.id: 'some')
        let imgEl = addImage(this.datasetId, this.counter)
        addHover(imgEl)
    }
    startInterval() {
        this.interval = setInterval(() => {
            this.checkGameState()
            this.getBoardCells()
        }, 1000)
        return this.interval
    }
    stopInterval() {
        clearInterval(this.interval)
    }
    endGame () {
        let container = document.body.querySelector('.container');
        let mess = document.createElement('div');
        mess.textContent = 'Игра окончена'
        mess.classList.add('game-over')
        let button = document.createElement('button')
        button.textContent = 'OK';
        button.classList.add('game-over')
        button.classList.add('button')
        container.insertAdjacentElement('beforebegin', mess)
        container.insertAdjacentElement('beforebegin', button)
        button.addEventListener('click', () => {
                this.startInterval()
            mess.remove()
            button.remove()
            })
    }

    checkGameState() {
        let gameOverState = removeImage(this.counter)
        if (gameOverState === 'game over') {
            this.stopInterval()
            this.endGame()
        }
    }



}
