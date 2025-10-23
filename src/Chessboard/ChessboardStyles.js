import { StyleSheet, Dimensions } from 'react-native';

const boardSize = Dimensions.get('window').width;

export default StyleSheet.create({
  boardWrapper: {
    position: 'relative',
    marginVertical: 8,
    alignSelf: 'center',
  },
  board: {
    position: 'absolute',
    resizeMode: 'contain',
  },
  piece: {
    position: 'absolute',
    zIndex: 5,
  },
  animatedPiece: {
    position: 'absolute',
    zIndex: 6,
    transitionDuration: '200ms',
  },
  square: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  highlightSelected: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 0, 0.4)',
    zIndex: 4,
    borderRadius: 4,
  },
});