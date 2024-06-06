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
            board[row][column].yourMove(player);
        };
    }
};

const theGame = {
};

const thePlayers = {
};