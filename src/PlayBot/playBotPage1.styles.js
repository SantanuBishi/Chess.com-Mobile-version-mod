import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },

  headingBlock: {
    marginTop: 20,
    marginBottom: 12,
    backgroundColor: '#121212',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  botPreview: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 12,
    minHeight: 120,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 8,
  },

  rating: {
    fontSize: 16,
    color: '#CCCCCC',
    marginRight: 8,
  },

  flag: {
    fontSize: 14,
    color: '#AAAAAA',
  },

  speech: {
    fontSize: 14,
    color: '#FFFFFF',
    fontStyle: 'italic',
    marginTop: 12,
    textAlign: 'left',
    height: 40,
    overflow: 'hidden',
  },

  scrollArea: {
    flex: 1,
  },

  categoryBlock: {
    marginVertical: 20,
  },

  categoryTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
    fontSize: 20,
  },

  botRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  botCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
    marginTop: 20,
  },

  selectedBotCard: {
    borderWidth: 2,
    borderColor: '#81b64c',
    borderRadius: 8,
  },

  botThumb: {
    width: 64,
    height: 64,
    borderRadius: 24,
  },

  botName: {
    fontSize: 16,
    color: '#fff',
  },

  configPanel: {
    padding: 16,
    backgroundColor: '#1a1a1a54',
    borderRadius: 12,
    marginTop: 16,
  },

  configTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#fff',
    fontSize: 16,
  },

  modeColorRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 12,
},


dropdownWrapper: {
  flex: 1,
  marginRight: 12,
  zIndex: 1000,
},


  dropdown: {
    backgroundColor: '#2a2a2a',
    borderColor: '#444',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 6,
    zIndex: 1000,
  },
colorSelectorInline: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'nowrap',
  flexShrink: 1,
},


  dropdownContainer: {
    backgroundColor: '#2a2a2a54',
    borderColor: '#444',
    maxHeight: 200,
    zIndex: 999,
    elevation: 3,
  },

  colorButton: {
    marginHorizontal: 8,
  },

  selectedColor: {
    borderWidth: 2,
    borderColor: '#81b64c',
    borderRadius: 6,
  },

  colorIcon: {
    width: 32,
    height: 32,
  },

  customPanel: {
    marginTop: 12,
    color:'#fff',
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  sliderBlock: {
    marginVertical: 12,
  },

  configBottom: {
    marginTop: 16,
  },

  playButton: {
    backgroundColor: '#81b64c',
    width: '100%',
    padding: 14,
    borderRadius: 8,
  },

  disabledButton: {
    backgroundColor: '#aaa',
  },

  playText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;