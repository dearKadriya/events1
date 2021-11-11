import {ScoresCounter} from "./ScoresCounter";

import {BoardController} from './BoardController'

class App {
    constructor() {
        this.counter = new ScoresCounter()
        this.boardController = new BoardController()
    }

}

const nApp = new App()
nApp.boardController.getBoardCells()
// nApp.boardController.startInterval()
