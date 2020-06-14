import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Item, Input, Icon} from 'native-base';
import styles from './style';

const TextField = ({onChange, title, value, isWhite, keyBoard}) => (
  <TouchableOpacity style={styles.mainWrapper}>
    <Item rounded>
      <Input
        keyboardType={keyBoard}
        placeholder={title}
        onChange={onChange}
        style={isWhite ? styles.textWhite : styles.textWrapper}
        placeholderTextColor="#807e7e"
        value={value}
      />
    </Item>
  </TouchableOpacity>
);

TextField.PropTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  isWhite: PropTypes.string,
  keyBoard: PropTypes.string,
};

TextField.defaultProps = {
  value: '',
  isWhite: false,
  keyBoard: 'default',
};

export default TextField;
