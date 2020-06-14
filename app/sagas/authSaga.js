import {select, takeLatest, putResolve, take, put} from 'redux-saga/effects';
import {
  ADLAPP_IS_USER_LOGIN,
  ADLAPP_FB_AUTHANTICATE,
  REQUEST,
  MAKE_API_REQUEST,
  SUCCESS,
  DISPATCH_TOAST_SUCCESS,
  ADLAPP_SET_PROFILE_DATA,
  ADLAPP_GET_PROFILE_DATA,
} from '../types/types';
import {getFbName, setUserDetails, getUserDetails} from '../api/api';
import PushNotification from 'react-native-push-notification';
import NavigationService from '../config/NavigationService';
function* isUserLoggedIn(action) {
  try {
    const authState = yield select((state) => state.auth);
    if (authState) {
      console.log('user Log');
    } else {
      console.log('no');
    }
  } catch (e) {
    console.log('error :', e);
  }
}

function* authenticatFbUser(action) {
  try {
    const payload = {
      api: getFbName,
      payload: {
        yourUserId: action.payload.userID,
        yourUserAccessToken: action.payload.accessToken,
      },
      action: ADLAPP_FB_AUTHANTICATE,
    };
    yield putResolve({type: MAKE_API_REQUEST, payload});
    const ActionState = yield take(payload.action + SUCCESS);
    if (ActionState.data) {
      PushNotification.localNotification({
        title: `Hi ${ActionState.data.name}`,
        message: 'Login Success Welcome to ADL',
      });
      NavigationService.navigate('Profile');
      yield put({type: DISPATCH_TOAST_SUCCESS, message: 'Success'});
    }
  } catch (e) {
    console.log('error :', e);
  }
}

function* setUserProfileData(action) {
  try {
    const payload = {
      api: setUserDetails,
      payload: action.payload,
      action: ADLAPP_SET_PROFILE_DATA,
    };
    yield putResolve({type: MAKE_API_REQUEST, payload});
    const ActionState = yield take(payload.action + SUCCESS);
    if (ActionState.data) {
      NavigationService.reset('ItemList', {}, 0);
      yield put({type: DISPATCH_TOAST_SUCCESS, message: 'Success'});
    }
  } catch (e) {
    console.log('error :', e);
  }
}

function* getUserProfileData(action) {
  try {
    const payload = {
      api: getUserDetails,
      payload: action.payload,
      action: ADLAPP_SET_PROFILE_DATA,
    };
    yield putResolve({type: MAKE_API_REQUEST, payload});
    const ActionState = yield take(payload.action + SUCCESS);
    if (ActionState.data) {
      yield put({type: DISPATCH_TOAST_SUCCESS, message: 'Success'});
    }
  } catch (e) {
    console.log('error :', e);
  }
}

export default function* authWatcher() {
  yield takeLatest(ADLAPP_IS_USER_LOGIN, isUserLoggedIn);
  yield takeLatest(ADLAPP_FB_AUTHANTICATE + REQUEST, authenticatFbUser);
  yield takeLatest(ADLAPP_SET_PROFILE_DATA + REQUEST, setUserProfileData);
  yield takeLatest(ADLAPP_GET_PROFILE_DATA + REQUEST, getUserProfileData);
}
