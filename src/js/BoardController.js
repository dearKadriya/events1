import {addImage, removeImage, addHover} from "./imageController";
import {ScoresCounter} from "./ScoresCounter";

export class BoardController {
    constructor() {
        this.counter = new ScoresCounter()
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
        setInterval(() => {
            removeImage(this.counter)
            this.getBoardCells()
        }, 1000)
    }
}
