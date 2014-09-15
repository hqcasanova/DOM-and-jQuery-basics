/* For a given team, each cell's state is represented by a single bit in a 9-bit digit: 0 unoccupied, 1 taken. 
Thus, 2 separate digits represent the entire board's state. After each turn, the corresponding bit is set and 
the resulting 9-bit digits are compared (bitwise) against the winning binary combinations. Hence the base-2 nature 
of such combinations. Based partially on: http://jsfiddle.net/5wKfF/139/ */

/****** VARIABLES ******/ 
var msgElem = document.getElementById('winner'),        //DOM element for winning text message
    modalElem = document.getElementById('modal'),       //DOM element for modal message window
    winValues = [7, 56, 73, 84, 146, 273, 292, 448],    //winning binary combinations
    cells,                                              //array of td elements
    crosses = 0,                                        //9-bit binary representation of crossed cells
    noughts = 0,                                        //9-bit binary representation of nought'ed cells
    turn = 0,                                           //number of turn (9 max)
    i = 0;                                              //plain old counter

/****** FUNCTIONS ******/

/* Handles event on modal window: closes window and resets game */
function closeModal() {
    this.style.display = 'none';
    reset();
}

/* Handles hover on cell: it adds a class corresponding to the turn */
function cellEnter() {
    if (turn % 2 == 0) {
        this.className = 'cross';
    } else {
        this.className = 'nought';
    }
}

/* Handles exit from hover: removes the turn-related class */
function cellLeave() {
    this.className = '';
}

/* Handles click on a cell: sets corresponding bit in 9-digit representation and prevents further interaction */
function cellClick() {
    this.className = '';
    if (turn % 2 == 0) {
        this.textContent = 'X';
        crosses = crosses | parseInt(this.id);
    } else {
        this.textContent = 'O';
        noughts = noughts | parseInt(this.id);
    }   
    turn += 1;
    this.removeEventListener('click', arguments.callee);
    this.removeEventListener('mouseenter', cellEnter);
    this.removeEventListener('mouseleave', cellLeave);
}

/* Checks if any of the current bit representations is a winning binary combination */
function isWin(score) {
    var i = 0;
    for (i; i < 9; i += 1) {
        if ((winValues[i] & score) === winValues[i]) {
            return true; 
        }
    }
    return false;
}    

/* Zeros the 9-bit representation for bot crosses and noughts, clears the board and re-enables clicking for 
previously occupied cells */
function reset() {
    var i = 0;

    noughts = 0;
    crosses = 0;
    turn = 0;
    for (i; i < 9; i += 1) {
        if (cells[i].textContent != '') {
            cells[i].textContent = '';
            cells[i].addEventListener('click', cellClick);
            cells[i].addEventListener('mouseenter', cellEnter);
            cells[i].addEventListener('mouseleave', cellLeave);
        }
    }
}

/* Checks if the game has finished, notifying who won */
function checkWin(event) {
    if (isWin(crosses)) {
        gameOver("X wins!");
    } else if (isWin(noughts)) {
        gameOver("O wins!");
    } else if (turn == 9) {
        gameOver("It's a draw!");
    }
}

/* Shows a modal message notifying who is the winner */
function gameOver(msg) {
    msgElem.textContent = msg;
    modalElem.style.display = 'block';
}

/****** DOM CONTEXT ******/

/* Enables clicking for all cells */
cells = document.getElementsByTagName('td');
for (i; i < 9; i += 1) {
    cells[i].addEventListener('click', cellClick);
    cells[i].addEventListener('mouseenter', cellEnter);
    cells[i].addEventListener('mouseleave', cellLeave);
}

/* Enables end of game detection and closing of modal message by clicking */
document.body.onclick = checkWin;
document.getElementById('modal').addEventListener('click', closeModal);