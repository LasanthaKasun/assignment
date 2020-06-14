import {StyleSheet, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainWrapper: {
    width: width - 50,
  },
  textWrapper: {
    color: '#000',
    height: 40,
    fontSize: 12,
    padding: 0,
    width: width - 50,
  },
  textWhite: {
    color: '#fff',
    height: 40,
    fontSize: 12,
    padding: 0,
    width: width - 50,
  },
});
