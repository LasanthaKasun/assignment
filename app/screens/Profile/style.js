import {StyleSheet, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrapper: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  fieldWrapper: {
    marginTop: 10,
  },
});
