import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Container,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Button,
} from 'native-base';
import styles from './style';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Cards from '../../components/Cards';
import NavigationService from '../../config/NavigationService';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {auth, navigation} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity>
              <Button transparent onPress={() => NavigationService.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>News In Brefe</Title>
          </Body>
        </Header>
        <View>
          <ScrollView>
            <Cards
              data={navigation.state.params.data}
              profile={auth.userName.picture.data.url}
              user={auth.userName.name}
              isDetail={true}
            />
            <View style={styles.footerHeight} />
          </ScrollView>
        </View>
      </Container>
    );
  }
}
ItemDetails.PropTypes = {
  fbAuth: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, {})(ItemDetails);
