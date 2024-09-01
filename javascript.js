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

            /*const endGame = () => {

                return function () {*/

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
                /*thePlayers.createPlayer().deletePlayers();*/
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
                /*thePlayers.createPlayer().deletePlayers();*/
                console.table(gameboard);
                i = 1;
                j = 2;
            };
        /*};
        }*/

        /*const startGame = () => {

            return function (firstPlayer, secondPlayer) {*/

            if (i < j && firstPlayer !== undefined && firstPlayer !== "" && secondPlayer !== undefined && secondPlayer !== "") {
                i++;
                currentPlayer = firstPlayer;
                console.log(`${firstPlayer}'s turn.`);
                console.log(i);
                console.log(j);
                console.log(currentPlayer);
                return currentPlayer;
            } else if (i === j && firstPlayer !== undefined && firstPlayer !== "" && secondPlayer !== undefined && secondPlayer !== "") {
                j++;
                currentPlayer = secondPlayer;
                console.log(`${secondPlayer}'s turn.`);
                console.log(i);
                console.log(j);
                console.log(currentPlayer);
                return currentPlayer;
            };

        }
    }
}

        /*return { startGame, endGame };
}
}*/


const choosePlayerTurn = gameController.choosePlayer();

/*const startTheGame = gameController.choosePlayer().startGame();
const endTheGame = gameController.choosePlayer().endGame();*/


const thePlayers = {
    createPlayer: function() {

        let firstPlayer;
        let secondPlayer;

        /*const deletePlayers = () => {
            firstPlayer = undefined;
            secondPlayer = undefined;
        }*/

        function createThePlayers() {

            return function (num, name) {

                /*if (firstPlayer === undefined || firstPlayer === '' && secondPlayer === undefined || secondPlayer === '') {*/
                if (num === 1 && name !== undefined && name !== '') {
                    firstPlayer = name;
                    /*console.log(num);
                    console.log(firstPlayer);
                    console.log(secondPlayer);*/
                    /*return firstPlayer;*/
                /*} else if (firstPlayer !== undefined || firstPlayer !== '' && secondPlayer === undefined || secondPlayer == '') {*/
                } else if (num === 2 && name !== undefined && name !== '') {
                    secondPlayer = name;
                    /*console.log(num);
                    console.log(firstPlayer);
                    console.log(secondPlayer);*/
                    /*choosePlayerTurn(firstPlayer, secondPlayer);*/
                    /*return secondPlayer;*/
                } else if (num === undefined || num === '') {
                    firstPlayer = undefined;
                    secondPlayer = undefined;
                    /*console.log(firstPlayer);
                    console.log(secondPlayer);*/
                }
            };
        }

            const chooseYourMove = (row, column, move) => {
                gameboard[row][column] = move;
                console.table(gameboard);
                choosePlayerTurn(firstPlayer, secondPlayer);
                /*startTheGame(firstPlayer, secondPlayer);*/
            };
        
            return { chooseYourMove,/* deletePlayers,*/ createThePlayers };
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
            console.log(gameNumber);

            buttonOne.addEventListener('click', () => {
            playerOne = firstPlayer.value;
            /*firstPlayer.value = '';*/
            /*createTurns(playerOne);*/
            /*thePlayers.createPlayer().createThePlayers(playerOne);*/
            createTurns(1, playerOne);
            firstPlayer.style.background = "lightgray";
            /*console.log(playerOne);
            console.log(playerTwo);*/
                if (playerOne !== undefined && playerOne !== "" && playerTwo !== undefined && playerTwo !== "") {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                    choosePlayerTurn(playerOne, playerTwo);
                    /*startTheGame(playerOne, playerTwo);*/
                    console.log("hi");
                }
            firstPlayer.value = '';
            },
            {once:true});
    
            buttonTwo.addEventListener('click', () => {
            playerTwo = secondPlayer.value;
            /*secondPlayer.value = '';*/
            /*createTurns(playerTwo);*/
            /*thePlayers.createPlayer().createSecondPlayers(playerTwo);*/
            createTurns(2, playerTwo);
            secondPlayer.style.background = "lightgray";
            /*console.log(playerOne);
            console.log(playerTwo);*/
                if (playerOne !== undefined && playerOne !== "" && playerTwo !== undefined && playerTwo !== "") {
                    playerTurn.textContent = `${playerOne}'s turn.`;
                    choosePlayerTurn(playerOne, playerTwo);
                    /*startTheGame(playerOne, playerTwo);*/
                    console.log("hello");
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

                                /*createTurns().chooseYourMove(i, j, playerMove);*/
                                thePlayers.createPlayer().chooseYourMove(i, j, playerMove);
                                board.textContent = playerMove;

                                if (winnerMessage.textContent === '') {
                                    choosePlayerTurn(playerOne, playerTwo);
                                    /*startTheGame(playerOne, playerTwo);
                                    endTheGame();*/
                                } else {
                                    playerOne = undefined;
                                    playerTwo = undefined;
                                    /*console.log(playerOne);
                                    console.log(playerTwo);*/
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