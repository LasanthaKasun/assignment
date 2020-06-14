import React, {Component} from 'react';
import {Container, View, Text} from 'native-base';
import {connect} from 'react-redux';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import styles from './style/home.style';
import {KeyboardAvoidingView} from 'react-native';
import {FBAuthnticate} from '../../actions/authAction';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const {fbAuth} = this.props;
    return (
      <Container style={styles.container}>
        <KeyboardAvoidingView enabled style={styles.keyboardView}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>ADL ASSIGNMENT</Text>
          </View>
          <View style={styles.contentWrapper}>
            <LoginButton
              onLoginFinished={(error, result) => {
                console.log(result);
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then((data) => {
                    fbAuth(data);
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

Home.PropTypes = {
  fbAuth: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  fbAuth: FBAuthnticate,
})(Home);
