/*const myGameboard = { 
    createGameboard: function() {
        const gameboard = [];
        const rows = 6;
        const columns = 6;
            for (let i = 0; i < rows; i++) {
                gameboard[i] = [];
                for (let j = 0; j < columns; j++) {
                    gameboard[i].push(myGameboard.createCell());
                };
            };
        const getTheBoard = () => gameboard;

        const chooseYourMove = (row, column, player) => {
            gameboard[row][column].makeAMove(player);
        };

        const printTheBoard = () => {
            const createCells = myGameboard.createCell();
            const getTheValue = myGameboard.createCell().getValue();
            const theCells = gameboard.map((row) => row.map((cell) => cell.createCells.getTheValue));
            console.log(theCells);
        };

        return { getTheBoard, chooseYourMove, printTheBoard };
    },

    createCell: function() {
        let playerMove = 0;
        const makeAMove = (player) => {
            playerMove = player;
        };

        const getValue = () => playerMove;

        return { makeAMove, getValue };
    }

};

const { gameboard, cell } = myGameboard.createGameboard();

const thePlayers = {
    createPlayer: function(name) {
        let i = 1;
        let playerNumber = i;
        i++;
        return { name, playerNumber };
    }
};

const { playerName } = thePlayers;

const theGame = {
    controlGameFlow: function(...playerName) {
        const theBoard = myGameboard.createGameboard();
        const gamePlayers = [];
        gamePlayers.push(thePlayers);

        let currentPlayer = gamePlayers[0];

        const changeCurrentPlayer = () => {
            currentPlayer = currentPlayer === gamePlayers[0] ? gamePlayers[1] : gamePlayers[0];
        };

        const getCurrentPlayer = () => currentPlayer;

        const printRound = () => {
            theBoard.printTheBoard();
            console.log(`${getCurrentPlayer().name}'s turn.`);
        };

        const playNewRound = (row, column) => {
            theBoard.myGameboard.createGameboard().chooseYourMove(row, column, getCurrentPlayer().playerNumber);

            changeCurrentPlayer();
            printRound();
        };

        printRound();

        return { playNewRound, getCurrentPlayer };
    }
};

theGame.controlGameFlow();

thePlayers.createPlayer("John");
thePlayers.createPlayer("Amanda");
console.log(thePlayers);

const game = myGameboard.createGameboard();
game.chooseYourMove(1, 1, "hi");*/

const gameboard = [];

function createGameboard() {
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameboard[i][j] = "";
        };
    };

    return gameboard;
};

createGameboard();

console.table(gameboard);

function choosePlayer(firstPlayer, secondPlayer) {
    firstPlayer = 1;
    secondPlayer = 2;
    let currentPlayer;

    if (firstPlayer < secondPlayer) {
        currentPlayer = firstPlayer;
        console.log(`${firstPlayer}'s turn.`);
        firstPlayer++;
    } else {
        currentPlayer = secondPlayer;
        console.log(`${secondPlayer}'s turn.`);
        secondPlayer++;
    };

    return currentPlayer;

};


function choosePlayerMove(row, column, move) {
    gameboard[row][column] = move;
    console.table(gameboard);
};

choosePlayerMove(1, 2, "X");

choosePlayerMove(0, 1, "O");