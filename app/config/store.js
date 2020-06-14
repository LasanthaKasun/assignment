import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import reducers from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {isUserLoging} from '../actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store, null, () => {
  store.dispatch(isUserLoging());
});

sagaMiddleware.run(rootSaga);

export default store;
