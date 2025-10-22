import { StyleSheet, Dimensions } from 'react-native';

const boardSize = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingBottom: 80,
  },

  header: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modeLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  turnIndicator: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 4,
  },

  moveScroll: {
    marginTop: 40,
    maxHeight: 30,
    width: '100%',
  },

  moveScrollContent: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },

  moveItem: {
    marginRight: 12,
    fontSize: 14,
    color: '#ccc',
    backgroundColor: '#4b4a4aff',
    padding:2,
    borderRadius: 5,
  },

  centerBlock: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -boardSize / 2 }],
    zIndex: 1,
  },

  playerRow: {
     flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  marginVertical: 4,
},

  playerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  playerIcon: {
    width: 40,
    height: 40,
    marginRight: 6,
  },

  playerLabel: {
    fontSize: 25,
    fontWeight: '500',
    color: '#eee',
  },

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

  timerControls: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 12,
},
controlButton: {
  backgroundColor: '#444',
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 6,
  marginHorizontal: 8,
},
controlText: {
  color: '#fff',
  fontWeight: '600',
},
});