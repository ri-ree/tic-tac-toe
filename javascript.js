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
console.log(gameboard);

/* function controlGameFlow() { */

let firstPlayer = 'First player';
let secondPlayer = 'Second player';

function resetGame() {
    for(let i = 0; i < gameboard.length; i++) {
        for(let j = 0; j < gameboard[i].length; j++) {
            gameboard[i][j] = "";
        };
    };
};


const gameController = {
    choosePlayer: function() {

        /*When objects, will use player.number or something of the sort*/

    let i = 1;
    let j = 2;
    let currentPlayer;

    return function() {


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
            console.table(gameboard);
            i = 1;
            j = 2;

        } else if (gameboard[0][0] !== "" && gameboard[0][1] !== "" && gameboard[0][2] !== ""
                && gameboard[1][0] !== "" && gameboard[1][1] !== "" && gameboard[1][2] !== ""
                && gameboard[2][0] !== "" && gameboard[2][1] !== "" && gameboard[2][2] !== "") {
            console.log("A tie!");
            resetGame();
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

        return currentPlayer

        };

    }
}

let choosePlayerTurn = gameController.choosePlayer();
choosePlayerTurn();

const chooseYourMove = (row, column, move) => {
    gameboard[row][column] = move;
    console.table(gameboard);
    choosePlayerTurn();
};


/* }; */



/* controlGameFlow(); */