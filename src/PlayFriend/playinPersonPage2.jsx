import { Platform, ToastAndroid } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Chess } from 'chess.js';
import styles from './playinPersonPage2Styles';
import { TimerBlock, MoveHistoryPanel } from '../Feature';
import ChessBoard from '../Chessboard/Chessboard';

const boardSize = Dimensions.get('window').width;

const showTimerAlert = () => {
  const message = "press start to continue, cutiee.";
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
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

export default function PlayinPersonPage2() {
  const route = useRoute();
  const {
    whitePlayer = 'White',
    blackPlayer = 'Black',
    timeControl = 0,
    startTimer = false,
  } = route.params || {};

  const game = useRef(new Chess());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [positionMap, setPositionMap] = useState(getPositionMap(game.current.fen()));
  const [moveHistory, setMoveHistory] = useState([]);
  const [moveIndex, setMoveIndex] = useState(-1);
  const [rollbackIndex, setRollbackIndex] = useState(0);
  const [highlightSquares, setHighlightSquares] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [whiteTime, setWhiteTime] = useState(timeControl);
  const [blackTime, setBlackTime] = useState(timeControl);
  const [activeColor, setActiveColor] = useState('w');
  const [isRunning, setIsRunning] = useState(startTimer);
  const [isBoardTouchable, setBoardTouchable] = useState(startTimer);
  const [timeLog, setTimeLog] = useState([]);

  useEffect(() => {
    if (!isRunning || timeControl === 0) return;

    const interval = setInterval(() => {
      if (activeColor === 'w') {
        setWhiteTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            alert(`${whitePlayer} lost on time`);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setBlackTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            alert(`${blackPlayer} lost on time`);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, activeColor]);

  const handleSquareClick = (square) => {
    if (!isRunning || !isBoardTouchable) {
  showTimerAlert();
  return;
}
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
      setSelectedSquare(null);
      setLegalMoves([]);
      setPositionMap(getPositionMap(game.current.fen()));
      setMoveHistory((prev) => [...prev.slice(0, rollbackIndex), move.san]);
      setMoveIndex(rollbackIndex);
      setRollbackIndex(rollbackIndex + 1);
      setActiveColor(game.current.turn());

      setHighlightSquares({
        from: move.from,
        to: move.to,
        capture: move.flags.includes('c') ? move.to : null,
      });

      setTimeLog((prev) => [
        ...prev.slice(0, rollbackIndex),
        { w: whiteTime, b: blackTime },
      ]);
    }
  };

  const syncHighlight = () => {
    const lastMove = game.current.history({ verbose: true }).slice(-1)[0];
    setHighlightSquares({
      from: lastMove?.from || null,
      to: lastMove?.to || null,
      capture: lastMove?.flags?.includes('c') ? lastMove.to : null,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.modeLabel}>👥 Play in Person</Text>
        <MoveHistoryPanel
          moveHistory={moveHistory}
          moveIndex={moveIndex}
          setMoveIndex={setMoveIndex}
          setRollbackIndex={setRollbackIndex}
          setPositionMap={setPositionMap}
          setActiveColor={setActiveColor}
          getPositionMap={getPositionMap}
          game={game}
          setHighlightSquares={setHighlightSquares}
        />
      </View>

      <View style={styles.centerBlock}>
        <View style={styles.playerRow}>
          <View style={styles.playerBlock}>
            <Image source={require('../../assets/bK.png')} style={styles.playerIcon} />
            <Text style={styles.playerLabel}>{blackPlayer}</Text>
          </View>
          {timeControl > 0 && (
            <View style={styles.timerRight}>
              <TimerBlock
                mode="b"
                activeColor={activeColor}
                whiteTime={whiteTime}
                blackTime={blackTime}
                isRunning={isRunning && activeColor === 'b'}
                timeControl={timeControl}
              />
            </View>
          )}
        </View>

        <ChessBoard
          positionMap={positionMap}
          legalMoves={legalMoves}
          highlightSquares={highlightSquares}
          onSquarePress={handleSquareClick}
        />

        <View style={styles.playerRow}>
          <View style={styles.playerBlock}>
            <Image source={require('../../assets/wK.png')} style={styles.playerIcon} />
            <Text style={styles.playerLabel}>{whitePlayer}</Text>
          </View>
          {timeControl > 0 && (
            <View style={styles.timerRight}>
              <TimerBlock
                mode="w"
                activeColor={activeColor}
                whiteTime={whiteTime}
                blackTime={blackTime}
                isRunning={isRunning && activeColor === 'w'}
                timeControl={timeControl}
              />
            </View>
          )}
        </View>

        <View style={styles.controlRow}>
          <TouchableOpacity style={styles.controlButton} onPress={() => setShowOptions((prev) => !prev)}>
            <Text style={styles.controlText}>Options</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => {
              const isAtLastMove = moveIndex === moveHistory.length - 1;
              if (!isRunning && isAtLastMove) {
                setIsRunning(true);
                setBoardTouchable(true);
              } else {
                setIsRunning(false);
                setBoardTouchable(false);
              }
            }}
          >
            <Text style={styles.controlText}>{isRunning ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => {
              if (moveIndex >= 0) {
                const rollback = moveHistory.slice(0, moveIndex);
                game.current.reset();
                rollback.forEach((m) => game.current.move(m));
                setPositionMap(getPositionMap(game.current.fen()));
                setMoveIndex(moveIndex - 1);
                setRollbackIndex(moveIndex);
                setActiveColor(game.current.turn());

                const snapshot = timeLog[moveIndex - 1];
                if (snapshot) {
                  setWhiteTime(snapshot.w);
                  setBlackTime(snapshot.b);
                }

                syncHighlight();
                setIsRunning(false);
                setBoardTouchable(false);
              }
            }}
          >
            <Text style={styles.controlText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => {
              if (moveIndex < moveHistory.length - 1) {
                game.current.move(moveHistory[moveIndex + 1]);
                setPositionMap(getPositionMap(game.current.fen()));
                setMoveIndex(moveIndex + 1);
                setRollbackIndex(moveIndex + 2);
                setActiveColor(game.current.turn());

                const snapshot = timeLog[moveIndex + 1];
                if (snapshot) {
                  setWhiteTime(snapshot.w);
                  setBlackTime(snapshot.b);
                }

                syncHighlight();
                setIsRunning(false);
                setBoardTouchable(false);
              }
            }}
          >
            <Text style={styles.controlText}>Forward</Text>
          </TouchableOpacity>
        </View>

        {/* Inline Options */}
        {showOptions && (
          <View style={styles.inlineOptions}>
            <TouchableOpacity
              style={styles.optionItem}
              onPress={() =>
                Alert.alert('Confirm Draw', 'Offer a draw?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Yes', onPress: () => alert('Draw Requested') },
                ])
              }
            >
              <Text style={styles.controlText}>Draw</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() =>
                Alert.alert('Confirm Resign', 'Are you sure?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Yes', onPress: () => alert('You Resigned') },
                ])
              }
            >
              <Text style={styles.controlText}>Resign</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};