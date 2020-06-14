import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function reset(routeName, params, index) {
  const rest = StackActions.reset({
    index: index,
    key: null,
    actions: [
      NavigationActions.navigate({
        routeName,
        params,
      }),
    ],
  });
  _navigator.dispatch(rest);
}

function goBack(key) {
  const backAction = NavigationActions.back({
    key: key,
  });
  _navigator.dispatch(backAction);
}

export default {
  navigate,
  reset,
  setTopLevelNavigator,
  goBack,
};
