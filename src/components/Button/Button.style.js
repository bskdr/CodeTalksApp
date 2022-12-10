import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.lightorange,
    },
    title: {
      ...base_style.title,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#fff',
    },
    title: {
      ...base_style.title,
      color: colors.darkorange
    },
  }),
};
