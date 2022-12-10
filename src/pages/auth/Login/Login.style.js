import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkorange,
  },
  body_container: {
    flex: 1,
  },
  header_container: {
    height: deviceSize.height / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: "white",
    margin: 5,
    fontSize: 30,
  },
});
