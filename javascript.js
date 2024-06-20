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

        return currentPlayer;

        };

    }
}


let choosePlayerTurn = gameController.choosePlayer();


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

let createTurns = thePlayers.createPlayer();

const displayLogic {
};