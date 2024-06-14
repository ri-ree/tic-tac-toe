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

/* function controlGameFlow() { */

let firstPlayer = 'First player';
let secondPlayer = 'Second player';

let i = 1;
let j = 2;
let currentPlayer;


    function choosePlayer() {

        /*When objects, will use player.number or something of the sort*/


        if (gameboard[0][0] !== "" && gameboard[0][0] === gameboard[0][1] && gameboard[0][1] !== "" && gameboard[0][0] === gameboard[0][2] && gameboard[0][2] !== "" ||
            gameboard[1][0] !== "" && gameboard[1][0] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[1][0] === gameboard[1][2] && gameboard[1][2] !== "" ||
            gameboard[2][0] !== "" && gameboard[2][0] === gameboard[2][1] && gameboard[2][1] !== "" && gameboard[2][0] === gameboard[2][2] && gameboard[2][2] !== "" ||
            gameboard[0][0] !== "" && gameboard[0][0] === gameboard[1][0] && gameboard[1][0] !== "" && gameboard[0][0] === gameboard[2][0] && gameboard[2][0] !== "" ||
            gameboard[0][1] !== "" && gameboard[0][1] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][1] === gameboard[2][1] && gameboard[2][1] !== "" ||
            gameboard[0][2] !== "" && gameboard[0][2] === gameboard[1][2] && gameboard[1][2] !== "" && gameboard[0][2] === gameboard[2][2] && gameboard[2][2] !== "" ||
            gameboard[0][0] !== "" && gameboard[0][0] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][0] === gameboard[2][2] && gameboard[2][2] !== "" ||
            gameboard[0][2] !== "" && gameboard[0][2] === gameboard[1][1] && gameboard[1][1] !== "" && gameboard[0][2] === gameboard[2][0] && gameboard[2][0] !== "") {
            console.log(`${currentPlayer} wins!`);
            i = 1;
            j = 2;
        };

        if (i < j) {
            currentPlayer = firstPlayer;
            console.log(`${firstPlayer}'s turn.`);
            i++;
        } else if (i >= j) {
            currentPlayer = secondPlayer;
            console.log(`${secondPlayer}'s turn.`);
            j++;
        };
        
        console.log(i);
        console.log(j);
        console.log(currentPlayer);

        return currentPlayer;
    };

    choosePlayer();

/* }; */


function choosePlayerMove(row, column, move) {
    gameboard[row][column] = move;
    console.table(gameboard);
    choosePlayer();
};

/* controlGameFlow(); */