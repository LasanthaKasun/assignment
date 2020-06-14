import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './config/store';
import {Root} from 'native-base';
import AppContainer from './config/routes';
import NavigationService from './config/NavigationService';
import PushNotification from 'react-native-push-notification';

console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  // testPushNotify = () => {
  //   PushNotification.localNotification({
  //     title: 'My Notification Title', // (optional)
  //     message: 'My Notification Message', // (required)
  //   });
  // };

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Root>
      </Provider>
    );
  }
}
