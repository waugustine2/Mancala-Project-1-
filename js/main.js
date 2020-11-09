/*----- constants -----*/
const player = {
    '1' : 'blue',
    '-1' : 'yellow'
};

/*----- app's state (variables) -----*/
let turn;
let board;
let scores;

/*----- cached element references -----*/
const pockets = document.querySelectorAll('.pocket');
const message = document.getElementById('message')
const playGame = document.getElementById('play');

/*----- event listeners -----*/
document.querySelector('.board').addEventListener('click', handleMove);
document.querySelector('play').addEventListener('click', init);
document.querySelector('message').addEventListener('click', dispMsg);
document.querySelector('rules').addEventListener('click', dispRules);


/*----- functions -----*/
init();

function handleMove(evt) {
    //Check if valid move (own side + has stones)
    //Get ID of move
    let idx = parseInt(evt.target.id.replace('pkt' , ''));
    //If valid
    //run move logic
    moves();
    //render updates changes
    render();
};

function moves() {
    //push stone over counter-clockwise deposit one in each pocket
    //If pass own Mancala depsoit one stone
    //Do not put one in opponents pocket
    //if turn !== 

    //If last stone depsoited in own Mancala retake turn and display message
    //Check for game over status (one side out of stones)
    gameOver();
    //otherwise update scores and turn
};

function gameOver() {
    //checks if one side of board no longer has stones (no value if row summed accross)
    if(sum === 0) {
        for (i=1; i<=6; i++) {
        sum += board[i];
        };
     return true;
    }
    if(sum === 0) {
        for (i=7; i<=12; i++) {
        sum += board[i];
        };
        return true;
    };
    //if so then adds other player's stones to their Mancala
    finalStones();
    //if so then checks for winner
    checkWinner();
};

function finalStones() {

};

function checkWinner() {
    //check if player 1 or two won
    let winner = scores[0] > scores[1] ? 1 : -1;

    //update dispMsg to say which player won

    //play winning sound FX
};

function render() {
    board.forEach(function(pkt, idx) {
        pockets[idx].style.background = lookup[pkt];
    })
};

function dispMsg() {};

function dispRules() {};

function init() {
    turn = 1;
    scores = [board[0],board[13]];
    //render board with # of stones in pockets
    board = [
        0, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 0,
    ];
    render();
};