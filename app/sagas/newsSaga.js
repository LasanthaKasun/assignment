import {getNews} from '../api/api';
import {
  ADLAPP_GET_NEWS,
  MAKE_API_REQUEST,
  SUCCESS,
  DISPATCH_TOAST_SUCCESS,
  REQUEST,
} from '../types/types';
import {takeLatest, putResolve, take, put} from 'redux-saga/effects';

function* getNewsList(action) {
  try {
    const payload = {
      api: getNews,
      payload: {
        pageNumber: action.payload.pageNumber,
        filter: action.payload.filter,
      },
      action: ADLAPP_GET_NEWS,
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
  yield takeLatest(ADLAPP_GET_NEWS + REQUEST, getNewsList);
}
