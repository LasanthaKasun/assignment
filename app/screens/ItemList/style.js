import {StyleSheet, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  footerHeight: {
    height: 60,
  },
  modelWrapper: {
    backgroundColor: '#0b024a',
    padding: 5,
    opacity: 0.9,
    height: height,
    alignContent: 'center',
    alignItems: 'center',
  },
  modelWrapperInner: {
    marginTop: 60,
    alignContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 30,
    height: 30,
    left: width / 2.5,
    alignItems: 'center',
    marginTop: 10,
  },
  modelWrapperText: {
    color: '#fff',
  },
  searchField: {
    marginTop: 30,
  },
  closeField: {
    marginTop: 10,
  },
  spinerWrapper: {
    position: 'absolute',
    height: height,
    width: width,
    backgroundColor: '#000',
    zIndex: 100,
    opacity: 0.8,
  },
  spinner: {
    top: height / 2.2,
  },
  loadMore: {
    backgroundColor: '#010966',
    alignContent: 'center',
    borderRadius: 5,
    padding: 4,
  },
  footerWrapper: {
    padding: 5,
  },
  loadMoreText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
  },
});
