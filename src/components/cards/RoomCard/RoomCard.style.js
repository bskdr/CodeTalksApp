import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: deviceSize.width / 2 - 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  title: {
    color: colors.lightorange,
    fontSize: 40,
  },
});
