const X = "X";
const O = "O";
const N = 5;
const WINNER_O = "OW",
  WINNER_X = "XW",
  TIE = "XO";
const getInitialBoard = () =>
  Array(N)
    .fill("")
    .map((v) => [...Array(N).fill("")]);

const initialTurn = X;

const blocks = Array.from(document.getElementsByClassName("block"));
const turnDisplay = document.getElementById("turn");
const winnerDisplay = document.getElementById("winner");
const undoBtn = document.getElementById("undo");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");

let board = getInitialBoard();
let turn = initialTurn;
let undoCounter = 0;

const canFillBlock = (row, col) => {
  // todo: return a boolean if the (row, col) is free to fill.
};

const fillBlock = (block, row, col) => {
  // todo: fill block (DOM).
  // todo: fill board.
  // hint: fill with which turn?
};

const toggleTurn = () => {
  // todo: change turn.
  // todo: change turnDisplay.
};

const announceResult = (type) => {
  switch (type) {
    case WINNER_X:
      // todo: set result message (DOM)
      break;
    case WINNER_O:
      // todo: set result message (DOM)
      break;
    case TIE:
      // todo: set result message (DOM)
      break;
  }
  // todo: show the winner.
  // hint: check of winnerDisplay.
};

const isTied = () => {
  //   const n_playedRounds = // todo: calculate number of played rounds by board.
  if (n_playedRounds === N * N) return true;
  return false;
};

const getWinner = () => {
  // todo: check if the we have a winner.
  // todo: find the winner.
  // todo: return an object with ("hasWinner":boolean) and ("winner": X | O | null) keys.
  // sample output
  // -> return {
  //     hasWinner: false,
  //     winner: X,
  //   };
};

const handleBlockClick = (block, row, col) => {
  if (canFillBlock(row, col)) {
    fillBlock(block, row, col);
    const { hasWinner, winner } = getWinner();
    if (hasWinner) {
      announceResult(winner === X ? WINNER_X : WINNER_O);
      setTimeout(resetBoard, 2000);
      return;
    }
    if (isTied()) {
      announceResult(TIE);
      setTimeout(resetBoard, 2000);
      return;
    }
    toggleTurn();
  }
};

const resetBoard = () => {
  board = getInitialBoard();
  turn = initialTurn;
  // todo: reset blocks (DOM)
  // todo: reset turnDisplay (DOM)
  // todo: reset winnerDisplay (DOM)
};

const handleSaveGame = () => {
  // todo: saving game state functionality
}

const handleLoadGame = () => {
  // todo: load saved game
}

const handleUndoClick = () => {
  // todo: undo functionality logic
}

// DO NOT DELETE THIS CODE BLOCK
blocks.forEach((block, index) => {
  //   const row = // todo: calculate row of block by index
  //   const col = // todo: calculate column of block by index
  block.addEventListener("click", () => handleBlockClick(block, row, col));
});

undoBtn.addEventListener("click", handleUndoClick);
saveBtn.addEventListener("click", handleSaveGame);
loadBtn.addEventListener("click", handleLoadGame);