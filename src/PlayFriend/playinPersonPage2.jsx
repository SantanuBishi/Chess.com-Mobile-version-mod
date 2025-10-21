import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Chess } from 'chess.js';
import styles from './playinPersonPage2Styles';

const boardSize = Dimensions.get('window').width;
const squareSize = boardSize / 8;

const pieceMap = {
  K: require('../../assets/wK.png'), Q: require('../../assets/wQ.png'), R: require('../../assets/wR.png'),
  B: require('../../assets/wB.png'), N: require('../../assets/wN.png'), P: require('../../assets/wP.png'),
  k: require('../../assets/bK.png'), q: require('../../assets/bQ.png'), r: require('../../assets/bR.png'),
  b: require('../../assets/bB.png'), n: require('../../assets/bN.png'), p: require('../../assets/bP.png'),
};

const getPositionMap = (fen) => {
  const rows = fen.split(' ')[0].split('/');
  const files = 'abcdefgh';
  const position = {};
  rows.forEach((row, rIdx) => {
    let cIdx = 0;
    for (const char of row) {
      if (isNaN(char)) {
        position[`${files[cIdx]}${8 - rIdx}`] = char;
        cIdx++;
      } else {
        cIdx += parseInt(char, 10);
      }
    }
  });
  return position;
};

const getSquarePosition = (square) => {
  const files = 'abcdefgh';
  const rank = parseInt(square[1], 10);
  const file = files.indexOf(square[0]);
  const row = 8 - rank;
  const col = file;
  return {
    top: row * squareSize,
    left: col * squareSize,
  };
};

const allSquares = [];
for (let r = 8; r >= 1; r--) {
  for (let f = 0; f < 8; f++) {
    allSquares.push(`${'abcdefgh'[f]}${r}`);
  }
}

export default function PlayinPersonPage2() {
  const game = useRef(new Chess());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [lastMoveSquare, setLastMoveSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [positionMap, setPositionMap] = useState(getPositionMap(game.current.fen()));

  const handleSquareClick = (square) => {
    if (!selectedSquare) {
      const moves = game.current.moves({ square, verbose: true });
      if (moves.length > 0) {
        setSelectedSquare(square);
        setLegalMoves(moves.map((m) => m.to));
      }
      return;
    }

    const move = game.current.move({
      from: selectedSquare,
      to: square,
      promotion: 'q',
    });

    if (move) {
      setLastMoveSquare(square);
      setSelectedSquare(null);
      setLegalMoves([]);
      setPositionMap(getPositionMap(game.current.fen()));
    } else {
      const moves = game.current.moves({ square, verbose: true });
      if (moves.length > 0) {
        setSelectedSquare(square);
        setLegalMoves(moves.map((m) => m.to));
      } else {
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.boardWrapper, { width: boardSize, height: boardSize }]}>
        <Image
          source={require('../../assets/Chessboard.png')}
          style={[styles.board, { width: boardSize, height: boardSize }]}
          pointerEvents="box-none"
        />

        {/* Pieces */}
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

        {/* Highlights */}
        {selectedSquare && (
          <View
            style={[
              styles.highlightSelected,
              {
                width: squareSize,
                height: squareSize,
                ...getSquarePosition(selectedSquare),
              },
            ]}
          />
        )}
        {lastMoveSquare && (
          <View
            style={[
              styles.highlightSelected,
              {
                width: squareSize,
                height: squareSize,
                ...getSquarePosition(lastMoveSquare),
              },
            ]}
          />
        )}
        {legalMoves.map((square) => (
  <View
    key={`highlight-${square}`}
    style={[
      styles.highlightLegal,
      {
        top: getSquarePosition(square).top + (squareSize - 16) / 2,
        left: getSquarePosition(square).left + (squareSize - 16) / 2,
      },
    ]}
  />
))}

        {/* Touch Overlays */}
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
            onPress={() => handleSquareClick(square)}
          />
        ))}
      </View>
    </View>
  );
}