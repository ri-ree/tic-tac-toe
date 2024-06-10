const myGameboard = { 
    createGameboard: function() {
        const gameboard = [];
        const rows = 6;
        const columns = 6;
            for (i = 0; i < rows; i++) {
                gameboard[i] = [];
                for (j = 0; j < columns; j++) {
                    gameboard[i].push(myGameboard.createCell());
                };
            };
        const getTheBoard = () => gameboard;

        const makeAMove = (row, column, player) => {
            gameboard[row][column].yourMove(player);
        };

        const printTheBoard = () => {
            const theCells = gameboard.map((row) => row.map((cell) => cell.getValue()));
            console.log(theCells);
        };

        return { getTheBoard, makeAMove, printTheBoard };
    },

    createCell: function() {
        let playerMove;
        const makeAMove = (player) => {
            playerMove = player;
        };

        const getValue = () => playerMove;

        return { makeAMove, getValue };
    }

};

const { gameboard, cell } = myGameboard;
console.log(gameboard);
console.log(cell);

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
        const theBoard = gameboard;
        const gamePlayers = [];
        gamePlayers.push(thePlayers);

        let currentPlayer = gamePlayers[0];

        const changeCurrentPlayer = () => {
            currentPlayer = currentPlayer === gamePlayers[0] ? gamePlayers[1] : gamePlayers[0];
        };

        const getCurrentPlayer = () => currentPlayer;

        const printRound = () => {
            theBoard.gameboard.printTheBoard();
            console.log(`${getCurrentPlayer().name}'s turn.`);
        };
    }
};