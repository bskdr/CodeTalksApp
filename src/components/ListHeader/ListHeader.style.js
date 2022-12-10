import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.lightorange,
    borderStyle: 'dashed',
    borderColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
