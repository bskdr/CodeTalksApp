import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});
