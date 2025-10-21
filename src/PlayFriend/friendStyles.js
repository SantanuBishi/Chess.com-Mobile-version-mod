import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardWrapper: {
    position: 'relative',
  },
  board: {
    position: 'absolute',
    resizeMode: 'contain',
  },
  piece: {
    position: 'absolute',
    zIndex: 2,
  },
  square: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: 'transparent',
  },
  legalDot: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex: 1,
  },
  turnText: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 12,
  },
  historyPanel: {
    marginTop: 16,
    paddingHorizontal: 12,
    width: '100%',
  },
  historyText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 4,
  },
});
