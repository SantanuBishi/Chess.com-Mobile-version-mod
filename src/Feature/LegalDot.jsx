import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LegalDot({ legalMoves, squareSize }) {
  const getSquarePosition = (square) => {
    const file = square[0]; // 'a' to 'h'
    const rank = parseInt(square[1]); // '1' to '8'
    const fileIndex = file.charCodeAt(0) - 'a'.charCodeAt(0);
    const rankIndex = 8 - rank;

    return {
      left: fileIndex * squareSize,
      top: rankIndex * squareSize,
    };
  };

  return (
    <>
      {legalMoves.map((moveObj) => {
        const square = moveObj.to;
        const isCapture = moveObj.flags.includes('c') || moveObj.flags.includes('e');
        const position = getSquarePosition(square);

        const style = isCapture
          ? {
              ...styles.hollowLegal,
              width: squareSize,
              height: squareSize,
              borderRadius: squareSize / 2,
              top: position.top,
              left: position.left,
            }
          : {
              ...styles.highlightLegal,
              top: position.top + (squareSize - 20) / 2,
              left: position.left + (squareSize - 20) / 2,
            };

        return <View key={`highlight-${square}`} style={style} />;
      })}
    </>
  );
}

const styles = StyleSheet.create({
  highlightLegal: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 10,
  },
  hollowLegal: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    backgroundColor: 'transparent',
    zIndex: 10,
  },
});