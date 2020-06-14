import {StyleSheet, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  textWrapper: {
    fontSize: 10,
  },
  cardFtWidth: {
    height: 40,
  },
  bodyFtWidth: {
    marginTop: -14,
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'justify',
    color: '#49494a',
    padding: 5,
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
    fontWeight: 'bold',
    padding: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
  },
});
