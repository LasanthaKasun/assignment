import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Container, View, Text} from 'native-base';
import styles from './style';
import {Image, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import TextField from '../../components/TextFields';
import Buttons from '../../components/Buttons';
import {
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native-gesture-handler';
import {profileDetails, getUserData} from '../../actions/authAction';

class Profile extends Component {
  constructor(props) {
    super(props);
    const {auth} = this.props;
    this.state = {
      userName: auth.userName.name,
      age: '',
      streetNo: '',
      street: '',
      city: '',
    };
  }

  componentDidMount() {
    const {getProfile, auth} = this.props;
    getProfile({
      userId: auth.userName.id,
    });
  }

  onPressUpdateProfile = () => {
    const {setProfile, auth} = this.props;
    const {userName, age, streetNo, street, city} = this.state;
    setProfile({
      id: auth.userName.id,
      name: userName,
      age: parseInt(age),
      streetNo: streetNo,
      street: street,
      city: city,
    });
  };

  onChangeTextField = (event, type) => {
    switch (type) {
      case 'NAME':
        this.setState({
          userName: event.nativeEvent.text,
        });
        break;
      case 'AGE':
        this.setState({
          age: event.nativeEvent.text,
        });
        break;
      case 'SNO':
        this.setState({
          streetNo: event.nativeEvent.text,
        });
        break;
      case 'STREET':
        this.setState({
          street: event.nativeEvent.text,
        });
        break;
      case 'CITY':
        this.setState({
          city: event.nativeEvent.text,
        });
        break;
    }
  };
  render() {
    const {auth} = this.props;
    const {userName, age, streetNo, street, city} = this.state;

    const btnEnable = () => {
      return userName === '' || age === '' || streetNo === '' || city === '';
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.image}
              source={{uri: auth.userName.picture.data.url}}
            />
          </View>
          <ScrollView>
            <View style={styles.fieldWrapper}>
              <TextField
                onChange={(event) => this.onChangeTextField(event, 'NAME')}
                value={userName}
              />
            </View>
            <View style={styles.fieldWrapper}>
              <TextField
                onChange={(event) => this.onChangeTextField(event, 'AGE')}
                title="Enter Your Age"
                value={age}
                keyBoard="number-pad"
              />
            </View>
            <View style={styles.fieldWrapper}>
              <TextField
                onChange={(event) => this.onChangeTextField(event, 'SNO')}
                title="Enter Your Street No: (Ex- 234/1)"
                value={streetNo}
              />
            </View>
            <View style={styles.fieldWrapper}>
              <TextField
                onChange={(event) => this.onChangeTextField(event, 'STREET')}
                title="Enter Your Street: (Ex- Navinna Road, ...)"
                value={street}
              />
            </View>
            <View style={styles.fieldWrapper}>
              <TextField
                onChange={(event) => this.onChangeTextField(event, 'CITY')}
                title="Enter Your City: (Ex- Colombo 7)"
                value={city}
              />
            </View>
            <View style={styles.fieldWrapper}>
              <Buttons
                onClick={this.onPressUpdateProfile}
                title="Update Profile"
                disable={btnEnable()}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
Profile.PropTypes = {
  fbAuth: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, {
  setProfile: profileDetails,
  getProfile: getUserData,
})(Profile);
