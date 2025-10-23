import React, { useRef, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Chess } from 'chess.js';

export default function MoveHistoryPanel({
  moveHistory,
  moveIndex,
  setMoveIndex,
  setPositionMap,
  setActiveColor,
  getPositionMap,
  rollbackIndex,
  setRollbackIndex,
  game,
  setHighlightSquares,
}) {
  const scrollRef = useRef();
  const moveRefs = useRef([]);

  const getMovePairs = (moves) => {
    const pairs = [];
    for (let i = 0; i < moves.length; i += 2) {
      pairs.push([moves[i], moves[i + 1]]);
    }
    return pairs;
  };

  useEffect(() => {
    if (moveIndex === -1) {
      scrollRef.current?.scrollToEnd({ animated: true });
    } else {
      const ref = moveRefs.current[moveIndex];
      ref?.measureLayout(
        scrollRef.current,
        (x) => {
          scrollRef.current?.scrollTo({ x: x - 100, animated: true });
        },
        () => {}
      );
    }
  }, [moveIndex]);

  const jumpToMove = (index) => {
    const tempGame = new Chess();
    let lastMove = null;

    for (let i = 0; i < index; i++) {
      const move = tempGame.move(moveHistory[i]);
      if (!move) {
        console.warn('Invalid move at index', i, moveHistory[i]);
        return;
      }
      lastMove = move;
    }

    game.current = tempGame; // ✅ CRITICAL FIX

    setMoveIndex(index);
    setRollbackIndex(index);
    setPositionMap(getPositionMap(tempGame.fen()));
    setActiveColor(tempGame.turn());

    if (lastMove) {
      setHighlightSquares({
        from: lastMove.from,
        to: lastMove.to,
        capture: lastMove.flags.includes('c') ? lastMove.to : null,
      });
    } else {
      setHighlightSquares(null);
    }
  };

  return (
    <ScrollView
      horizontal
      ref={scrollRef}
      style={styles.moveScroll}
      contentContainerStyle={styles.moveScrollContent}
      showsHorizontalScrollIndicator={false}
    >
      {getMovePairs(moveHistory).map(([white, black], idx) => (
        <View key={`pair-${idx}`} style={styles.pairBlock}>
          <TouchableOpacity
            onPress={() => jumpToMove(idx * 2)}
            ref={(el) => (moveRefs.current[idx * 2] = el)}
          >
            <View
              style={[
                styles.moveItem,
                moveIndex === idx * 2 && styles.activeMove,
              ]}
            >
              <Text style={styles.moveText}>
                {idx + 1}. {white || ''}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => jumpToMove(idx * 2 + 1)}
            ref={(el) => (moveRefs.current[idx * 2 + 1] = el)}
          >
            <View
              style={[
                styles.moveItem,
                moveIndex === idx * 2 + 1 && styles.activeMove,
              ]}
            >
              <Text style={styles.moveText}>
                {black || ''}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  moveScroll: {
    marginTop: 40,
    maxHeight: 30,
    width: '100%',
  },
  moveScrollContent: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  pairBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moveItem: {
    marginRight: 12,
    padding: 2,
    borderRadius: 5,
  },
  moveText: {
    fontSize: 14,
    color: '#ccc',
  },
  activeMove: {
    backgroundColor: '#4b4a4aff',
    borderRadius: 5,
  },
});