import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%' , 
    height: 60,
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#333',
    zIndex: 100,
  },
  
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },

  label: {
    fontSize: 12,
    color: '#888',
  },
  
  activeLabel: {
    color: 'white',
    fontWeight: 'bold',
  },

  icon: {

  width: 28,       // ⬅️ Adjust width as needed (e.g. 24, 28, 32)
  height: 28,      // ⬅️ Match height to width for square icons
  marginBottom: 2, // Optional spacing between icon and label
   // Optional: apply tint if icons are monochrome
},

});
