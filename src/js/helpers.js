import {removeImage} from "./imageController";
export {startInterval}

function startInterval(boardController) {
    setInterval(() => {
        removeImage()
        boardController.getBoardCells()
    }, 2000)
}
