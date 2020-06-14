import {all} from 'redux-saga/effects';
import authSaga from './authSaga';
import requestSage from './requestSaga';
import toastSaga from './toastSaga';
import newsSaga from './newsSaga';

export default function* rootSaga() {
  yield all([authSaga(), requestSage(), toastSaga(), newsSaga()]);
}
