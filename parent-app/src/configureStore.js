import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
        logger,
        sagaMiddleware
    )
);

sagaMiddleware.run(rootSaga);

export default store;
