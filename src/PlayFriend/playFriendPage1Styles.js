import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#121212',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 50,
  },
  optionCard: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    width: '95%',
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
    gap:10,
  },

  icon: {
    fontSize: 40,
    marginBottom: 8,
    color: 'white',
  },

  label: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  description: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
    textAlign: 'center',
  }
});
