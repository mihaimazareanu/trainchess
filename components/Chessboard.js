import { ChessboardContainer, Square } from '@/styles/ChessboardStyles';
import React from 'react';

const Chessboard = ({ start }) => {
  const boardSize = 8; // the number of squares per row/column
  const squareSize = 350 / boardSize; // the size of each square in pixels
  const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // the letters corresponding to the column indices

  // Generate the chessboard squares
  const squares = [];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const isWhiteSquare = (i + j) % 2 === 0;
      const position = `${columnLetters[j]}${boardSize - i}`;
      const isStartSquare = start && position === start;
      const isKnightMove = start && (
        (Math.abs(columnLetters.indexOf(position[0]) - columnLetters.indexOf(start[0])) === 1 &&
        Math.abs(parseInt(position[1]) - parseInt(start[1])) === 2) ||
        (Math.abs(columnLetters.indexOf(position[0]) - columnLetters.indexOf(start[0])) === 2 &&
        Math.abs(parseInt(position[1]) - parseInt(start[1])) === 1));
      
        squares.push(<Square isWhiteSquare={isWhiteSquare} isStartSquare={isStartSquare} isKnightMove={isKnightMove} squareSize={squareSize} key={`${i}-${j}`}>{position}</Square>
    );
  }
}

  return <ChessboardContainer>{squares}</ChessboardContainer>;
};

export default Chessboard;
