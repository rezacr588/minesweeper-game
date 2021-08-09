// Logic

// Build two dimensions grid
export function createBoard(boardSize, numberOfMines) {
  const boards = []

  for (let x = 0; x < boardSize; x++) {
    const row = []
    for (let y = 0; y < boardSize; y++) {
      const tile = {
        x , y
      }
      row.push(tile)
    }
    boards.push(row)
  }
  return boards
}