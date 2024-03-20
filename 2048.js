var rows, cols, tor = 0; 
var cellValue;
var board = []; // Declare board in the global scope

function startGame() {
    board = [];
    rows = +prompt("Enter numbers of rows: "); 
    cols = +prompt("Enter numbers of cols: "); 

    var row = [];
    var rows2 = rows, cols2 = cols;
    while (cols2--) row.push(0);
    while (rows2--) board.push(row.slice());

    addSquare();
    addSquare();

    buildBoard(board);
}

function buildBoard(board) {
    var numToShow = 0;
    var strToShow = "<table border='1'  align='center'>";

    for (var r = 0; r < rows; r++) {
        strToShow += "<tr>";
        for (var c = 0; c < cols; c++) {
            if(board[r][c] != 0){
                strToShow += "<td width='50' height='50'>" + board[r][c] + "</td>";
            }
            else
            {    
                strToShow += "<td width='50' height='50'>";
                strToShow += "</td>";
            }
            numToShow++;
        }
        strToShow += "</tr>";
    }
    strToShow += "</table>"; 
    document.getElementById("AP").innerHTML = strToShow;
}

// Add event listener for keydown event
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
    }
    addSquare();
    if (isGameOver()) {
        alert('Game over!');
        // make the pieces unmovable
        document.removeEventListener('keydown', function(event) {});
    }
});

// Function to handle movement when the up arrow key is pressed
function moveUp() {
    for(var i = 0; i < rows; i++)
    {
        for(var j = 0; j < cols; j++)
        {
            if(board[i][j] != 0)
            {
                if(i != 0 && (board[i-1][j] == 0 || board[i-1][j] == board[i][j]))
                {
                    var k = i;
                    while(k-1 >= 0 && board[k-1][j] == 0) // Corrected condition
                    {
                        k--;
                    }
                    if(k-1 >= 0 && board[k-1][j] == board[i][j]) // Check if k-1 is within bounds and if the elements are equal
                    {
                        board[k-1][j] *= 2;
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == 0) // Check if the element at the k index is zero
                    {
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    buildBoard(board);
}

// Function to handle movement when the down arrow key is pressed
function moveDown() {
    for(var i = rows-1; i >= 0; i--)
    {
        for(var j = cols-1; j >= 0; j--)
        {
            if(board[i][j] != 0)
            {
                if(i != rows-1 && (board[i+1][j] == 0 || board[i+1][j] == board[i][j]))
                {
                    var k = i;
                    while(k+1 < rows && board[k+1][j] == 0) // Corrected condition
                    {
                        k++;
                    }
                    if(k+1 < rows && board[k+1][j] == board[i][j]) // Check if k+1 is within bounds and if the elements are equal
                    {
                        board[k+1][j] *= 2;
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == 0) // Check if the element at the k index is zero
                    {
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    buildBoard(board);
}

// Function to handle movement when the left arrow key is pressed
function moveLeft() {
    for(var i = 0; i < rows; i++)
    {
        for(var j = 0; j < cols; j++)
        {
            if(board[i][j] != 0)
            {
                if(j != 0 && (board[i][j-1] == 0 || board[i][j-1] == board[i][j]))
                {
                    var k = j;
                    while(k-1 >= 0 && board[i][k-1] == 0) // Corrected condition
                    {
                        k--;
                    }
                    if(k-1 >= 0 && board[i][k-1] == board[i][j]) // Check if k-1 is within bounds and if the elements are equal
                    {
                        board[i][k-1] *= 2;
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == 0) // Check if the element at the k index is zero
                    {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    buildBoard(board);
}

// Function to handle movement when the right arrow key is pressed
function moveRight() {
    for(var i = rows-1; i >= 0; i--)
    {
        for(var j = cols-1; j >= 0; j--)
        {
            if(board[i][j] != 0)
            {
                if(j != cols-1 && (board[i][j+1] == 0 || board[i][j+1] == board[i][j]))
                {
                    var k = j;
                    while(k+1 < cols && board[i][k+1] == 0) // Corrected condition
                    {
                        k++;
                    }
                    if(k+1 < cols && board[i][k+1] == board[i][j]) // Check if k+1 is within bounds and if the elements are equal
                    {
                        board[i][k+1] *= 2;
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == 0) // Check if the element at the k index is zero
                    {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
    buildBoard(board);
}

function addSquare() {
    // add a 2 or 4 to a random empty square
    var emptySquares = [];
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (board[r][c] === 0) {
                emptySquares.push({r, c});
            }
        }
    }
    if (emptySquares.length === 0) {
        return;
    }
    var randomIndex = Math.floor(Math.random() * emptySquares.length);
    var randomSquare = emptySquares[randomIndex];
    var value = Math.random() < 0.9 ? 2 : 4;
    board[randomSquare.r][randomSquare.c] = value;
    buildBoard(board);
}

function isGameOver() {
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            // Check if there is an empty square
            if (board[r][c] === 0) {
                return false;
            }
            // Check for same value in adjacent squares (up, down, left, right)
            if (r > 0 && board[r][c] === board[r - 1][c]) {
                return false;
            }
            if (r < rows - 1 && board[r][c] === board[r + 1][c]) {
                return false;
            }
            if (c > 0 && board[r][c] === board[r][c - 1]) {
                return false;
            }
            if (c < cols - 1 && board[r][c] === board[r][c + 1]) {
                return false;
            }
        }
    }
    // If no empty squares and no adjacent squares with the same value, game is over
    return true;
}