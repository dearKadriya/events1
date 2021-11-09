import goblinImage from "../img/goblin.png";
export {addImage, removeImage, addHover}

function addImage(datasetId, counter) {
        const elemInDom = document.querySelector("[data-id='" + datasetId + "']")
        const imgEl = document.createElement('img')
        imgEl.className = 'goblin'
        imgEl.src = goblinImage
        imgEl.addEventListener('click', () => {
                counter.addPoint(1)
                let playerScore = document.querySelector("[data-id=score]")
                playerScore.textContent = `Очки: ${counter.count} `
                console.log(playerScore)
                imgEl.style.visibility = 'hidden'
                counter.bite = true;
        })
        elemInDom.appendChild(imgEl)
        return imgEl
    }
function removeImage(counter) {
        if (counter.bite === false) {
                counter.addStrikes(1)
                let playerStrikes = document.querySelector("[data-id=strikes]")
                playerStrikes.textContent = `Страйки: ${counter.strike}`
        }
        counter.bite = false
        if (counter.strike === 5) {
                alert('Игра окончена')
                counter.resetStrikes()
                counter.resetPoints()
                let playerScore = document.querySelector("[data-id=strikes]")
                playerScore.textContent = `Очки: ${counter.count}`
                let playerStrikes = document.querySelector("[data-id=score]")
                playerStrikes.textContent = `Страйки: ${counter.strike} `
        }
        const elemInDom = document.querySelector('.goblin')
        elemInDom.remove()
    }
function addHover(imgEl) {
        imgEl.addEventListener('mouseover', () => {
                document.body.style.cursor = "crosshair"
        })
        imgEl.addEventListener('mouseleave', () => {
                document.body.style.cursor = "auto"

        })
}

