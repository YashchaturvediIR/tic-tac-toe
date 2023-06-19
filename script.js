const board = ['', '', '', '', '', '', '', '', '']; //an expty array
let currentPlayer = 'X'; //let currentplayer is x
let gameOver = false; //boolean set to false letter we will true it with conditions



function makeMove(index) {   //imp function of the game 
    if (!gameOver && board[index] === '') {  //simple condn
        board[index] = currentPlayer;
        const cell = document.getElementsByClassName('cell')[index];
        cell.innerText = currentPlayer; //updating in  frontend
        cell.classList.add(currentPlayer); //tracking the class and updating it with the currentPlayer 

        if (checkWin(currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            gameOver = true; //boolean is changed here
        } else if (board.every(cell => cell !== '')) { //if every cell is not empty
            alert("It's a draw!");
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //now it will replace the chance 
        }
    }
}



function checkWin(player) { //func which player wins
    const winCombinations = [ //an array of winning combinations
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winCombinations) { //here let combination act as an iterator 'i'
        if ( //this will check if all three index are of same player
            board[combination[0]] === player &&
            board[combination[1]] === player &&
            board[combination[2]] === player 
        ) {
            return true; //it wins so it returns true
        }
    }

    return false;
}

function resetGame() { //func for reset game
    board.fill(''); //filled with empty string
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) { //again here cell act as an iterator 'i'
        cell.innerText = ''; //added empty string in all cells
    }
    currentPlayer = 'X'; //it resets currentPlayer to 'X' which is default
    gameOver = false; //boolean flags false
}
