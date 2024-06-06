const myGameboard = { 
    createGameboard: function () {
        const gameboard = [];
        const rows = 6;
        const columns = 6;
            for (i = 0; i < rows; i++) {
                gameboard[i] = [];
                for (j = 0; j < columns; j++) {
                    gameboard[i].push(createCell());
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
    }
};

const theGame = {
};

const thePlayers = {
};