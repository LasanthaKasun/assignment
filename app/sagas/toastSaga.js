import {takeLatest, call} from 'redux-saga/effects';
import {
  DISPATCH_TOAST_SUCCESS,
  DISPATCH_TOAST_FAILURE,
  DISPATCH_TOAST_INFO,
  DISPATCH_TOAST_WARNING,
} from '../types/types';
import {
  successToast,
  errorToast,
  infoToast,
  warningToast,
} from '../common/helper';

function* showToastMessage(action) {
  switch (action.type) {
    case DISPATCH_TOAST_SUCCESS:
      yield call(successToast, action.message);
      break;
    case DISPATCH_TOAST_FAILURE:
      yield call(errorToast, action.message);
      break;
    case DISPATCH_TOAST_INFO:
      yield call(infoToast, action.message);
      break;
    case DISPATCH_TOAST_WARNING:
      yield call(warningToast, action.message);
      break;
    default:
      yield call(infoToast, action.message);
      break;
  }
}

export default function* watcher() {
  yield takeLatest(DISPATCH_TOAST_SUCCESS, showToastMessage);
  yield takeLatest(DISPATCH_TOAST_FAILURE, showToastMessage);
  yield takeLatest(DISPATCH_TOAST_INFO, showToastMessage);
}
