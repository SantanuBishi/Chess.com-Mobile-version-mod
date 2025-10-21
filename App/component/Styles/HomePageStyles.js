import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingBottom: 96,
    paddingTop: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderColor: '#333',
    color: 'white',
    paddingTop: 40,
  },
  ctaBlock: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 20,
  },
  cta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  iconLeft: {
    width: 90,
    height: 90,
    marginRight: 16,
    resizeMode: 'contain',
  },
  textBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtext: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginTop: 8,
    resizeMode: 'contain',
  },
  gameHistory: {
    paddingHorizontal: 16,
    paddingBottom: 96,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  opponent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  resultIcon: {
    width: 24,
    height: 24,
  },
  accuracy: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  high: { color: '#4caf50' },
  medium: { color: '#f44336' },
  low: { color: '#ff9800' },

  result: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#fff',
},

historyHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 12,
  color: '#fff',
},

scrollContent: {
  backgroundColor: '#121212' ,
},
});
