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
                firstPlayer = undefined;
                secondPlayer = undefined;
                currentPlayer = undefined;
                console.table(gameboard);
                i = 1;
                j = 2;

            } else if (gameboard[0][0] !== "" && gameboard[0][1] !== "" && gameboard[0][2] !== ""
                    && gameboard[1][0] !== "" && gameboard[1][1] !== "" && gameboard[1][2] !== ""
                    && gameboard[2][0] !== "" && gameboard[2][1] !== "" && gameboard[2][2] !== "") {
                console.log("A tie!");
                resetGame();
                getDisplay().gameWinner("A tie!");
                firstPlayer = undefined;
                secondPlayer = undefined;
                currentPlayer = undefined;
                console.table(gameboard);
                i = 1;
                j = 2;
            };

            if (i < j && firstPlayer !== undefined && firstPlayer !== "" && secondPlayer !== undefined && secondPlayer !== "") {
                i++;
                currentPlayer = firstPlayer;
                console.log(`${firstPlayer}'s turn.`);
                return currentPlayer;
            } else if (i === j && firstPlayer !== undefined && firstPlayer !== "" && secondPlayer !== undefined && secondPlayer !== "") {
                j++;
                currentPlayer = secondPlayer;
                console.log(`${secondPlayer}'s turn.`);
                return currentPlayer;
            };

        }
    }
}

const choosePlayerTurn = gameController.choosePlayer();

const thePlayers = {
    createPlayer: function() {

        let firstPlayer;
        let secondPlayer;

        function createThePlayers() {

            return function (num, name) {

                if (num === 1 && name !== undefined && name !== '') {
                    firstPlayer = name;
                } else if (num === 2 && name !== undefined && name !== '') {
                    secondPlayer = name;
                } else if (num === undefined || num === '') {
                    firstPlayer = undefined;
                    secondPlayer = undefined;
                }
            };
        }

            const chooseYourMove = (row, column, move) => {
                gameboard[row][column] = move;
                console.table(gameboard);
                choosePlayerTurn(firstPlayer, secondPlayer);
            };
        
            return { chooseYourMove, createThePlayers };
    }
};

const createTurns = thePlayers.createPlayer().createThePlayers();

const displayLogic = {
    createBoard: function () {
        const container = document.querySelector('#container');
        const playerTurn = document.querySelector('#player-turn');
        const buttonOne = document.querySelector('#btn-one');
        const buttonTwo = document.querySelector('#btn-two');
        const winnerMessage = document.querySelector('#winner');
        const restartButton = document.querySelector('#restart-btn');
        const firstPlayer = document.getElementById('player-one');
        const secondPlayer = document.getElementById('player-two');
        let firstMove = 1;
        let secondMove = 2;
        let playerMove;
        let playerOne;
        let playerTwo;
        let gameNumber = 0;

        return function () {

            gameNumber++;

            buttonOne.addEventListener('click', () => {

            playerOne = firstPlayer.value;
            createTurns(1, playerOne);
            firstPlayer.style.background = "lightgray";

                if (playerOne !== undefined && playerOne !== "" && playerTwo !== undefined && playerTwo !== "") {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                    choosePlayerTurn(playerOne, playerTwo);
                }

            firstPlayer.value = '';

            },

            {once:true});
    
            buttonTwo.addEventListener('click', () => {

            playerTwo = secondPlayer.value;
            createTurns(2, playerTwo);
            secondPlayer.style.background = "lightgray";

                if (playerOne !== undefined && playerOne !== "" && playerTwo !== undefined && playerTwo !== "") {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                    choosePlayerTurn(playerOne, playerTwo);
                }

            secondPlayer.value = '';

            },

            {once:true});

            function display() {
            
                for (let i = 0; i < gameboard.length; i++) {
                    for (let j = 0; j < gameboard[i].length; j++) {

                        let board = document.createElement('div');
                        board.style.border = "1px solid black";

                        restartButton.addEventListener('click', () => {
                            createTurns();
                            firstPlayer.style.background = "white";
                            secondPlayer.style.background = "white";
                            playerOne = undefined;
                            playerTwo = undefined;
                            firstMove = 1;
                            secondMove = 2;
                            playerTurn.textContent = '';
                            winnerMessage.textContent = '';
                            for (let i = 0; i < gameboard.length; i++) {
                                for (let j = 0; j < gameboard[i].length; j++) {
                                    board.textContent = '';
                                }
                            };
                        });

                        board.addEventListener("click", () => {


                            if (board.textContent === '' && playerOne !== undefined && playerOne !== '' && playerTwo !== undefined && playerTwo !== '' && playerTurn.textContent !== '') {
                                if (firstMove < secondMove) {
                                    playerMove = 'X';
                                    firstMove++;
                                    playerTurn.textContent = `${playerTwo}'s turn.`;
                                } else if (firstMove === secondMove) {
                                    playerMove = 'O';
                                    secondMove++;
                                    playerTurn.textContent = `${playerOne}'s turn.`;
                                };

                                thePlayers.createPlayer().chooseYourMove(i, j, playerMove);
                                board.textContent = playerMove;

                                if (winnerMessage.textContent === '') {
                                    choosePlayerTurn(playerOne, playerTwo);
                                } else {
                                    playerOne = undefined;
                                    playerTwo = undefined;
                                };
                            };
                        });

                        container.appendChild(board);

                    };

                };
            };

            if (gameNumber <= 1) { display(); };

            const gameWinner = (message) => {
                winnerMessage.textContent = message;
                playerTurn.textContent = '';
            };

            return { gameWinner };

        }

    }
};

const getDisplay = displayLogic.createBoard();
getDisplay();