class TicTacToe {
  constructor() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    this.currentPlayerSymbol = "x"; // x is always the first
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex] !== null) {
      return "The cell is not empty";
    } // if the cell is not empty
    this.board[rowIndex][columnIndex] = this.currentPlayerSymbol; //place the symbol in the cell
    this.currentPlayerSymbol = this.currentPlayerSymbol === "x" ? "o" : "x"; // change the player
  }

  isFinished() {
    // if there's a winner or no more turns => return true, else false
    return this.isWinner("x") || this.isWinner("o") || this.noMoreTurns();
  }

  isWinner(symb) {
    return this.board[0].every(cell => cell === symb) || // first row
    this.board[1].every(cell => cell === symb) || // second row
    this.board[2].every(cell => cell === symb) || // third row
    (this.board[0][0] === symb &&
      this.board[1][0] === symb &&
      this.board[2][0] === symb) || // 1st column
    (this.board[0][1] === symb &&
      this.board[1][1] === symb &&
      this.board[2][1] === symb) || // 2nd column
    (this.board[0][2] === symb &&
      this.board[1][2] === symb &&
      this.board[2][2] === symb) || // 3d column
    (this.board[0][0] === symb &&
      this.board[1][1] === symb &&
      this.board[2][2] === symb) || // main diagonal
      (this.board[2][0] === symb &&
        this.board[1][1] === symb &&
        this.board[0][2] === symb) // 2nd diagonal
      ? true
      : false;
  }

  getWinner() {
    //should return winner of the game or null
    if (this.isWinner("x")) return "x";
    else if (this.isWinner("o")) return "o";
    else return null;
  }

  noMoreTurns() {
    //if there's no null in the board, return true, else false
    return (
      this.board[0].every(cell => cell !== null) && // first row
      this.board[1].every(cell => cell !== null) && // second row
      this.board[2].every(cell => cell !== null)    // third row
    );
  }

  isDraw() {
    //should return false if game is not finished or there is a winner, and true if it is a draw'
    return !this.isFinished() || this.isWinner("x") || this.isWinner("o")
      ? false
      : true;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
