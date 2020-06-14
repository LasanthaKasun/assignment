import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SUCCESS,
  MAKE_API_REQUEST_SUCCESS,
  DISPATCH_TOAST_FAILURE,
  FAILURE,
  MAKE_API_REQUEST,
  MAKE_API_REQUEST_FAILURE,
} from '../types/types';

function* requestSaga(action) {
  try {
    const response = yield call(action.payload.api, action.payload.payload);

    const data = response.data;
    if (response.status === 200) {
      if (data) {
        yield put({type: action.payload.action + SUCCESS, data});
        yield put({type: MAKE_API_REQUEST_SUCCESS});
      } else {
        yield put({type: DISPATCH_TOAST_FAILURE, message: response.error});
      }
    } else if (response.status === 401) {
      const message = response.data && response.data.message;
      yield put({type: action.payload.action + FAILURE, message});
    } else if (response.status === 404) {
      const message = response.error;
      yield put({type: DISPATCH_TOAST_FAILURE, message});
      yield put({type: action.payload.action + FAILURE});
    } else if (response.status === 500 || response.status === 400) {
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: 'Oops! Somthing went wrong1',
      });
      yield put({type: action.payload.action + FAILURE});
    } else if (response.status === null) {
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: 'TIME OUT ERROR',
      });
      yield put({type: action.payload.action + FAILURE});
    } else {
      yield put({
        type: DISPATCH_TOAST_FAILURE,
        message: 'Oops! Somthing went wrong1',
      });
      yield put({type: action.payload.action + FAILURE});
    }
  } catch (error) {
    yield put({
      type: DISPATCH_TOAST_FAILURE,
      message: 'Oops! Somthing went wrong1',
    });
    yield put({type: MAKE_API_REQUEST + FAILURE, error});
    yield put({type: action.payload.action + FAILURE});
    yield put({type: MAKE_API_REQUEST_FAILURE});
  }
}

export default function* watcher() {
  yield takeEvery(MAKE_API_REQUEST, requestSaga);
}
