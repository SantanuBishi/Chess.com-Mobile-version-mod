// src/PlayFriend/playFriendPage2Styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#1a1a1a',
    padding: 24,
    borderRadius: 16,
    width: '90%',
    maxWidth: 360,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  headerIcon: {
    fontSize: 40,
    color: '#ffffff',
  },

  headerTextBlock: {
    flexDirection: 'column',
    fontSize:100,
    marginTop:0,
  },
  headerLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  headerSubtext: {
    fontSize: 14,
    color: '#cccccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    width: '40%',
  },
  input: {
    minWidth: '55%',
    padding: 8,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    flexGrow: 1,
  },
  select: {
    minWidth: '55%',
    padding: 8,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    flexGrow: 1,
  },
  selectText: {
    color: '#ffffff',
    fontSize: 16,
  },
  toggleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#82a74a',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },

  playText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
