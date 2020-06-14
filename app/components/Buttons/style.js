import {StyleSheet, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    width: width - 50,
  },
  buttonWrapper: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
