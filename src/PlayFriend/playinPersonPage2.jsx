import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Dimensions, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
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
  const route = useRoute();
  const { whitePlayer = 'White', blackPlayer = 'Black' } = route.params || {};

  const game = useRef(new Chess());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [lastMoveFromSquare, setLastMoveFromSquare] = useState(null);
  const [lastMoveSquare, setLastMoveSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [positionMap, setPositionMap] = useState(getPositionMap(game.current.fen()));
  const [moveHistory, setMoveHistory] = useState([]);

  const handleSquareClick = (square) => {
    if (!selectedSquare) {
      const moves = game.current.moves({ square, verbose: true });
      if (moves.length > 0) {
        setSelectedSquare(square);
        setLegalMoves(moves);
      }
      return;
    }

    if (square === selectedSquare) {
      setSelectedSquare(null);
      setLegalMoves([]);
      return;
    }

    const isLegal = legalMoves.some((m) => m.to === square);
    if (!isLegal) {
      setSelectedSquare(null);
      setLegalMoves([]);
      return;
    }

    const move = game.current.move({
      from: selectedSquare,
      to: square,
      promotion: 'q',
    });

    if (move) {
      setLastMoveFromSquare(selectedSquare);
      setLastMoveSquare(square);
      setSelectedSquare(null);
      setLegalMoves([]);
      setPositionMap(getPositionMap(game.current.fen()));
      setMoveHistory((prev) => [...prev, move.san]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.modeLabel}>👥 Play in Person</Text>
        <Text style={styles.turnIndicator}>
          {game.current.turn() === 'w' ? `${whitePlayer} to move` : `${blackPlayer} to move`}
        </Text>
        <ScrollView horizontal style={styles.moveScroll} contentContainerStyle={styles.moveScrollContent}>
          {moveHistory.map((move, idx) => (
            <Text key={`move-${idx}`} style={styles.moveItem}>
              {idx + 1}. {move}
            </Text>
          ))}
        </ScrollView>
      </View>

      {/* Vertically Centered Block */}
      <View style={styles.centerBlock}>
        {/* Black Player Label */}
        <View style={styles.playerRow}>
          <View style={styles.playerBlock}>
            <Image source={require('../../assets/bK.png')} style={styles.playerIcon} />
            <Text style={styles.playerLabel}>{blackPlayer}</Text>
          </View>
        </View>

        {/* Board */}
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
          {lastMoveFromSquare && (
            <View
              style={[
                styles.highlightSelected,
                {
                  width: squareSize,
                  height: squareSize,
                  ...getSquarePosition(lastMoveFromSquare),
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
          {legalMoves.map((moveObj) => {
            const square = moveObj.to;
            const isCapture = moveObj.flags.includes('c') || moveObj.flags.includes('e');

            return (
              <View
                key={`highlight-${square}`}
                style={[
                  isCapture
                    ? {
                        ...styles.hollowLegal,
                        width: squareSize,
                        height: squareSize,
                        borderRadius: squareSize / 2,
                        top: getSquarePosition(square).top,
                        left: getSquarePosition(square).left,
                      }
                    : {
                        ...styles.highlightLegal,
                        top: getSquarePosition(square).top + (squareSize - 20) / 2,
                        left: getSquarePosition(square).left + (squareSize - 20) / 2,
                      },
                ]}
              />
            );
          })}

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

        {/* White Player Label */}
        <View style={styles.playerRow}>
          <View style={styles.playerBlock}>
            <Image source={require('../../assets/wK.png')} style={styles.playerIcon} />
            <Text style={styles.playerLabel}>{whitePlayer}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}