import {StyleSheet, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#807e7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    top: height / 3,
  },
  contentWrapper: {
    top: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  textWrapper: {
    marginTop: 5,
  },
  keyboardView: {
    height: height,
  },
});
