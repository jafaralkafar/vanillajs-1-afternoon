// console.log('test')
let board = []
let showReset = document.getElementById('reset-button')


function play(clickedId) {
    let playerChoice = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    let gameOver = false
    

    if (playerChoice.innerText === 'X' && gameOver === false) {
        playerChoice.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else if (playerChoice.innerText === 'O' && gameOver === false) {
        playerChoice.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)

    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let middleLeft = board[3]
    let middleCenter = board[4]
    let middleRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]

    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }
    if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner`)
        gameOver = true
        return showReset.style.display = "block"
    }


    let boardFull = true
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
            boardFull = false
        } 
        
    

    }
    if (boardFull === true) {
        alert("You both lose to the Cat")
        gameOver = true
        showReset.style.display = "block"
        console.log(showReset.style.display)
        
    }
}

function resetBoard() {
    location.reload()
}
