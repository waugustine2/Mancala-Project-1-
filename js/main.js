/*----- constants -----*/
const player = {
    '1' : 'blue',
    '-1' : 'yellow'
};



/*----- app's state (variables) -----*/
let turn;
let moves;
let scores;
let stones;

/*----- cached element references -----*/
const pockets = document.querySelectorAll('.pocket');
const message = document.getElementById('message')
const playGame = document.getElementById('play')

/*----- event listeners -----*/
document.querySelector('board').addEventListener('click', handleMove);
document.querySelector('play').addEventListener('click', init);
document.querySelector('message').addEventListener('click', dispMsg);
document.querySelector('rules').addEventListener('click', dispRules)

/*----- functions -----*/
init();

render() {
    renderStones();
    ;
}