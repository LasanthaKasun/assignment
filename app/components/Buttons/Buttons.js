import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'native-base';
import styles from './style';

const Buttons = ({onClick, title, disable}) => (
  <TouchableOpacity style={styles.mainWrapper}>
    <Button
      rounded
      onPress={onClick}
      style={styles.buttonWrapper}
      disabled={disable}>
      <Text style={styles.buttonText}>{title}</Text>
    </Button>
  </TouchableOpacity>
);

Buttons.PropTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Buttons;
