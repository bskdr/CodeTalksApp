import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.lightorange,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      borderWidth: 1,
      borderColor: colors.darkorange,
      backgroundColor: colors.mediumorange,
    },
  }),
};
