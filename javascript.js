const myGameboard = { 
    gameboard: [],
    createGameboard: function () {
        const columns = 6;
        const rows = 6;
            for (i = 0; i < columns; i++) {
                gameboard[i] = [];
                for (j = 0; j < rows; j++) {
                    gameboard.push(createCell());
                };
            };
    }
};