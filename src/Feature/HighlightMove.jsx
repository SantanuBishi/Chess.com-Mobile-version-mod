import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LastMoveHighlight({ squares, squareSize, getSquarePosition }) {
  return (
    <>
      {squares.map((square, i) =>
        square ? (
          <View
            key={`highlight-${i}`}
            style={[
              styles.highlightSelected,
              {
                width: squareSize,
                height: squareSize,
                ...getSquarePosition(square),
              },
            ]}
          />
        ) : null
      )}
    </>
  );
}

const styles = StyleSheet.create({
  highlightSelected: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 0, 0.4)',
    zIndex: 4,
  },
});