import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ItemList from '../screens/ItemList';
import ItemDetails from '../screens/ItemDetails';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'Home',
      navigationOptions: () => ({
        title: '',
      }),
    },
    Profile: {
      screen: Profile,
      path: 'Profile',
      navigationOptions: () => ({
        title: '',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const ItemStack = createStackNavigator(
  {
    ItemList: {
      screen: ItemList,
      path: 'ItemList',
      navigationOptions: () => ({
        title: '',
      }),
    },

    ItemDetails: {
      screen: ItemDetails,
      path: 'ItemDetails',
      navigationOptions: () => ({
        title: '',
      }),
    },
  },
  {
    initialRouteName: 'ItemList',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      path: 'Home',
    },
    ItemList: {
      screen: ItemStack,
      path: 'ItemList',
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
