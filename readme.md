
# 2048 Game

This is a simple implementation of the popular game 2048.

## How to Play

1. Open [`2048.html`](2048.html) in your web browser.
2. Click the "play" button to start the game.
3. Use the arrow keys to move the tiles. Tiles with the same number merge into one when they touch.
4. Add tiles to reach the 2048 tile!

## Game Features

- Customizable board size: At the start of the game, you will be prompted to enter the number of rows and columns for the game board.
- Keyboard controls: Use the arrow keys to move the tiles up, down, left, or right.
- Game over detection: The game ends when there are no legal moves left.

## Code Overview

The game logic is implemented in JavaScript in the [`2048.js`](2048.js) file. The game board is represented as a 2D array, and the game logic includes functions for starting the game, building the game board, moving the tiles, and checking if the game is over.

The game's appearance is controlled by the CSS in the [`style.css`](style.css) file.