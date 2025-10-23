// src/components/Board/ChessBoard.jsx

import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import LegalDot from '../Feature/LegalDot';
import LastMoveHighlight from '../Feature/HighlightMove';
import styles from './ChessboardStyles';

const boardSize = Dimensions.get('window').width;
const squareSize = boardSize / 8;

const pieceMap = {
  K: require('../../assets/wK.png'), Q: require('../../assets/wQ.png'), R: require('../../assets/wR.png'),
  B: require('../../assets/wB.png'), N: require('../../assets/wN.png'), P: require('../../assets/wP.png'),
  k: require('../../assets/bK.png'), q: require('../../assets/bQ.png'), r: require('../../assets/bR.png'),
  b: require('../../assets/bB.png'), n: require('../../assets/bN.png'), p: require('../../assets/bP.png'),
};

const files = 'abcdefgh';
const allSquares = [];
for (let r = 8; r >= 1; r--) {
  for (let f = 0; f < 8; f++) {
    allSquares.push(`${files[f]}${r}`);
  }
}

const getSquarePosition = (square) => {
  const rank = parseInt(square[1], 10);
  const file = files.indexOf(square[0]);
  const row = 8 - rank;
  const col = file;
  return {
    top: row * squareSize,
    left: col * squareSize,
  };
};

export default function ChessBoard({
  positionMap,
  legalMoves,
  highlightSquares,
  onSquarePress,
}) {
  return (
    <View style={[styles.boardWrapper, { width: boardSize, height: boardSize }]}>
      <Image
        source={require('../../assets/Chessboard.png')}
        style={[styles.board, { width: boardSize, height: boardSize }]}
        pointerEvents="box-none"
      />

      {Object.entries(positionMap).map(([square, piece]) => (
        <Image
          key={square}
          source={pieceMap[piece]}
          style={[
            styles.piece,
            {
              width: squareSize,
              height: squareSize,
              ...getSquarePosition(square),
            },
          ]}
        />
      ))}

      <LastMoveHighlight
        squares={[highlightSquares?.from, highlightSquares?.to]}
        squareSize={squareSize}
        getSquarePosition={getSquarePosition}
      />

      <LegalDot legalMoves={legalMoves} squareSize={squareSize} />

      {allSquares.map((square) => (
        <TouchableOpacity
          key={`touch-${square}`}
          style={[
            styles.square,
            {
              width: squareSize,
              height: squareSize,
              ...getSquarePosition(square),
            },
          ]}
          onPress={() => onSquarePress(square)}
        />
      ))}
    </View>
  );
}