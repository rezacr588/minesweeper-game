import { createBoard } from "./minesweeper.js"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)

const boardElement = document.querySelector(".board")

board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
  })
})

boardElement.style.setProperty("--size",BOARD_SIZE)

// 2. Left click on tiles
  // a. Reveal tiles
// 3. Right click on tiles
  // a. Mark tiles
// 4. check for win/lose