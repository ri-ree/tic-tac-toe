const myGameboard = {
    createGameboard: function() {

    const gameboard = [];

    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameboard[i][j] = "";
        };
    };

    const getTheBoard = () => gameboard;

    console.table(gameboard);

    return { getTheBoard };

    }
}


const gameboard = myGameboard.createGameboard().getTheBoard();


const gameController = {
    choosePlayer: function() {

        let i = 1;
        let j = 2;
        let currentPlayer;

        function resetGame() {
            for(let i = 0; i < gameboard.length; i++) {
                for(let j = 0; j < gameboard[i].length; j++) {
                    gameboard[i][j] = "";
                };
            };
        };

        return function(firstPlayer, secondPlayer) {

            if (gameboard[0][0] !== "" && gameboard[0][0] === gameboard[0][1] && gameboard[0][1] !== "" && gameboard[0][0] === gameboard[0][2] && gameboard[0][2] !== "" ||
                gameboard[1][0] !== "" && gameboard[1][0] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[1][0] === gameboard[1][2] && gameboard[1][2] !== "" ||
                gameboard[2][0] !== "" && gameboard[2][0] === gameboard[2][1] && gameboard[2][1] !== "" && gameboard[2][0] === gameboard[2][2] && gameboard[2][2] !== "" ||
                gameboard[0][0] !== "" && gameboard[0][0] === gameboard[1][0] && gameboard[1][0] !== "" && gameboard[0][0] === gameboard[2][0] && gameboard[2][0] !== "" ||
                gameboard[0][1] !== "" && gameboard[0][1] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][1] === gameboard[2][1] && gameboard[2][1] !== "" ||
                gameboard[0][2] !== "" && gameboard[0][2] === gameboard[1][2] && gameboard[1][2] !== "" && gameboard[0][2] === gameboard[2][2] && gameboard[2][2] !== "" ||
                gameboard[0][0] !== "" && gameboard[0][0] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][0] === gameboard[2][2] && gameboard[2][2] !== "" ||
                gameboard[0][2] !== "" && gameboard[0][2] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][2] === gameboard[2][0] && gameboard[2][0] !== "") {
                console.log(`${currentPlayer} wins!`);
                resetGame();
                getDisplay().gameWinner(`${currentPlayer} wins!`);
                console.table(gameboard);
                i = 1;
                j = 2;

            } else if (gameboard[0][0] !== "" && gameboard[0][1] !== "" && gameboard[0][2] !== ""
                    && gameboard[1][0] !== "" && gameboard[1][1] !== "" && gameboard[1][2] !== ""
                    && gameboard[2][0] !== "" && gameboard[2][1] !== "" && gameboard[2][2] !== "") {
                console.log("A tie!");
                resetGame();
                getDisplay().gameWinner("A tie!");
                console.table(gameboard);
                i = 1;
                j = 2;
            };


            if (i < j) {
                i++;
                currentPlayer = firstPlayer;
                console.log(`${firstPlayer}'s turn.`);
                console.log(i);
                console.log(j);
                console.log(currentPlayer);
            } else if (i === j) {
                j++;
                currentPlayer = secondPlayer;
                console.log(`${secondPlayer}'s turn.`);
                console.log(i);
                console.log(j);
                console.log(currentPlayer);
            };

        };

    }
}


const choosePlayerTurn = gameController.choosePlayer();


const thePlayers = {
    createPlayer: function() {

            let firstPlayer;
            let secondPlayer;

            return function(name) {

            if (firstPlayer === undefined && secondPlayer === undefined) {
                firstPlayer = name;
                console.log(firstPlayer);
                console.log(secondPlayer);
            } else if (firstPlayer !== undefined && secondPlayer === undefined) {
                secondPlayer = name;
                console.log(firstPlayer);
                console.log(secondPlayer);
                choosePlayerTurn(firstPlayer, secondPlayer);
            };

            const chooseYourMove = (row, column, move) => {
                gameboard[row][column] = move;
                console.table(gameboard);
                choosePlayerTurn(firstPlayer, secondPlayer);
            };
        
            return { chooseYourMove };
        }
    }
};

const createTurns = thePlayers.createPlayer();

const displayLogic = {
    createBoard: function () {
        const container = document.querySelector('#container');
        const playerTurn = document.querySelector('#player-turn');
        const buttonOne = document.querySelector('#btn-one');
        const buttonTwo = document.querySelector('#btn-two');
        const winnerMessage = document.querySelector('#winner');
        let firstMove = 1;
        let secondMove = 2;
        let playerMove;
        let playerOne;
        let playerTwo;
        let k = 0;

        return function () {

            k++;
            console.log(k);

            buttonOne.addEventListener('click', () => {
            playerOne = document.getElementById('player-one').value;
            createTurns(playerOne);
                if (playerOne !== undefined && playerTwo !== undefined) {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                }
            });
    
            buttonTwo.addEventListener('click', () => {
            playerTwo = document.getElementById('player-two').value;
            createTurns(playerTwo);
                if (playerOne !== undefined && playerTwo !== undefined) {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                }
            });

            function display() {
            
                for (let i = 0; i < gameboard.length; i++) {
                    for (let j = 0; j < gameboard[i].length; j++) {

                        let board = document.createElement('div');
                        board.style.border = "1px solid black";

                        board.addEventListener("click", () => {

                            if (board.textContent === '') {
                                if (firstMove < secondMove) {
                                    playerMove = 'X';
                                    firstMove++;
                                    playerTurn.textContent = `${playerTwo}'s turn.`;
                                } else if (firstMove === secondMove) {
                                    playerMove = 'O';
                                    secondMove++;
                                    playerTurn.textContent = `${playerOne}'s turn.`;
                                };

                                createTurns().chooseYourMove(i, j, playerMove);
                                board.textContent = playerMove;

                            };

                        });

                        container.appendChild(board);
                    };

                };
            };

            if (k <= 1) { display(); };

            const gameWinner = (hel) => {
                winnerMessage.textContent = hel;
            };

            return { gameWinner };

        }

    }
};

const getDisplay = displayLogic.createBoard();
getDisplay();